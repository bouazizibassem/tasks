package com.example.nexus.controllers;

import com.example.nexus.Repositories.RoleRepo;
import com.example.nexus.Repositories.UserRepo;
import com.example.nexus.SErvices.Implimentations.UserDetailsImpl;
import com.example.nexus.SErvices.Implimentations.UserService;
import com.example.nexus.entities.ERole;
import com.example.nexus.entities.Role;
import com.example.nexus.entities.User;
import com.example.nexus.security.JwtUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.nexus.Dto.SignupRequest;

import com.example.nexus.Dto.JwtResponse;
import com.example.nexus.Dto.LoginRequest;
import com.example.nexus.Dto.MessageResponse;
import com.example.nexus.Dto.SignupRequest;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class authController {
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
   // @Autowired
   // PasswordEncoder encoder;
   @PostMapping(value="/signUp")
   @ResponseBody
   public ResponseEntity<String> signUpV3(@RequestParam String username,
                                          @RequestParam String email,
                                          @RequestParam String password,
                                          @RequestParam List<String> roleType
   ) throws Exception {


        System.out.println(email);
       String user="{\"username\": \""+username+"\",   \"email\": \""+email+"\", \"password\": \""+password+"\" }";
       System.out.println("hneeeeeeeeeeeeeeee"+user);
       ObjectMapper objectMapper = new ObjectMapper();
       User userDTO = objectMapper.readValue(user, User.class);
       System.out.println(userDTO.getUsername());
       // Validate input attributes

       if (userDTO.getUsername() == null || userDTO.getUsername().matches(".*\\d.*")) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Lastname");
       }


       if (userDTO.getEmail() == null || !userDTO.getEmail().matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Email Address");
       }

       Set<Role> roles = new HashSet<>();
       System.out.println("tagtag"+roleType);
       roleType.forEach(role -> {
           switch (role){
               case "admin":
                   Role adminrole= roleRepo.findByNameRole(ERole.admin).orElse(null);
                   roles.add(adminrole);
                   break;
               case "manager":
                   Role managrole= roleRepo.findByNameRole(ERole.manager).orElse(null);
                   roles.add(managrole);
                   break;
               case "employee":
                   Role employeerole= roleRepo.findByNameRole(ERole.employee).orElse(null);
                   roles.add(employeerole);
                   break;
               default:
                   Role defaultrole= roleRepo.findByNameRole(ERole.employee).orElse(null);
                   System.out.println(defaultrole);
                   roles.add(defaultrole);

           }
       });
      // Role role= roleRepo.findByNameRole(roleType).orElse(null);
     //  roles.add(role);
       // Create User object
       User u = new User();
       u.setEmail(userDTO.getEmail());
       u.setPassword(encoder.encode(userDTO.getPassword()));
       u.setUsername(userDTO.getUsername());
       u.setRoles(roles);
       System.out.println(u);

         // Add user and assign role
       if (userService.signup(u)){
           return ResponseEntity.status(HttpStatus.CREATED).body("User created");
       }else{
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email or Username exists");
       }
   }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUserV2(@Valid @RequestBody LoginRequest loginRequest) throws IOException {

        User user = userRepo.findByUsername(loginRequest.getUsername()).orElse(null);
        System.out.println(user.getRoles());



        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = jwtUtils.generateJwtToken(authentication);

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
           // List<String> roles = userDetails.getAuthorities().stream()
                  //  .map(item -> item.getAuthority())
                //    .collect(Collectors.toList());

            // Reset the failed login attempt count if authentication succeeds


            return ResponseEntity.ok(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail()
                   // roles
            ));
        } catch (AuthenticationException e) {
            // Authentication failed, increment failed login attempt count
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");}
            }

        // Authentication failed, return error response

}

package com.example.nexus.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private  String teamname;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "team" , fetch = FetchType.LAZY)
    @JsonIgnore
    List<User> users;




    @OneToOne(mappedBy = "team", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Project project ;



}

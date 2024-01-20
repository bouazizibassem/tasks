package com.example.nexus.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProject;
    private Date startDate;
    private String delai;
    private String projectName;


    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Sprint> sprints;
    @JsonIgnore
    @OneToOne
    private Team team ;

}
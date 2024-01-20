package com.example.nexus.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Sprint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSprint ;
    private Date datedebut;
    private  Date datefin;
    private String nomSprint;
    private  boolean etatSprint;
    @Enumerated(EnumType.STRING)
    private  SprintEnum status;

    @ManyToOne
    @JoinColumn(name = "Project_id")
    @JsonIgnoreProperties("teamList")
    private  Project project;
    @ManyToOne
    User user;

}

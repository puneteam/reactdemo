package com.technozip.empmgmt.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technozip.empmgmt.model.AuthenticationBean;

//Controller
//@CrossOrigin(origins={ "http://localhost:3000", "http://localhost:4200" })
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }   
}

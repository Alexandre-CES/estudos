package com.first.first_spring_app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.first.first_spring_app.domain.User;
import com.first.first_spring_app.service.HelloWorldService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

@RestController // =  @Controller + @ResponseBody
@RequestMapping("/hello-world") //Endpoint /hello-world
public class HelloWorldController {
    
    @Autowired
    private HelloWorldService helloWorldService;
    
    @GetMapping //endpoint /
    public String helloWorld(){
        return this.helloWorldService.helloWorld("Alexandre");
    }
    
    @PostMapping("/{id}")
    public String helloWorldPost(@PathVariable("id") String id, @RequestParam(value = "filter", defaultValue = "none") String filter, @RequestBody User body){
        return "Hello, World " + body.getName() + " : " + id + " : " + filter;
    }
}

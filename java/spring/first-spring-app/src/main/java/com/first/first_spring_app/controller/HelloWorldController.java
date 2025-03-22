package com.first.first_spring_app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;;

@RestController // =  @Controller + @ResponseBody
@RequestMapping("/hello-world") //Endpoint /hello-world
public class HelloWorldController {
    
    @GetMapping //endpoint /
    public String helloWorld(){
        return "Hello World";
    }
    
}

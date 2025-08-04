package demo.practo.practo_demo.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
public class Ping {

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Object> ping() {
        return Map.of("message", "pong", "status", 200);
    }
}

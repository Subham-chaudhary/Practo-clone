package demo.practo.practo_demo.controller;

import demo.practo.practo_demo.dto.Doctor;
import demo.practo.practo_demo.repository.DoctorRepository;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
@RequestMapping("/")
public class TestController {

    @Autowired
    private DoctorRepository doctorRepository;

    @PostMapping("/insertdata")
    public Doctor insertData(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @GetMapping("/ping")
    @ResponseStatus(value=org.springframework.http.HttpStatus.OK)
    public Map<String, Object> getMethodName() {
        return Map.of("message", "pong", "status", 200); 
    }
    
}

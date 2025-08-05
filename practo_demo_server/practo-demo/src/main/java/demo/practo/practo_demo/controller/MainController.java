package demo.practo.practo_demo.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.reactive.function.client.WebClient;

import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;

import demo.practo.practo_demo.dto.ObjectMaker;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api")
public class MainController {

        private final WebClient webClient;
        private final ObjectMaker objectMaker;

        public MainController(WebClient webClient, ObjectMaker objectMaker) {
                this.webClient = webClient;
                this.objectMaker = objectMaker;
        }

        @GetMapping("/autocomplete")
        public Object autocomplete(@RequestParam String q, @RequestParam Boolean isregion) {
                String targetUrl;
                if (isregion) {
                        targetUrl = UriComponentsBuilder
                                        .fromUriString("https://www.practo.com/client-api/v1/cerebro/v3/autocomplete")
                                        .queryParam("query", q)
                                        .queryParam("indexes", "[\"city\",\"locality\"]")
                                        .build()
                                        .toUriString();
                } else {
                        targetUrl = UriComponentsBuilder
                                        .fromUriString("https://www.practo.com/client-api/v1/cerebro/v3/autocomplete")
                                        .queryParam("query", q)
                                        .build()
                                        .toUriString();
                }
                String responseBody = webClient.get()
                                .uri(targetUrl)
                                .retrieve()
                                .bodyToMono(String.class)
                                .block();

                // System.out.println("responseBody:::::::: " + responseBody);

                String result = objectMaker.readBreadth(responseBody, "results").toString();
                return objectMaker.readTree(result, "results", "default", "matches");
        }

        @GetMapping("/suggestions")
        public Object suggestions(@RequestParam String city, @RequestParam String query) {
                String targetUrl = UriComponentsBuilder
                                .fromUriString("https://www.practo.com/health/api/top/omni/suggestion.json")
                                .queryParam("city", city)
                                .queryParam("locale", "en-US")
                                .queryParam("query_type", query)
                                .build()
                                .toUriString();

                String responseBody = webClient.get()
                                .uri(targetUrl)
                                .retrieve()
                                .bodyToMono(String.class)
                                .block();
                // System.out.println("responseBody:::::::: " + responseBody);
                String result = objectMaker.readBreadth(responseBody, "results").toString();
                return objectMaker.readTree(result, "results", "default", "matches");
        }

        @PostMapping("/search/doctors")
        public Object searchDoctors(@RequestBody String body) throws JsonProcessingException {

                String result = objectMaker
                                .readBreadth(body, "doctors", "headers", "guided_prompt", "listing_data",
                                                "display_specialization")
                                .toString();
                return Map.of("prime_header",
                                objectMaker.readTree(result, "headers", "entities", "prime_header"),
                                "doctors",
                                objectMaker.readTree(result, "doctors", "entities"), "guided_prompt",
                                objectMaker.readTree(result, "guided_prompt", "entities", "1", "title"),
                                "doctors_found",
                                objectMaker.readTree(result, "listing_data", "doctors_found"), "display_specialization",
                                objectMaker.readTree(result, "display_specialization"));
        }

}

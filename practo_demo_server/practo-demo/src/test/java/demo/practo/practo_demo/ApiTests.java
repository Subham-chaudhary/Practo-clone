package demo.practo.practo_demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
public class ApiTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testPing() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/ping"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("pong"));
    }

    @Test
    public void testAutocomplete() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/autocomplete")
                .param("q", "ban"))
                .andExpect(status().isOk());
    }

    @Test
    public void testSuggestions() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/suggestions")
                .param("city", "Bangalore")
                .param("query", "dentist"))
                .andExpect(status().isOk());
    }

    @Test
    public void testSearchDoctors() throws Exception {
        String requestBody = "{}"; // Empty JSON for now
        mockMvc.perform(MockMvcRequestBuilders.get("/api/search/doctors")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andExpect(status().isOk());
    }
}

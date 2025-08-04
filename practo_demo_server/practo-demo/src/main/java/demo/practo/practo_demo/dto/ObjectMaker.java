package demo.practo.practo_demo.dto;

import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class ObjectMaker {

    private final ObjectMapper objectMapper;

    public ObjectMaker() {
        this.objectMapper = new ObjectMapper();
    }

    public Object readBreadth(String responseBody, String... nodes) {
        try {
            // System.out.println("Tring to read breadth");
            JsonNode root = objectMapper.readTree(responseBody);
            ObjectNode result = objectMapper.createObjectNode();
            for (String node : nodes) {
                JsonNode currentNode = root.path(node);
                // System.out.println("currentNode:::::::: " + currentNode);
                if (currentNode.isMissingNode()) {
                    result.put(node, "Node not found");
                }
                result.set(node, currentNode);
            }
            return result;
        } catch (JsonProcessingException e) {
            return Map.of("error", "Failed to parse JSON response");
        }
    } 
    // public Object readBreadth(String responseBody, Map<String, Object> filter) {
    //     try {
            
    //     } catch (JsonProcessingException e) {
    //         return Map.of("error", "Failed to parse JSON response");
    //     }
    // }

    public Object readTree(String responseBody, String... paths) {
        try {
            // System.out.println("Tring to read tree");
            JsonNode currentNode = objectMapper.readTree(responseBody);
            for (String path : paths) {
                currentNode = currentNode.path(path);
                // System.out.println("currentNode:::::::: " + currentNode);
                if (currentNode.isMissingNode()) {
                    return Map.of("error", "Path not found");
                }
            }
            return currentNode;
        } catch (JsonProcessingException e) {
            return Map.of("error", "Failed to parse JSON response");
        }
    }

}

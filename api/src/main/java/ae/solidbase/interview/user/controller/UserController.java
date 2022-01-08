package ae.solidbase.interview.user.controller;
import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.repository.UserRepository;
import ae.solidbase.interview.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")

public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = new ArrayList<User>();
            userRepository.findAll().forEach(users::add);


            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/users")
    public User createUser(@RequestBody User user) {
        if (user != null) {
            return userService.saveUser(user);
        } else {
            return null;
        }
    }

    @DeleteMapping(value = "/users")
    public void deleteUser(@RequestBody User user) {
        if (user != null) {
            userService.deleteUser(user);
        } else {

        }
    }
    
}

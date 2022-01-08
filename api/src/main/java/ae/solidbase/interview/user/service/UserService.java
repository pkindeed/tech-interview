package ae.solidbase.interview.user.service;

import ae.solidbase.interview.user.model.User;
import ae.solidbase.interview.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // TODO: Business logic goes here
    @Autowired
    UserRepository userRepository;

    public UserService() {
    
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(User user) {
         userRepository.delete(user);
    }
}

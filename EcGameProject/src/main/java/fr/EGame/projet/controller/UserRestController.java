package fr.EGame.projet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.User;



@CrossOrigin
@RestController
//@Secured("ROLE_ADMIN")
public class UserRestController {

	@Autowired
	private UserRepository userRepository;

	@Secured("ROLE_ADMIN")
	@GetMapping("/users")
	public List<User> getUser() {
		
		return userRepository.findAll();
	}

	@Secured("ROLE_ADMIN")
	@GetMapping("/user/{email}")
	public User getUser(@PathVariable("email") String email) {
		return userRepository.findByEmail(email);
	}

	@Secured("ROLE_ADMIN")
	@GetMapping("/initusers")
	public User initUsers() {
		User u1 = new User("test@gmail.com", "pass" );
		System.out.println(u1);
		userRepository.save(u1);
		User u2 = new User("test2@gmail.com", "pass2");
		System.out.println(u2);
		return userRepository.save(u2);
		
	}

}

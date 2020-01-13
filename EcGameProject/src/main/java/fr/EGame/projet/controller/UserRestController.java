package fr.EGame.projet.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.RoleRepository;
import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.Address;
import fr.EGame.projet.model.Role;
import fr.EGame.projet.model.User;

@CrossOrigin
@RestController
public class UserRestController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/users")
	public List<User> getUser() {

		return userRepository.findAll();
	}

	@GetMapping("/user/byemail/{email}")
	public User getUser(@PathVariable("email") String email) {
		return userRepository.findByEmail(email);
	}

	@PostMapping("/role/byemail")
	public List<Role> getUserRole(@RequestBody User user) {
		System.out.println(user);
		User u5 = userRepository.findByEmail(user.getEmail());
		return u5.getRoles();
	}

	
	
	
	//ADRESSE 
	
	@PostMapping("/addAddresses/byid")
	public List<Address> addAdress(@RequestBody User user) {
		User u5 = userRepository.findByUID(user.getUID());
		u5.setAddresses(user.getAddresses());
		userRepository.save(u5);
 		return u5.getAddresses();
	}
	
	

	@PostMapping("/getaddresses/byemail")
	public List<Address> getUserAdresses(@RequestBody User user) {
		User u5 = userRepository.findByEmail(user.getEmail());
		return u5.getAddresses();
	}

	//
	
	@PostMapping("/editProfile/byid")
	public User editProfile(@RequestBody User user) {
		User u5 = userRepository.findByUID(user.getUID());
		u5.setFirstname(user.getFirstname());
		u5.setLastname(user.getLastname());
		u5.setEmail(user.getEmail());
		u5.setPhoneno(user.getPhoneno());
		userRepository.save(u5);
 		return u5;
	} 
	
	@PostMapping("/infouser/byemail")
	public List<Object> getUserInfo(@RequestBody User user) {
		System.out.println(user);
		User u5 = userRepository.findByEmail(user.getEmail());
		List<Object> info = new ArrayList<Object>();
		;
		info.add(u5.getUID());
		info.add(u5.getEmail());
		info.add(u5.getLastname());
		info.add(u5.getFirstname());
		info.add(u5.getPhoneno());

		return info;
	}
	

	@PostMapping(value = "/user/register", consumes = "application/json", produces = "application/json")
	public int addUser(@RequestBody User user) {
		System.out.println(user);
		userRepository.save(user);
		User u5 = userRepository.findByEmail(user.getEmail());
		userRepository.setRole(u5.getUID(), (long) 2);
		UserRepository.sendEmail(u5.getEmail());
		return 202;
	}

	@GetMapping("/user/byid/{uid}")
	public User getUser(@PathVariable("uid") Long uid) {
		return userRepository.findByUID(uid);
	}

	@GetMapping("/initusers")
	public String initUsers() {
		/*
		 * User u1 = new User("test@gmail.com", "pass" ); System.out.println(u1);
		 * userRepository.save(u1);
		 */

		Role admin = new Role((long) 1, "ROLE_ADMIN");
		Role client = new Role((long) 2, "ROLE_CLIENT");
		Role vendeur = new Role((long) 3, "ROLE_SELLER");
		

		roleRepository.save(admin);
		roleRepository.save(client);
		roleRepository.save(vendeur);

		User u2 = new User("admin@gmail.com", "admin");
		u2.setFirstname("Jules");
		u2.setLastname("DupontAdmin");
		u2.setPhoneno("0123456789");
		userRepository.save(u2);
		System.out.println(u2);

		User u3 = userRepository.findByEmail(u2.getEmail());
		userRepository.setRole(u3.getUID(), (long) 1);

		User u4 = new User("client@gmail.com", "client");
		u4.setFirstname("Mathieu");
		u4.setLastname("FoxClient");
		u4.setPhoneno("0623456789");
		userRepository.save(u4);
		System.out.println(u4);

		User u5 = userRepository.findByEmail(u4.getEmail());
		userRepository.setRole(u5.getUID(), (long) 2);

		User u6 = new User("vendeur@gmail.com", "vendeur");
		u6.setFirstname("Anna");
		u6.setLastname("HenriVendeur");
		u6.setPhoneno("0776655443");
		userRepository.save(u6);
		System.out.println(u6);
		
		
		User testVendeur = new User("testvendeur@gmail.com","testvendeur");
		userRepository.save(testVendeur);
		
		User u8 = userRepository.findByEmail(testVendeur.getEmail());
		userRepository.setRole(u8.getUID(), (long) 3);

		User u7 = userRepository.findByEmail(u6.getEmail());
		userRepository.setRole(u7.getUID(), (long) 3);

		return "Done";

	}

}

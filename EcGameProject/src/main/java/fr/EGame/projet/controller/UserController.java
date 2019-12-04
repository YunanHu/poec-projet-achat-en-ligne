package fr.EGame.projet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.User;

@Controller
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping(value = "/inscription")
	public String registration() {
		return "inscription";
	}
	
	@PostMapping(value = "/inscription")
	public ModelAndView registration(@RequestParam(value = "email") String email,
			@RequestParam(value = "password") String password) {
		User u1 = new User(email, password);
		userRepository.save(u1);
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/confirmEmail");
		mv.addObject("Email", email);
		mv.addObject("Password", password);
		return mv;
	}
}

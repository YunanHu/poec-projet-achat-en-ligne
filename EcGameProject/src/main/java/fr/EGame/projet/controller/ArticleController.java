/*package fr.EGame.projet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import fr.EGame.projet.dao.ArticleRepository;
import fr.EGame.projet.model.Article;

@Controller
public class ArticleController {
	
	@Autowired
	private ArticleRepository articleRepository;
	
	
	@GetMapping(value="/addNewArticle")
	public String addNewArticle() {
		System.out.println("test");

		return "addNewArticle";
	}
	


}
*/
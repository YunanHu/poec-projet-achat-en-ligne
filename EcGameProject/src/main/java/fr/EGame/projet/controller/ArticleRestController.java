package fr.EGame.projet.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.ArticleRepository;
import fr.EGame.projet.dao.CategoryRepository;
import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.Category;

@RestController
public class ArticleRestController {
	
	@Autowired
	private ArticleRepository articleRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping("/addArticle")
	public void addArticle(Model model) {
		
	}
	
	
	@GetMapping("/initArticles")
	public void initArticles() {
		
		List<Category> CategoryList = categoryRepository.findAll();
		Article a1 = new Article();
		a1.setArticleAddedDateTime(LocalDateTime.now());
		a1.setArticleBrand("Control");
		//a1.setArticleDateAvailibility(LocalDateTime.);
	}
	
	

}

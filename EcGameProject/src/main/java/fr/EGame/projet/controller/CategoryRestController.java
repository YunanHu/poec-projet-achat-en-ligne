package fr.EGame.projet.controller;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import fr.EGame.projet.dao.CategoryRepository;
import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.Category;

@RestController
public class CategoryRestController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	
	//@Secured("ROLE_CLIENT")
	@GetMapping("/categories")
	public List<Category> getCategories(){
		return categoryRepository.findAll();
	}
	@GetMapping("/categories/{idCategory}")
	public Category getCategory(@PathVariable("idCategory") Long id){
		return categoryRepository.findById(id).orElse(null);
	}
	
	@GetMapping("/articleByCategory/{categoryLabel}")
	public List<Article> getCategoryByNom(@PathVariable("categoryLabel") String categoryLabel){
		
		List<Article> listArticlesByCategoryLabel = new ArrayList<>();
		System.out.println(categoryLabel);
		List<Category> listCat = categoryRepository.findByCategoryLabel(categoryLabel);
		
		System.out.println();
		for(Category category :listCat) {
			
			System.out.println(category.getCategoryDescription());
			System.out.println(category.getArticles().size());
			listArticlesByCategoryLabel = category.getArticles();
		}
		System.out.println(listArticlesByCategoryLabel.size());
		return listArticlesByCategoryLabel;
		
	}
	
	@PostMapping("/addCategory")
	public boolean addCategory(@RequestBody Category category) {
		
		Category cat = new Category();
		cat.setCategoryDescription(category.getCategoryDescription());
		cat.setCategoryLabel(category.getCategoryLabel());
		categoryRepository.save(cat);
		return true;
	}
	

	

	

}

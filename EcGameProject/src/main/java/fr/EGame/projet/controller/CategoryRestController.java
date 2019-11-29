package fr.EGame.projet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.CategoryRepository;
import fr.EGame.projet.model.Category;

@RestController
public class CategoryRestController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping("/categories")
	public List<Category> getCategories(){
		return categoryRepository.findAll();
	}
	@GetMapping("/categories/{idCategory}")
	public Category getCategory(@PathVariable("idCategory") Long id){
		return categoryRepository.findById(id).orElse(null);
	}
	
	@GetMapping("/categoryByLabel/{categoryLabel}")
	public List<Category> getCategoryByNom(@PathVariable("categoryLabel") String categoryLabel){
		
		System.out.println(categoryLabel);
		List<Category> listCat = categoryRepository.findByCategoryLabel(categoryLabel);
		
		System.out.println(listCat.size());
		for(Category category :listCat) {
			System.out.println(category.getCategoryDescription());
		}
		return categoryRepository.findByCategoryLabel(categoryLabel);
	}
	

}

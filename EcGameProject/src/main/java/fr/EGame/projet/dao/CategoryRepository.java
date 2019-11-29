package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	List<Category> findByCategoryLabel(String categoryLabel);
	
}

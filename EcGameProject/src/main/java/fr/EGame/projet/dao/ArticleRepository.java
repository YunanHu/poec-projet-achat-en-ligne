package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {
	
	List<Article> findByArticleDematerialized(boolean articleDematerialized);

	
}

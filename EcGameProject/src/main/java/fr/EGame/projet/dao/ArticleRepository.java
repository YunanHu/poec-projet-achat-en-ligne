package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.Cart;
import fr.EGame.projet.model.User;

public interface ArticleRepository extends JpaRepository<Article, Long> {
	
	List<Article> findByArticleDematerialized(boolean articleDematerialized);
	
	Article findByArticleName(String name);
	
	Article findByArticlePlateforme(String plateforme);
	List<Article> findByArticleDeactivated(boolean isDactivated);

	
	@Query("select c from Article c where c.user = :user")
	List<Article> findByUser(@Param("user") User user);

	
}



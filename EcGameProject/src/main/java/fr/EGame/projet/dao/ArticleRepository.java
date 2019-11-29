package fr.EGame.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

}

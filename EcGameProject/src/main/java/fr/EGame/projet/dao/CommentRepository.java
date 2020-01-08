package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	
	@Query("select c from Comment c where c.commentArticle = :commentArticle")
	List<Comment> findByCommentArticle(@Param("commentArticle") Article commentArticle);
} 

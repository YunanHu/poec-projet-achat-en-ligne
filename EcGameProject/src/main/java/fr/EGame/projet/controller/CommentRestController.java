package fr.EGame.projet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.ArticleRepository;
import fr.EGame.projet.dao.CommentRepository;
import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.Comment;

@RestController
public class CommentRestController {
	
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private ArticleRepository articleRepository;	
	
	@GetMapping("/getAllComments")
	public List<Comment> getAllComments(){
		return commentRepository.findAll();
	}
	
	@GetMapping("/getComment/{idArticle}")
	public List<Comment> getCommentByArticle(@PathVariable("idArticle") Long idArticle) {
		
		Article article = (Article) articleRepository.findById(idArticle).orElse(null);

		
		return commentRepository.findByCommentArticle(article);
	}
	
	
	@PostMapping("/saveComment")
	public Comment addComment(@RequestBody Comment comment) {
		return commentRepository.saveAndFlush(comment);
	}
//	
//	@PostMapping("/comments")
//	public Mono<String> addComment(Mono<Comment> newComment) {
//		if (commentSink != null) {
//			return newComment
//				.map(comment -> {
//					commentSink.next(MessageBuilder
//						.withPayload(comment)
//						.setHeader(MessageHeaders.CONTENT_TYPE,
//							MediaType.APPLICATION_JSON_VALUE)
//						.build());
//					return comment;
//				})
//				.flatMap(comment -> {
//					meterRegistry
//						.counter("comments.produced", "imageId", comment.getImageId())
//						.increment();
//					return Mono.just("redirect:/");
//				});
//		} else {
//			return Mono.just("redirect:/");
//		}
//	}
	
}
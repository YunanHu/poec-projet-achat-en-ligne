package fr.EGame.projet.model;


import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "comment")
public class Comment 
{
	@Id
	@GeneratedValue
	Long idComment;
	@NonNull
	String commentContent;
	@NonNull
	@ManyToOne
	User commentUser;
//	boolean purchasedArticle; 
	@NonNull
	@ManyToOne
	Article commentArticle;
	LocalDate postedAt;
	
}

package fr.EGame.projet.model;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
	
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	private List<Comment> comments = new ArrayList<Comment>();
	
	public boolean add(Comment e) {
		return comments.add(e);

	}
	public boolean remove(Comment o) {
		return comments.remove(o);
	}
	
}

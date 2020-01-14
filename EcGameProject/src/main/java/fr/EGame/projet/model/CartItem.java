package fr.EGame.projet.model;

import java.util.List;

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
@Table(name = "cartitem")
public class CartItem {

	@Id
	@GeneratedValue
	Long idCartItem;

	@NonNull
	@ManyToOne
	Article itemArticle;
	String productName;
	String productImage;
	int qty;
	float rate;
	/*
	public void setProductName(Article itemArticle) {
		this.productName = itemArticle.getArticleName();
	}
	public void setRate(Article itemArticle) {
		this.rate = itemArticle.getArticlePrice();
	}
	public void setProductImage(Article itemArticle) {
		List<ArticlesImages> artListImg = itemArticle.getArtListImg();
		this.productImage = artListImg.get(0).getPath();
	}*/
	
}

package fr.EGame.projet.model;


import java.awt.Image;
import java.io.Serializable;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Articles")
public class Article 
{
	@Id
	@GeneratedValue
	private int idArticle ;
	private String refArticle ;
	private String articleName;
	private String articleBrand;
	@ManyToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	private List<Category> articleCategories;
	private String articleDescription;
	private float articlePrice;
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})

	private List<ArticlesImages> artListImg = new ArrayList<ArticlesImages>();

	private LocalDateTime articleAddedDateTime;
	private int articleQty;
	private float articlePricePromo;
	private LocalDateTime articlePromoBegDateTime;
	private LocalDateTime articleDateTimePromoEndDateTime;
	private LocalDateTime articleDateAvailibility;

	public LocalDateTime getArticleDateAvailibility() {
		return articleDateAvailibility;
	}
	public void setArticleDateAvailibility(LocalDateTime articleDateAvailibility) {
		this.articleDateAvailibility = articleDateAvailibility;
	}
	public int getIdArticle() {
		return idArticle;
	}
	public void setIdArticle(int idArticle) {
		this.idArticle = idArticle;
	}
	public String getRefArticle() {
		return refArticle;
	}
	public void setRefArticle(String refArticle) {
		this.refArticle = refArticle;
	}
	public String getArticleName() {
		return articleName;
	}
	public void setArticleName(String articleName) {
		this.articleName = articleName;
	}
	public String getArticleBrand() {
		return articleBrand;
	}
	public void setArticleBrand(String articleBrand) {
		this.articleBrand = articleBrand;
	}
	public List<Category> getArticleCategories() {
		return articleCategories;
	}
	public void setArticleCategories(List<Category> articleCategories) {
		this.articleCategories = articleCategories;
	}
	public String getArticleDescription() {
		return articleDescription;
	}
	public void setArticleDescription(String articleDescription) {
		this.articleDescription = articleDescription;
	}
	public float getArticlePrice() {
		return articlePrice;
	}
	public void setArticlePrice(float articlePrice) {
		this.articlePrice = articlePrice;
	}

	public List<ArticlesImages> getArtListImg() {
		return artListImg;
	}

	public void setArtListImg(List<ArticlesImages> artListImg) {
		this.artListImg = artListImg;


	}
	public LocalDateTime getArticleAddedDateTime() {
		return articleAddedDateTime;
	}
	public void setArticleAddedDateTime(LocalDateTime articleAddedDateTime) {
		this.articleAddedDateTime = articleAddedDateTime;
	}

	public void setarticleQty(int articleQty) {
		this.articleQty = articleQty;
	}
	
	public float getarticlePricePromo() {
		return articlePricePromo;
	}
	public void setarticlePricePromo(float articlePricePromo) {
		this.articlePricePromo = articlePricePromo;
	}
	public LocalDateTime getArticlePromoBegDateTime() {
		return articlePromoBegDateTime;
	}
	public void setArticlePromoBegDateTime(LocalDateTime articlePromoBegDateTime) {
		this.articlePromoBegDateTime = articlePromoBegDateTime;
	}
	public LocalDateTime getArticleDateTimePromoEndDateTime() {
		return articleDateTimePromoEndDateTime;
	}
	public void setArticleDateTimePromoEndDateTime(LocalDateTime articleDateTimePromoEndDateTime) {
		this.articleDateTimePromoEndDateTime = articleDateTimePromoEndDateTime;
	}
	public Article() 
	{

	}
	public Article(String refArticle, String articleName, String articleBrand, List<Category> articleCategories, float articlePrice, List<ArticlesImages> artListImg,
			String articleDescription, 
			LocalDateTime articleAddedDateTime, int articleQty) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articleBrand = articleBrand;
		this.articleCategories = articleCategories;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.articleAddedDateTime = articleAddedDateTime;
		this.articleQty = articleQty;
	}
	
	

	@Override
	public String toString() 
	{
		return "Article [idArticle=" + idArticle + ", refArticle=" + refArticle + ", articleName=" + articleName
				+ ", articleBrand=" + articleBrand + ", articleCategories=" + articleCategories
				+ ", articleDescription=" + articleDescription + ", articlePrice=" + articlePrice + ", artListImg="
				+ artListImg + ", articleAddedDateTime=" + articleAddedDateTime + ", articleQty=" + articleQty
				+ ", articlePricePromo=" + articlePricePromo + ", articlePromoBegDateTime=" + articlePromoBegDateTime
				+ ", articleDateTimePromoEndDateTime=" + articleDateTimePromoEndDateTime + ", articleDateAvailibility="
				+ articleDateAvailibility + "]";
	}
	public boolean add(Category e) {
		return articleCategories.add(e);
	}
	public boolean remove(Object o) {
		return articleCategories.remove(o);
	}
	public boolean add(ArticlesImages e) {
		return artListImg.add(e);

	}
	

	public boolean remove(ArticlesImages o) {
		return artListImg.remove(o);
	}

	 

	
	
	
	
	

}

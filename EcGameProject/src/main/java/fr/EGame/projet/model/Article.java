package fr.EGame.projet.model;

import java.awt.image.BufferedImage;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale.Category;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import javassist.expr.NewArray;


@Entity
@Table(name = "Articles")
public class Article implements Serializable
{
	@Id
	@GeneratedValue
	private Long idArticle ;
	private String refArticle ;
	private String articleName;
	private String articleBrand;
	@ManyToMany(cascade={ CascadeType.MERGE, CascadeType.REFRESH},fetch = FetchType.EAGER)
	private List<Category> articleCategories = new ArrayList<Category>();
	private String articleDescription;
	private float articlePrice;
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	private List<String> artListImg = new ArrayList<String>();
	private LocalDateTime articleAddedDateTime;
	private int articleQty;
	private float articlePricePromo;
	private LocalDateTime articlePromoBegDateTime;
	private LocalDateTime articleDateTimePromoEndDateTime;
	private LocalDateTime articleDateAvailibility;
	
	private static final long serialVersionUID = 1L;
	
	

	public LocalDateTime getArticleDateAvailibility() {
		return articleDateAvailibility;
	}
	public void setArticleDateAvailibility(LocalDateTime articleDateAvailibility) {
		this.articleDateAvailibility = articleDateAvailibility;
	}
	public Long getIdArticle() {
		return idArticle;
	}
	public void setIdArticle(Long idArticle) {
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
	public List<String> getArtListImg() {
		return artListImg;
	}
	public void setArtListImgBuffered(List<String> artListImg) {
		this.artListImg = artListImg;
	}
	public LocalDateTime getArticleAddedDateTime() {
		return articleAddedDateTime;
	}
	public void setArticleAddedDateTime(LocalDateTime articleAddedDateTime) {
		this.articleAddedDateTime = articleAddedDateTime;
	}
	public int getarticleQty(){
		return articleQty;
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
	public Article(String refArticle, String articleName, String articleBrand, List<Category> articleCategories,
			String articleDescription, float articlePrice, List<String> artListImg,
			LocalDateTime articleAddedDateTime, int articleQty) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articleBrand = articleBrand;
		this.articleCategories = articleCategories;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImg = artListImg;
		this.articleAddedDateTime = articleAddedDateTime;
		this.articleQty = articleQty;
	}
	
	


	@Override
	public String toString() {
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
	public boolean add(String e) {
		return artListImg.add(e);
	}
	
	public boolean remove(String o) {
		return artListImg.remove(o);
	}
	
	

	
	
	
	
	

}

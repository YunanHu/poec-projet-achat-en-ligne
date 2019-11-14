package org.eclipse.eGameProject.model;

import java.awt.image.BufferedImage;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale.Category;

public class Article 
{
	private int idArticle ;
	private String refArticle ;
	private String articleName;
	private String articleBrand;
	private List<Category> articleCategories;
	private String articleDescription;
	private float articlePrice;
	private List<BufferedImage> artListImgBuffered;
	private LocalDateTime articleAddedDateTime;
	private int articleQty;
	private float ArticlePricePromo;
	private LocalDateTime articlePromoBegDateTime;
	private LocalDateTime articleDateTimePromoEndDateTime;
	private boolean availibility;
	
	public enum filter { name, brand, category, seller;};
	public boolean isAvailibility() {
		return availibility;
	}
	public void setAvailibility(boolean availibility) {
		this.availibility = availibility;
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
	public List<BufferedImage> getArtListImgBuffered() {
		return artListImgBuffered;
	}
	public void setArtListImgBuffered(List<BufferedImage> artListImgBuffered) {
		this.artListImgBuffered = artListImgBuffered;
	}
	public LocalDateTime getArticleAddedDateTime() {
		return articleAddedDateTime;
	}
	public void setArticleAddedDateTime(LocalDateTime articleAddedDateTime) {
		this.articleAddedDateTime = articleAddedDateTime;
	}
	public int getarticleQty() 
	{
		if(this.articleQty==0)
			this.availibility=false;
		return articleQty;
	}
	public void setarticleQty(int articleQty) {
		this.articleQty = articleQty;
	}
	
	public float getArticlePricePromo() {
		return ArticlePricePromo;
	}
	public void setArticlePricePromo(float articlePricePromo) {
		ArticlePricePromo = articlePricePromo;
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
			String articleDescription, float articlePrice, List<BufferedImage> artListImgBuffered,
			LocalDateTime articleAddedDateTime, int articleQty) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articleBrand = articleBrand;
		this.articleCategories = articleCategories;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImgBuffered = artListImgBuffered;
		this.articleAddedDateTime = articleAddedDateTime;
		this.articleQty = articleQty;
	}
	
	
	public Article(String refArticle, String articleName, String articleBrand, List<Category> articleCategories,
			String articleDescription, float articlePrice, List<BufferedImage> artListImgBuffered,
			LocalDateTime articleAddedDateTime, int articleQty, float articlePricePromo,
			LocalDateTime articlePromoBegDateTime, LocalDateTime articleDateTimePromoEndDateTime) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articleBrand = articleBrand;
		this.articleCategories = articleCategories;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImgBuffered = artListImgBuffered;
		this.articleAddedDateTime = articleAddedDateTime;
		this.articleQty = articleQty;
		ArticlePricePromo = articlePricePromo;
		this.articlePromoBegDateTime = articlePromoBegDateTime;
		this.articleDateTimePromoEndDateTime = articleDateTimePromoEndDateTime;
	}
	@Override
	public String toString() 
	{
		return "Article [idArticle=" + idArticle + ", refArticle=" + refArticle + ", articleName=" + articleName
				+ ", articleBrand=" + articleBrand + ", articleCategories=" + articleCategories
				+ ", articleDescription=" + articleDescription + ", articlePrice=" + articlePrice
				+ ", artListImgBuffered=" + artListImgBuffered + ", articleAddedDateTime=" + articleAddedDateTime
				+ ", articleQty=" + articleQty + ", ArticlePricePromo=" + ArticlePricePromo
				+ ", articlePromoBegDateTime=" + articlePromoBegDateTime + ", articleDateTimePromoEndDateTime="
				+ articleDateTimePromoEndDateTime + "]";
	}
	
	 
	public void addArticle()
	{
		
	}
	
	public List<Article> articleGetList()
	{
		return new ArrayList<Article>();
	}
	
	public void deactivatedArticle( Article article)
	{
		
	}
	
	public List<Article> getArticleBy(filter f, String parameter )
	{
		List<Article> listArticles =articleGetList();
		List<Article> listArticlesFiltredArticles = new ArrayList<Article>();
		
		if (listArticles.size()!=0)
		{
			switch (f)
			{
				case name:
					//listArticlesFiltredArticles = listArticles.stream().filter(x-> x.articleName==parameter);
					break;
				case brand :
					//listArticlesFiltredArticles = listArticles.stream().filter(x-> x.articleBrand==parameter);
					break;
				case category:
					break;
				case seller:
					break;
				default:
					break;
			
			}
		}
		
		
		
		return new ArrayList<Article>();
		
	}
	
	public int getArticleQtty (int idArticle)
	{
		return 0;
	}
	
	
	
	
	

}

package fr.EGame.projet.model;


import java.awt.Image;
import java.io.Serializable;
import java.security.interfaces.RSAMultiPrimePrivateCrtKey;
import java.time.LocalDate;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Articles")
public class Article 
{
	@Id
	@GeneratedValue
	private Long idArticle ;
	private String refArticle ;
	private String articleName;
	private String articlePlateforme;
	@ManyToOne(cascade={CascadeType.DETACH, CascadeType.REMOVE})
	private Category articleCategory;
	private String articleDescription;
	private float articlePrice;
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	private List<ArticlesImages> artListImg = new ArrayList<ArticlesImages>();
	private LocalDate articleAddedDate;
	private int articleQty;
	private float articlePricePromo;
	private LocalDate articlePromoBegDate;
	private LocalDate articleDateTimePromoEndDate;
	private LocalDate articleDateAvailibility;
	private boolean articleDematerialized;
	private boolean articleDeactivated;
	
	
	public Article() 
	{

	}


	public Article(String refArticle, String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, List<ArticlesImages> artListImg, LocalDate articleAddedDate,
			int articleQty, float articlePricePromo, LocalDate articlePromoBegDate,
			LocalDate articleDateTimePromoEndDate, LocalDate articleDateAvailibility, boolean articleDematerialized) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImg = artListImg;
		this.articleAddedDate = articleAddedDate;
		this.articleQty = articleQty;
		this.articlePricePromo = articlePricePromo;
		this.articlePromoBegDate = articlePromoBegDate;
		this.articleDateTimePromoEndDate = articleDateTimePromoEndDate;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
	}
	
	
	public Article(String refArticle, String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, List<ArticlesImages> artListImg, LocalDate articleAddedDate,
			int articleQty, float articlePricePromo, LocalDate articlePromoBegDate,
			LocalDate articleDateTimePromoEndDate, LocalDate articleDateAvailibility, boolean articleDematerialized,
			boolean articleDeactivated) {
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImg = artListImg;
		this.articleAddedDate = articleAddedDate;
		this.articleQty = articleQty;
		this.articlePricePromo = articlePricePromo;
		this.articlePromoBegDate = articlePromoBegDate;
		this.articleDateTimePromoEndDate = articleDateTimePromoEndDate;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleDeactivated = articleDeactivated;
	}
	
	public Article(String refArticle, String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, LocalDate articleAddedDate, int articleQty,
			LocalDate articleDateAvailibility, boolean articleDematerialized,boolean articleDeactivated) {
		super();
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.articleAddedDate = articleAddedDate;
		this.articleQty = articleQty;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleDeactivated=articleDeactivated;
	}
	
	public Article(String refArticle, String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, LocalDate articleAddedDate, int articleQty,
			LocalDate articleDateAvailibility, boolean articleDematerialized) {
		super();
		this.refArticle = refArticle;
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.articleAddedDate = articleAddedDate;
		this.articleQty = articleQty;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
	}
	
	public boolean isArticleDeactivated() {
		return articleDeactivated;
	}
	public void setArticleDeactivated(boolean articleDeactivated) {
		this.articleDeactivated = articleDeactivated;
	}
	public boolean isArticleDematerialized() {
		return articleDematerialized;
	}
	public void setArticleDematerialized(boolean articleDematerialized) {
		this.articleDematerialized = articleDematerialized;
	}
	public LocalDate getArticleDateAvailibility() {
		return articleDateAvailibility;
	}
	public void setArticleDateAvailibility(LocalDate articleDateAvailibility) {
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


	public String getArticlePlateforme() {
		return articlePlateforme;
	}
	public void setArticlePlateforme(String articlePlateforme) {
		this.articlePlateforme = articlePlateforme;
	}
	public LocalDate getArticleAddedDate() {
		return articleAddedDate;
	}
	public void setArticleAddedDate(LocalDate articleAddedDate) {
		this.articleAddedDate = articleAddedDate;
	}
	public LocalDate getArticlePromoBegDate() {
		return articlePromoBegDate;
	}
	public void setArticlePromoBegDate(LocalDate articlePromoBegDate) {
		this.articlePromoBegDate = articlePromoBegDate;
	}
	public LocalDate getArticleDateTimePromoEndDate() {
		return articleDateTimePromoEndDate;
	}
	public void setArticleDateTimePromoEndDate(LocalDate articleDateTimePromoEndDate) {
		this.articleDateTimePromoEndDate = articleDateTimePromoEndDate;
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


	public void setarticleQty(int articleQty) {
		this.articleQty = articleQty;
	}
	
	public float getarticlePricePromo() {
		return articlePricePromo;
	}
	public void setarticlePricePromo(float articlePricePromo) {
		this.articlePricePromo = articlePricePromo;
	}
	public Category getArticleCategory() {
		return articleCategory;
	}
	public void setArticleCategory(Category articleCategory) {
		this.articleCategory = articleCategory;
	}
	public boolean add(ArticlesImages e) {
		return artListImg.add(e);

	}
	public boolean remove(ArticlesImages o) {
		return artListImg.remove(o);
	}

	 

	
	
	
	
	

}

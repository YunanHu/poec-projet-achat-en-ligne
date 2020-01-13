package fr.EGame.projet.model;



import java.io.Serializable;
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
	@ManyToOne
	private Category articleCategory;
	private String articleDescription;
	private float articlePrice;
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	private List<ArticlesImages> artListImg = new ArrayList<ArticlesImages>();
	private LocalDate articleAddedDate;
	private int articleQty;
	private float articlePricePromo;
	private LocalDate articlePromoBegDate;
	private LocalDate articlePromoEndDate;
	private LocalDate articleDateAvailibility;
	private boolean articleDematerialized;
	private boolean articleDeactivated;
	private String articleBrand;
	@ManyToOne
	private User user;
	
	public Article() 
	{

	}


	public Article(String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, List<ArticlesImages> artListImg,
			int articleQty, float articlePricePromo, LocalDate articlePromoBegDate,
			LocalDate articlePromoEndDate, LocalDate articleDateAvailibility, boolean articleDematerialized, String articleBrand,User user) {
//		this.refArticle = articlePlateforme + LocalDate.now().toString() + articleCategory.getIdCategory().toString() + articleCategory.getCategoryLabel()
//		+ "01";
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImg = artListImg;
		this.articleAddedDate = LocalDate.now();
		this.articleQty = articleQty;
		this.articlePricePromo = articlePricePromo;
		this.articlePromoBegDate = articlePromoBegDate;
		this.articlePromoEndDate = articlePromoEndDate;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleBrand = articleBrand;
		this.user = user;
	}

	public Article(String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, List<ArticlesImages> artListImg,
			int articleQty, float articlePricePromo, LocalDate articlePromoBegDate,
			LocalDate articlePromoEndDate, LocalDate articleDateAvailibility, boolean articleDematerialized,
			boolean articleDeactivated, String articleBrand,User user) {
//		this.refArticle = articlePlateforme + LocalDate.now().toString() + articleCategory.getIdCategory().toString() + articleCategory.getCategoryLabel()
//		+ "01";
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.artListImg = artListImg;
		this.articleAddedDate = LocalDate.now();
		this.articleQty = articleQty;
		this.articlePricePromo = articlePricePromo;
		this.articlePromoBegDate = articlePromoBegDate;
		this.articlePromoEndDate = articlePromoEndDate;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleDeactivated = articleDeactivated;
		this.articleBrand = articleBrand;
		this.user = user;
	}
	
	public Article( String articleName, 
			String articlePlateforme,
			Category articleCategory,
			String articleDescription, 
			float articlePrice, int articleQty,
			LocalDate articleDateAvailibility,
			boolean articleDematerialized,
			boolean articleDeactivated, 
			String articleBrand,User user) {
		super();
//		this.refArticle = articlePlateforme + LocalDate.now().toString() + articleCategory.getIdCategory().toString() + articleCategory.getCategoryLabel()
//		+ "01";
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.articleAddedDate = LocalDate.now();
		this.articleQty = articleQty;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleDeactivated=articleDeactivated;
		this.articleBrand = articleBrand;
		this.user = user;
	}
	
	public Article(String articleName, String articlePlateforme, Category articleCategory,
			String articleDescription, float articlePrice, int articleQty,
			LocalDate articleDateAvailibility, boolean articleDematerialized, String articleBrand,User user) {
		super();
//		this.refArticle = articlePlateforme + LocalDate.now().toString() + articleCategory.getIdCategory().toString()
//				+ articleCategory.getCategoryLabel() + "01";
		this.articleName = articleName;
		this.articlePlateforme = articlePlateforme;
		this.articleCategory = articleCategory;
		this.articleDescription = articleDescription;
		this.articlePrice = articlePrice;
		this.articleAddedDate = LocalDate.now();
		this.articleQty = articleQty;
		this.articleDateAvailibility = articleDateAvailibility;
		this.articleDematerialized = articleDematerialized;
		this.articleBrand = articleBrand;
		this.user = user;
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
	public void setRefArticle() {
		this.refArticle = this.articlePlateforme + LocalDate.now().toString() + this.articleCategory.getIdCategory().toString() + this.articleCategory.getCategoryLabel()
		+ "01";
	}
	public String getArticleName() {
		return articleName;
	}
	public void setArticleName(String articleName) {
		this.articleName = articleName;
	}
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
	public LocalDate getArticlePromoEndDate() {
		return articlePromoEndDate;
	}
	public void setArticleDateTimePromoEndDate(LocalDate articlePromoEndDate) {
		this.articlePromoEndDate = articlePromoEndDate;
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

	public float getArticleQty() {
		return articleQty;
	}
	public void setArticleQty(int articleQty) {
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
	public String getArticleBrand() {
		return articleBrand;
	}
	public void setArticleBrand(String articleBrand) {
		this.articleBrand = articleBrand;
	}

	 

	
	
	
	
	

}

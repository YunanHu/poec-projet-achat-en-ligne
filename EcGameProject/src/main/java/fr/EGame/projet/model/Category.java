package fr.EGame.projet.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "categories")
public class Category 
{
	@Id@
	GeneratedValue
	private Long idCategory;
	private String categoryLabel;
	private String categoryDescription;
	@JsonIgnore
	@OneToMany(mappedBy="articleCategory")
	private List<Article> articles = new ArrayList<Article>();
	
	private static final long serialVersionUID = 1L;

	public boolean add(Article e) {
		return articles.add(e);
	}
	public boolean remove(Article o) {
		return articles.remove(o);
	}
	public List<Article> getArticles() {
		return articles;
	}
	public void setArticles(List<Article> articles) {
		this.articles = articles;
	} 
	public Category(String categoryLabel, String categoryDescription, List<Article> articles) {
		super();
		this.categoryLabel = categoryLabel;
		this.categoryDescription = categoryDescription;
		this.articles = articles;
	}
	public Long getIdCategory() {
		return idCategory;
	}
	public void setIdCategory(Long idCategory) {
		this.idCategory = idCategory;
	}
	public String getCategoryLabel() {
		return categoryLabel;
	}
	public void setCategoryLabel(String categoryLabel) {
		this.categoryLabel = categoryLabel;
	}
	public String getCategoryDescription() {
		return categoryDescription;
	}
	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}
	public Category(String categoryLabel, String categoryDescription) {

		this.categoryLabel = categoryLabel;
		this.categoryDescription = categoryDescription;
	}
	public Category() {

	}
	@Override
	public String toString() {
		return "Category [idCategory=" + idCategory + ", categoryLabel=" + categoryLabel + ", categoryDescription="
				+ categoryDescription + "]";
	}
	
	
	
	

}

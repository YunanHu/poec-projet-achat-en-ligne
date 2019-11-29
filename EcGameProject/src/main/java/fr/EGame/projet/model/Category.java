package fr.EGame.projet.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "categories")
public class Category implements Serializable
{
	@Id@
	GeneratedValue
	private int idCategory;
	private String categoryLabel;
	private String categoryDescription;
	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER,mappedBy="articles")
	private List<Article> articles = new ArrayList<Article>();
	
	private static final long serialVersionUID = 1L;
	
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
	public List<Article> getArticles() {
		return articles;
	}
	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}
	public int getIdCategory() {
		return idCategory;
	}
	public void setIdCategory(int idCategory) {
		this.idCategory = idCategory;
	}
	public boolean add(Article arg0) {
		return articles.add(arg0);
	}
	public boolean remove(Article arg0) {
		return articles.remove(arg0);
	}
	@Override
	public String toString() {
		return "Category [idCategory=" + idCategory + ", categoryLabel=" + categoryLabel + ", categoryDescription="
				+ categoryDescription + ", articles=" + articles + "]";
	}
	public Category(String categoryLabel, String categoryDescription, List<Article> articles) {
		this.categoryLabel = categoryLabel;
		this.categoryDescription = categoryDescription;
		this.articles = articles;
	}
	
	
	
	
	

}

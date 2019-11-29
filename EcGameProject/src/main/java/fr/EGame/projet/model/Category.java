package fr.EGame.projet.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name = "categories")
public class Category 
{
	@Id@
	GeneratedValue
	private Long idCategory;
	private String categoryLabel;
	private String categoryDescription;

	@ManyToMany(fetch = FetchType.EAGER,mappedBy="articleCategories")
	private List<Article> articles = new ArrayList<Article>();
	
	private static final long serialVersionUID = 1L;
	
	

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

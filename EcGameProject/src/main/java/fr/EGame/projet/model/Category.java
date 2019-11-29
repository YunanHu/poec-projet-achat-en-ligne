package fr.EGame.projet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Category 
{
	@Id@
	GeneratedValue
	private int idCategory;
	private String categoryLabel;
	private String categoryDescription;
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

package fr.EGame.projet.model;

import java.io.Serializable;

import javax.management.loading.PrivateClassLoader;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ArticleImages")
public class ArticlesImages implements Serializable {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String path;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	@Override
	public String toString() {
		return "ArticlesImages [id=" + id + ", name=" + name + ", path=" + path + "]";
	}
	public ArticlesImages(String name, String path) {

		this.name = name;
		this.path = path;
	}
	
	public ArticlesImages(String name) {
		this.name = name;
	}
	public ArticlesImages() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}

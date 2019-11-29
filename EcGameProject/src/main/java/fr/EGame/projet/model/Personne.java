package fr.EGame.projet.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "personnes")
public class Personne {
	@Id
	@GeneratedValue
	private long num;
	private String nom;
	private String prenom;
	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.REFRESH }, fetch = FetchType.EAGER)
	private List<Adresse> adresses = new ArrayList<Adresse>();
	
	
	public Personne() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Personne(String nom, String prenom) {
		super();
		this.nom = nom;
		this.prenom = prenom;
	}

	public boolean add(Adresse e) {
		return adresses.add(e);
	}

	public boolean remove(Object o) {
		return adresses.remove(o);
	}

	public long getNum() {
		return num;
	}
	public void setNum(long num) {
		this.num = num;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public List<Adresse> getAdresses() {
		return adresses;
	}
	public void setAdresses(List<Adresse> adresses) {
		this.adresses = adresses;
	}

}
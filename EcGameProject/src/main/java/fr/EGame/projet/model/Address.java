package fr.EGame.projet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name = "addresses")
public class Address {
	@Id
	@GeneratedValue
	private Long idAddress;
	private String street;
	private String zip;
	private String city;
}

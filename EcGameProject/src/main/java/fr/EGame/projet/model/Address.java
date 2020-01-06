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

	// creer les tables billingAddress et shippingAddress
	private String billing_firstname;
	private String billing_lastname;
	private String billing_company;
	private String billing_country;
	private String billing_street;
	private String billing_city;
	private String billing_zipcode;
	
	private String shipping_firstname;
	private String shipping_lastname;
	private String shipping_company;
	private String shipping_country;
	private String shipping_street;
	private String shipping_city;
	private String shipping_zipcode;
}

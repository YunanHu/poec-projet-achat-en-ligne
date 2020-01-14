package fr.EGame.projet.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "addresses")
public class Address {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idAddress;

	// creer les tables billingAddress et shippingAddress
	private String billing_name;
	private String billing_address;
	private String billing_streetno;
	private String billing_state;
	private String billing_zipcode;
	private String billing_country;

	private String shipping_name;
	private String shipping_address;
	private String shipping_streetno;
	private String shipping_state;
	private String shipping_zipcode;
	private String shipping_country;
}

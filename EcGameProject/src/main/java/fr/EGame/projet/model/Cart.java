package fr.EGame.projet.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
	@Id@
	GeneratedValue
	Long idCart;
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	List<CartItem> cartItems = new ArrayList<CartItem>();
	// add user
	float total;
	/*
	// creer les tables billingAddress et shippingAddress
	private String billing_firstname;
	private String billing_lastname;
	private String billing_company;
	private String billing_country;
	private String billing_street;
	private String billing_city;
	private String billing_zip;
	private String billing_phone;
	private String billing_email;
	*/
	
	public boolean addCartItem(CartItem item) {
		return cartItems.add(item);
	}
	public boolean removeCartItem(CartItem item) {
		return cartItems.remove(item);
	}
	
	
}

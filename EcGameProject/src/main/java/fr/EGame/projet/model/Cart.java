package fr.EGame.projet.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
	@Id
	@GeneratedValue
	Long idCart;
	@NonNull
	@ManyToOne
	User cartUser;
	
	@OneToMany(cascade={CascadeType.PERSIST, CascadeType.REMOVE})
	List<CartItem> cartItems = new ArrayList<CartItem>();

	String billing_phone;
	String billing_email;
	float total;

	public boolean addCartItem(CartItem item) {
		return cartItems.add(item);
	}
	public boolean removeCartItem(CartItem item) {
		return cartItems.remove(item);
	}
	
	
}

package fr.EGame.projet.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cartitem")
public class CartItem {

	@Id@
	GeneratedValue
	private Long idCartItem;
	 // one to one article
	@NonNull
	private String ProductName;
	private String ProductImage;
	private int Qty;
	private float Rate;
	
}

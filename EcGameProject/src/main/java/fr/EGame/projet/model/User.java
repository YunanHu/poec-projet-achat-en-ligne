package fr.EGame.projet.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Table(name = "users")
public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long UID;
	
	@Column(unique = true)
	@NonNull
	String email;
	@NonNull
	String password;

	String lastname;

	String firstname;
	String phoneno;
	Date createDate;
	String emailConfirmToken;
	Date emailConfirmTokenDate;
	Boolean emailConfirmed;

	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.REFRESH }, fetch = FetchType.LAZY)
	List<Address> addresses = new ArrayList<Address>();

	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.REMOVE }, fetch = FetchType.EAGER)
	List<Role> roles = new ArrayList<Role>();

	public boolean addRole(Role role) {
		return roles.add(role);
	}

	public boolean removeRole(Role role) {
		return roles.remove(role);
	}

	public boolean addAddress(Address adr) {
		return addresses.add(adr);
	}

	public boolean removeAddress(Address adr) {
		return addresses.remove(adr);
	}

}

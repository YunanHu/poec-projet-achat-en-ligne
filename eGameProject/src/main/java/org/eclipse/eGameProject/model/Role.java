package org.eclipse.eGameProject.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Role")
public class Role implements Serializable {

	@Id
	@GeneratedValue
	private Long id;
	@Column(unique = true)
	private String Rolename;
	private String password;
	@Column(unique = true)
	private String email;
	@Column(unique = true)
	private String phone;
	private String address;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "Role_role", joinColumns = @JoinColumn(name = "Role_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Collection<Role> roles = new ArrayList<>();
	@ManyToOne
	@JoinColumn(name = "client_id")
	private Role client;
	@ManyToOne
	@JoinColumn(name = "seller_id")
	private Role seller;
	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Role admin;
}

/*
JDBC code for database

List<Role> RolesList = new ArrayList<Role>();
while (resultSet.next()) {
            Role Role  = new Role();
            Role.setId(resultSet.getInt("id"));
            Role.setName(resultSet.getString("name"));
            Role.setEmail(resultSet.getString("email"));
            Role.setMobile(resultSet.getString("mobile"));
            Role.setPassword(resultSet.getString("password"));
            Role.setRole(resultSet.getString("role"));
            Role.setStatus(resultSet.getString("status"));
            Role.setLast_udpate(resultSet.getString("last_update"));

            // print the results
            System.out.println(Role);
            RolesList.add(Role);
        }

*/
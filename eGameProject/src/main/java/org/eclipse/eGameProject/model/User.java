package org.eclipse.eGameProject.model;

import java.util.Date;

public class User {
	private long UID;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private Date createDate;
	private String emailConfirmeToken;
	private Date emailConfirmeTokenDate;
	private boolean emailConfirmed;
	
	public long getUID() {
		return UID;
	}
	public void setUID(long uID) {
		UID = uID;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public String getEmailConfirmeToken() {
		return emailConfirmeToken;
	}
	public void setEmailConfirmeToken(String emailConfirmeToken) {
		this.emailConfirmeToken = emailConfirmeToken;
	}
	public Date getEmailConfirmeTokenDate() {
		return emailConfirmeTokenDate;
	}
	public void setEmailConfirmeTokenDate(Date emailConfirmeTokenDate) {
		this.emailConfirmeTokenDate = emailConfirmeTokenDate;
	}
	public boolean isEmailConfirmed() {
		return emailConfirmed;
	}
	public void setEmailConfirmed(boolean emailConfirmed) {
		this.emailConfirmed = emailConfirmed;
	}
	
	@Override
	public String toString() {
		return firstName + " " + lastName.toUpperCase();
	}
	
	
}

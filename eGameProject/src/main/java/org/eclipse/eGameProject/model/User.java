package org.eclipse.eGameProject.model;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class User {
	private long UID;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private Date createDate;
	private String emailConfirmToken;
	private Date emailConfirmTokenDate;
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
	public String getemailConfirmToken() {
		return emailConfirmToken;
	}
	public void setemailConfirmToken(String emailConfirmToken) {
		this.emailConfirmToken = emailConfirmToken;
	}
	public Date getemailConfirmTokenDate() {
		return emailConfirmTokenDate;
	}
	public void setemailConfirmTokenDate(Date emailConfirmTokenDate) {
		this.emailConfirmTokenDate = emailConfirmTokenDate;
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
	
	public void sendEmail(String email) {
		  final String username = "oplike304@gmail.com";
	        final String password = "oplike91";

	        Properties prop = new Properties();
			prop.put("mail.smtp.host", "smtp.gmail.com");
	        prop.put("mail.smtp.port", "587");
	        prop.put("mail.smtp.auth", "true");
	        prop.put("mail.smtp.starttls.enable", "true"); //TLS
	        
	        Session session = Session.getInstance(prop,
	                new javax.mail.Authenticator() {
	                    protected PasswordAuthentication getPasswordAuthentication() {
	                        return new PasswordAuthentication(username, password);
	                    }
	                });

	        try {

	            Message message = new MimeMessage(session);
	            message.setFrom(new InternetAddress("oplike304@gmail.com"));
	            message.setRecipients(
	                    Message.RecipientType.TO,
	                    InternetAddress.parse(email)
	            );
	            message.setSubject("(Projet) Confirmation de votre compte");
	            message.setText("Cher Utilisateur,"+ "\n\n Cliquez sur ce lien pour activer votre compte : \n http://localhost:8080/testAuthProjet/activation");

	            Transport.send(message);

	            System.out.println("Done");

	        } catch (MessagingException e) {
	            e.printStackTrace();
	        }
			
	}
	
}

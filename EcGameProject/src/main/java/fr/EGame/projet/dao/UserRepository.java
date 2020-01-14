package fr.EGame.projet.dao;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import fr.EGame.projet.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Modifying
    @Query(value = "insert into users_roles values (:uid,:role)", nativeQuery = true)
	@Transactional
	public void setRole(@Param("uid") Long usid, @Param("role") Long role); 	
	
	@Query("select u from User u where u.email = :email")
    public User findByEmail(@Param("email") String email);
    
	User findByUID(Long uid);
	//User findByEmail(String email);
	
	
	
	public static void sendEmail(String email) {
		  final String username = "donotreplyjp@gmail.com";
	        final String password = "java12345";

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
	            message.setFrom(new InternetAddress("donotreplyjp@gmail.com"));
	            message.setRecipients(
	                    Message.RecipientType.TO,
	                    InternetAddress.parse(email)
	            );
	            message.setSubject("(Projet) Confirmation de votre compte");
	            message.setText("Cher Utilisateur,"+ "\n\n Cliquez sur ce lien pour activer votre compte : \n http://   lien a créer + systeme token...");

	            Transport.send(message);

	            System.out.println("Done");

	        } catch (MessagingException e) {
	            e.printStackTrace();
	        }
			
	}

    
     
    

}

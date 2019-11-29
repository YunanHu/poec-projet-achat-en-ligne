package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	
		
	//@Query("select u from User u where u.email = ?1")
	
	//List<User> findByEmail(String email);
    public User findByEmail(String email);

}

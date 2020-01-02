package fr.EGame.projet.dao;

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
	

    
     
    

}

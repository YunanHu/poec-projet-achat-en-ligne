package fr.EGame.projet.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.EGame.projet.model.Cart;
import fr.EGame.projet.model.User;

public interface CartRepository extends JpaRepository<Cart, Long>{

	@Query("select c from Cart c where c.cartUser = :cartUser")
	List<Cart> findByCartUser(@Param("cartUser") User cartUser);
}

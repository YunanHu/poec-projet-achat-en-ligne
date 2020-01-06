package fr.EGame.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long>{

}

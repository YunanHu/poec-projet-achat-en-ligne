package fr.EGame.projet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.CartItemRepository;
import fr.EGame.projet.dao.CartRepository;
import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.Cart;
import fr.EGame.projet.model.CartItem;
import fr.EGame.projet.model.User;

@RestController
public class CartRestController {

	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/getAllCarts")
	public List<Cart> getAllCarts(){
		return cartRepository.findAll();
	}
	
	@GetMapping("/getCart/{uid}")
	public List<Cart> getCartByUser(@PathVariable("uid") Long uid) {
		User user = userRepository.findByUID(uid);
		return cartRepository.findByCartUser(user);
	}
	
	@PostMapping("/saveCart")
	public Cart addCart(@RequestBody Cart cart) {
		System.out.println(cart);
		
		List<CartItem> cartItems = cart.getCartItems();
		for(CartItem cartItem: cartItems) {
			CartItem cItem = null;
			if (cartItem.getIdCartItem() != null) {
				cItem = cartItemRepository.findById(cartItem.getIdCartItem()).orElse(null);
				cartItems.set(cartItems.indexOf(cartItem), cItem);
			} else {
				cItem = cartItemRepository.save(cartItem);
			}
		}
		return cartRepository.saveAndFlush(cart);
	}
}

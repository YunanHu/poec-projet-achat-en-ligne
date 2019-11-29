package fr.EGame.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	public User findByEmail(String email);
}

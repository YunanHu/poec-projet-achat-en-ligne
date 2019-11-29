package fr.EGame.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.Adresse;

public interface AdresseRepository extends JpaRepository<Adresse, Long> {
}

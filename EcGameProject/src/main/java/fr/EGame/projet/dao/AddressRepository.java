package fr.EGame.projet.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.EGame.projet.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {
}

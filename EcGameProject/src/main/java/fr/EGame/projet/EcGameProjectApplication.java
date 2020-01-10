package fr.EGame.projet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import fr.EGame.projet.controller.UserRestController;

@SpringBootApplication
public class EcGameProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcGameProjectApplication.class, args);
	}

}

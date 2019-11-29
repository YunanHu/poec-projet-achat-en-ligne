package fr.EGame.projet.model;

import java.util.Random;

public class Payment {

	private boolean confPaiment;

	public boolean paymentConf(long idOrder) {
		Random r = new Random();
		float chance = r.nextFloat();

		if (chance <= 0.80f)
			return true;
		else
			return false;
	}

	public boolean isConfPaiment() {
		return confPaiment;
	}
}

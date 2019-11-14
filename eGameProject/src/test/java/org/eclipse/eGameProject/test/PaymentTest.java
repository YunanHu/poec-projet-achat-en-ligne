package org.eclipse.eGameProject.test;

import org.eclipse.eGameProject.model.Payment;

public class PaymentTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Payment test = new Payment();

		for (int i = 0; i < 20; i++) {
			System.out.println(test.paymentConf(1234));
		}
	}

}

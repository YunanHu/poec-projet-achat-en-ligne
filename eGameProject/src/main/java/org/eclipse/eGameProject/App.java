package org.eclipse.eGameProject;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        Configuration configuration = new Configuration().configure(); 
        SessionFactory sessionFactory = configuration. buildSessionFactory();
        Session session = sessionFactory.openSession();
    }
}

package fr.EGame.projet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	/*/Cette classe désactive la sécurité Spring pour travailler sans devoir s'authentifier.
	@Override
	protected void configure(HttpSecurity security) throws Exception {
		security.httpBasic().disable();
	}*/

	@Autowired
	private UserDetailsService userDetailsService;

	@Bean
	public static NoOpPasswordEncoder passwordEncoder() {
		return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
	}

	@Autowired
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//RAJOUTER LES PAGES QUI NE NECESSITENT PAS D'AUTHENTIFICATION DANS antMatchers(".. , .. , ..")
		http.authorizeRequests().antMatchers("/users", "/initusers", "/initArticles", "/getAllArticles").permitAll().anyRequest().fullyAuthenticated();
		//http.cors().and().authorizeRequests().anyRequest().fullyAuthenticated();
		http.httpBasic();
		http.csrf().disable();
	}
}
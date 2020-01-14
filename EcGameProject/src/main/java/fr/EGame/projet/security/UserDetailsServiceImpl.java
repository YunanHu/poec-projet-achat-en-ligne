package fr.EGame.projet.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetailsImpl loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(email);
		if (null == user) {
			throw new UsernameNotFoundException("No user named " + email);
		} else {
			return new UserDetailsImpl(user);
		}
	}
}
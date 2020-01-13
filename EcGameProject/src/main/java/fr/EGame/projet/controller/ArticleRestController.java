package fr.EGame.projet.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.ArticleRepository;
import fr.EGame.projet.dao.CategoryRepository;
import fr.EGame.projet.dao.UserRepository;
import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.ArticlesImages;
import fr.EGame.projet.model.Category;
import fr.EGame.projet.model.User;

@RestController
public class ArticleRestController {

	@Autowired
	private ArticleRepository articleRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/addArticle")
	public boolean addArticle(@RequestBody Article newArticle) {

		
		if(newArticle!=null)
		{
			articleRepository.saveAndFlush(newArticle);
			return true;
		}
		else
		{
			return false;
		}
	}


	@GetMapping("/initArticles")
	public void initArticlesCategories() {

		List<Category> listeCategory = categoryRepository.findAll();
		List<User> listUser = userRepository.findAll();
		
		Category c1 = new Category("FPS", "jeu de tir a la 1ere personne");
		Category c2 = new Category("AVENTURE", "jeu d\\'aventure");
		Category c3 = new Category("RPG", "jeu de role");
		Category c4 = new Category("PLATEFORME", "jeu de plateforme");
		Category c5 = new Category("SIMULATION", "jeu de simulation");
		Category c6 = new Category("SPORT", "jeu de sport");

		if (listeCategory.size() == 0) {
			categoryRepository.save(c1);
			categoryRepository.save(c2);
			categoryRepository.save(c3);
			categoryRepository.save(c4);
			categoryRepository.save(c5);
			categoryRepository.save(c6);
			System.out.println("Well done categories");
		}
		
		Category cFps = c1;
		Category cAv = c2;
		Category cRpg = c3;
		Category cPlat = c4;
		Category cSim = c5;
		Category cSpo = c6;
		List<Article> listArticles = articleRepository.findAll();
		if (listArticles.size() == 0) {
			Article a1 = new Article(
					"Forza Horizon", "PC", cFps, "jeu blabla 1", 44, 40, LocalDate.of(2019, 12, 24),
					false,true, "Sony",listUser.get(0));
			Article a2 = new Article(
					"Mario Odyssey", "SWITCH", cAv, "jeu blabla 2", 44, 40,
					LocalDate.of(2020, 01, 12), true,true,"Nintendo",listUser.get(1));
			Article a3 = new Article(
					"Call of Duty Modern Warfare", "PS4", cRpg, "jeu blabla 3", 44, 40, LocalDate.of(2019, 12, 24),
					false,false,"Activision",listUser.get(0));
			Article a4 = new Article(
					"Call of Duty Modern Warfare", "PC", cPlat, "jeu blabla 4", 44, 40, LocalDate.of(2019, 12, 24),
					false,true,"Activision",listUser.get(0));
			Article a5 = new Article(
					"Control", "PC", cSim, "jeu blabla 5", 44, 40, LocalDate.of(2019, 12, 9), false,true,"505 Games",listUser.get(2));
			Article a6 = new Article(
					"Halo 2", "XBOX", cSpo, "jjeu blabla 6", 44, 40, LocalDate.of(2019, 12, 24),
					false,true,"Microsoft",listUser.get(0));
			Article a7 = new Article(
					"Overwatch", "PC", cFps, "jeu blabla 7", 44, 40, LocalDate.of(2019, 12, 06), true,false,"Blizzard",listUser.get(2));
			Article a8 = new Article(
					"Control", "PS4", cAv, "jeu blabla 8", 44, 40, LocalDate.of(2019, 12, 24), true,false,"505 Games",listUser.get(1));
			Article a9 = new Article(
					"Doom Eternal", "PC", cAv, "jeu blabla 9", 44, 40, LocalDate.of(2020, 02, 12), false,false,"Bethesda",listUser.get(1));
			Article a10 = new Article(
					"Control", "XBOX", cAv, "jeu blabla 10", 44, 40, LocalDate.of(2019, 12, 24), true,false,"505 Games",listUser.get(0));
			Article a11 = new Article(
					"Rayman Legends", "SWITCH", cFps, "jeu blabla 11", 44, 40,
					LocalDate.of(2020, 01, 12), false,false,"Ubisoft",listUser.get(0));
			Article a12 = new Article(
					"Zelda Breath of the wild", "SWITCH", cRpg, "jeu blabla 12", 44, 40, LocalDate.of(2019, 12, 24),
					false,true,"Nintendo",listUser.get(0));
			Article a13 = new Article(
					"Halo 1", "XBOX", cSim, "jeu blabla 13", 44, 40, LocalDate.of(2020, 01, 12), true,false,"Microsoft",listUser.get(2));
			Article a14 = new Article(
					"Metal Gear Solid 4", "PS4", cSpo, "jeu blabla 14", 44, 40,
					LocalDate.of(2019, 12, 24), false,false,"Konami",listUser.get(0));
			Article a15 = new Article(
					"Portal 2", "PC", cFps, "jeu blabla 15", 44, 40, LocalDate.of(2019, 12, 31), true,true,"Valve",listUser.get(1));
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
			a1.add(new ArticlesImages("forzaHorizon1.jpg"," "));
			a1.add(new ArticlesImages("forzaHorizon2.jpg"," "));
			a1.add(new ArticlesImages("forzaHorizon3.jpg"," "));
			//a1.add(new ArticlesImages("ForzaHorizon4"," "));
			

			
			//List<ArticlesImages> listImagesMario = new ArrayList<ArticlesImages>();
			a2.add(new ArticlesImages("marioOdyssey1.jpg"," "));
			a2.add(new ArticlesImages("marioOdyssey2.jpg"," "));
			a2.add(new ArticlesImages("marioOdyssey3.jpg"," "));
			a2.add(new ArticlesImages("marioOdyssey.jpg"," "));

			//List<ArticlesImages> listImagesCOD = new ArrayList<ArticlesImages>();
			a3.add(new ArticlesImages("CODMW1.jpg"," "));
			a3.add(new ArticlesImages("CODMW2.jpg"," "));
			a3.add(new ArticlesImages("CODMW3.jpg"," "));
			a3.add(new ArticlesImages("CODMW4.jpg"," "));
			
			a4.add(new ArticlesImages("CODMW1.jpg"," "));
			a4.add(new ArticlesImages("CODMW2.jpg"," "));
			a4.add(new ArticlesImages("CODMW3.jpg"," "));
			a4.add(new ArticlesImages("CODMW4.jpg"," "));
			
			//List<ArticlesImages> listImagesControl = new ArrayList<ArticlesImages>();
			a5.add(new ArticlesImages("Control1.jpg"," "));
			a5.add(new ArticlesImages("Control2.jpg"," "));
			a5.add(new ArticlesImages("Control3.jpg"," "));
			a5.add(new ArticlesImages("Control4.jpg"," "));
			
			a8.add(new ArticlesImages("Control1.jpg"," "));
			a8.add(new ArticlesImages("Control2.jpg"," "));
			a8.add(new ArticlesImages("Control3.jpg"," "));
			a8.add(new ArticlesImages("Control4.jpg"," "));
			
			a10.add(new ArticlesImages("Control1.jpg"," "));
			a10.add(new ArticlesImages("Control2.jpg"," "));
			a10.add(new ArticlesImages("Control3.jpg"," "));
			a10.add(new ArticlesImages("Control4.jpg"," "));
			
			//List<ArticlesImages> listImagesOver = new ArrayList<ArticlesImages>();
			a7.add(new ArticlesImages("Overwatch1.jpg"," "));
			a7.add(new ArticlesImages("Overwatch2.jpg"," "));
			a7.add(new ArticlesImages("Overwatch3.jpg"," "));
			a7.add(new ArticlesImages("Overwatch4.jpg"," "));
			
			//List<ArticlesImages> listImagesH2 = new ArrayList<ArticlesImages>();
			a6.add(new ArticlesImages("Halo2-1.jpg"," "));
			a6.add(new ArticlesImages("Halo2-2.jpg"," "));
			a6.add(new ArticlesImages("Halo2-3.jpg"," "));
			a6.add(new ArticlesImages("Halo2-4.jpg"," "));
			
			//List<ArticlesImages> listImagesDE = new ArrayList<ArticlesImages>();
			a9.add(new ArticlesImages("Doom1.jpg"," "));
			a9.add(new ArticlesImages("Doom2.jpg"," "));
			a9.add(new ArticlesImages("Doom3.jpg"," "));
			a9.add(new ArticlesImages("Doom4.jpg"," "));
			
			//List<ArticlesImages> listImagesRL = new ArrayList<ArticlesImages>();
			a11.add(new ArticlesImages("Rayman1.jpg"," "));
			a11.add(new ArticlesImages("Rayman2.jpg"," "));
			a11.add(new ArticlesImages("Rayman3.jpg"," "));
			a11.add(new ArticlesImages("Rayman4.jpg"," "));
			
			List<ArticlesImages> listImagesBOTW = new ArrayList<ArticlesImages>();
			a12.add(new ArticlesImages("zelda1.jpg"," "));
			a12.add(new ArticlesImages("zelda2.jpg"," "));
			a12.add(new ArticlesImages("zelda3.jpg"," "));
			a12.add(new ArticlesImages("zelda4.jpg"," "));
			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
//			listImagesForza.add(new ArticlesImages("Halo 1", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
			
			//List<ArticlesImages> listImagesH1 = new ArrayList<ArticlesImages>();
			a13.add(new ArticlesImages("Halo1-1.jpg"," "));
			a13.add(new ArticlesImages("Halo1-2.jpg"," "));
			a13.add(new ArticlesImages("Halo1-3.jpg"," "));
			a13.add(new ArticlesImages("Halo1-4.jpg"," "));
			
			//List<ArticlesImages> listImagesP2 = new ArrayList<ArticlesImages>();
			a15.add(new ArticlesImages("Portal2-1.jpg"," "));
			a15.add(new ArticlesImages("Portal2-2.jpg"," "));
			a15.add(new ArticlesImages("Portal2-3.jpg"," "));
			a15.add(new ArticlesImages("Portal2-4.jpg"," "));
			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
			a14.add(new ArticlesImages("MGS4-1.jpg"," "));
			a14.add(new ArticlesImages("MGS4-2.jpg"," "));
			a14.add(new ArticlesImages("MGS4-3.jpg"," "));
			a14.add(new ArticlesImages("MGS4-4.jpg"," "));
//			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4"," "));
//			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4-1"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4-2"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4-3"," "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4-4"," "));
			articleRepository.save(a1);
			articleRepository.save(a2);
			articleRepository.save(a3);
			articleRepository.save(a4);
			articleRepository.save(a5);
			articleRepository.save(a6);
			articleRepository.save(a7);
			articleRepository.save(a8);
			articleRepository.save(a9);
			articleRepository.save(a10);
			articleRepository.save(a11);
			articleRepository.save(a12);
			articleRepository.save(a13);
			articleRepository.save(a14);
			articleRepository.save(a15);
			System.out.println("Well done articles");
		}

	}
	@Secured("ROLE_CLIENT")
	@GetMapping("/getArticlesDematerialized/{isDematerialized}")
	public List<Article> getArticlesDematerialized(@PathVariable("isDematerialized") boolean isDematerialized) {

		return articleRepository.findByArticleDematerialized(isDematerialized);
	}

	@PostMapping("/updateArticle/{Id}")
	public void updateArticle(@PathVariable Long Id, @RequestBody Article article) {

		Article a = (Article) articleRepository.findById(Id).orElse(null);

		if (a != null) {
				a = article;
				System.out.println(a);
				articleRepository.flush();
		}
		
	}
	
	@GetMapping("/getAllArticles")
	public List<Article> getAllArticles(){
		return articleRepository.findAll();
	}
	@Secured("ROLE_CLIENT")
	@GetMapping("/getArticle/{Id}")
	public Article getArticleById(@PathVariable("Id") Long id) {
		return articleRepository.findById(id).orElse(null);
	}
	

	@GetMapping("/getArticleByUser/{Id}")
	public List<Article> getArticleByUser(@PathVariable("Id") Long id) {
		
		User user  = userRepository.findByUID(id);
		return articleRepository.findByUser(user);
	}
	
	@GetMapping("/getArticleDeactivated/{isDeactivated}")
	public List<Article> getArticleDeactivated(@PathVariable("isDeactivated") boolean isDeactivated){
		return articleRepository.findByArticleDeactivated(isDeactivated);
	}
	
	
	
	
	 
//	@PostMapping("setArticlePromoPrice/{id}")
//	public Article setArticlePromoPrice(@PathVariable("id") Long id, @Param("promoPriceHt") float promoPriceHt, @Param("beginDate") LocalDate beginDate, @Param("endDate") LocalDate endDate) {
//		
//		Article articlePromo = articleRepository.findById(id).orElse(null);
//		articlePromo.setarticlePricePromo(promoPriceHt);
//		articlePromo.setArticlePromoBegDate(beginDate);
//		articlePromo.setArticleDateTimePromoEndDate(endDate);
//		articleRepository.flush();
//		return articlePromo;
//	}
}

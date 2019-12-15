package fr.EGame.projet.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.EGame.projet.dao.ArticleRepository;
import fr.EGame.projet.dao.CategoryRepository;
import fr.EGame.projet.model.Article;
import fr.EGame.projet.model.ArticlesImages;
import fr.EGame.projet.model.Category;
import net.bytebuddy.dynamic.Nexus;

@RestController
public class ArticleRestController {

	@Autowired
	private ArticleRepository articleRepository;
	@Autowired
	private CategoryRepository categoryRepository;

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
		System.out.println(listeCategory.size());

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
		System.out.println(listArticles.size());
		if (listArticles.size() == 0) {

			Article a1 = new Article(
					"PC-" + LocalDate.now().toString() + cFps.getIdCategory().toString() + cFps.getCategoryLabel()
							+ "01",
					"Forza Horizon", "PC", cFps, "jeu blabla 1", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24),
					false,true);
			Article a2 = new Article(
					"SWI-" + LocalDate.now().toString() + cAv.getIdCategory().toString() + cAv.getCategoryLabel()
							+ "02",
					"Mario Odyssey", "SWITCH", cAv, "jeu blabla 2", 44, LocalDate.now(), 40,
					LocalDate.of(2020, 01, 12), true,true);
			Article a3 = new Article(
					"PS4-" + LocalDate.now().toString() + cRpg.getIdCategory().toString() + cRpg.getCategoryLabel()
							+ "03",
					"Call of Duty Modern Warfare", "PS4", cRpg, "jeu blabla 3", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24),
					false,false);
			Article a4 = new Article(
					"PC-" + LocalDate.now().toString() + cPlat.getIdCategory().toString() + cPlat.getCategoryLabel()
							+ "04",
					"Call of Duty Modern Warfare", "PC", cPlat, "jeu blabla 4", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24),
					false,true);
			Article a5 = new Article(
					"PC-" + LocalDate.now().toString() + cSim.getIdCategory().toString() + cSim.getCategoryLabel()
							+ "05",
					"Control", "PC", cSim, "jeu blabla 5", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 9), false,true);
			Article a6 = new Article(
					"XBO-" + LocalDate.now().toString() + cSpo.getIdCategory().toString() + cSpo.getCategoryLabel()
							+ "06",
					"Halo 2", "XBOX", cSpo, "jjeu blabla 6", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24),
					false,true);
			Article a7 = new Article(
					"PC" + LocalDate.now().toString() + cFps.getIdCategory().toString() + cFps.getCategoryLabel()
							+ "07",
					"Overwatch", "PC", cFps, "jeu blabla 7", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 06), true,false);
			Article a8 = new Article(
					"PS4-" + LocalDate.now().toString() + cAv.getIdCategory().toString() + cAv.getCategoryLabel()
							+ "08",
					"Control", "PS4", cAv, "jeu blabla 8", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24), true,false);
			Article a9 = new Article(
					"PC" + LocalDate.now().toString() + cAv.getIdCategory().toString() + cAv.getCategoryLabel() + "09",
					"Doom Eternal", "PC", cAv, "jeu blabla 9", 44, LocalDate.now(), 40, LocalDate.of(2020, 02, 12), false,false);
			Article a10 = new Article(
					"XBO-" + LocalDate.now().toString() + cAv.getIdCategory().toString() + cAv.getCategoryLabel()
							+ "010",
					"Control", "XBOX", cAv, "jeu blabla 10", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24), true,false);
			Article a11 = new Article(
					"SWI-" + LocalDate.now().toString() + cFps.getIdCategory().toString() + cFps.getCategoryLabel()
							+ "011",
					"Rayman Legends", "SWITCH", cFps, "jeu blabla 11", 44, LocalDate.now(), 40,
					LocalDate.of(2020, 01, 12), false,false);
			Article a12 = new Article(
					"SWI-" + LocalDate.now().toString() + cRpg.getIdCategory().toString() + cRpg.getCategoryLabel()
							+ "012",
					"Zelda Breath of the wild", "SWITCH", cRpg, "jeu blabla 12", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 24),
					false,true);
			Article a13 = new Article(
					"XBO-" + LocalDate.now().toString() + cSim.getIdCategory().toString() + cSim.getCategoryLabel()
							+ "013",
					"Halo 1", "XBOX", cSim, "jeu blabla 13", 44, LocalDate.now(), 40, LocalDate.of(2020, 01, 12), true,false);
			Article a14 = new Article(
					"PS4-" + LocalDate.now().toString() + cSpo.getIdCategory().toString() + cSpo.getCategoryLabel()
							+ "014",
					"Metal Gear Solid 4", "PS4", cSpo, "jeu blabla 14", 44, LocalDate.now(), 40,
					LocalDate.of(2019, 12, 24), false,false);
			Article a15 = new Article(
					"PC" + LocalDate.now().toString() + cFps.getIdCategory().toString() + cFps.getCategoryLabel()
							+ "015",
					"Portal 2", "PC", cFps, "jeu blabla 15", 44, LocalDate.now(), 40, LocalDate.of(2019, 12, 31), true,true);
			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
			a1.add(new ArticlesImages("Forza Horizon 4-1"," "));
			a1.add(new ArticlesImages("Forza Horizon 4-2"," "));
			a1.add(new ArticlesImages("Forza Horizon 4-3"," "));
			a1.add(new ArticlesImages("Forza Horizon 4-4"," "));
			

			
			//List<ArticlesImages> listImagesMario = new ArrayList<ArticlesImages>();
			a2.add(new ArticlesImages("Mario Odyssey-1"," "));
			a2.add(new ArticlesImages("Mario Odyssey-2"," "));
			a2.add(new ArticlesImages("Mario Odyssey-3"," "));
			a2.add(new ArticlesImages("Mario Odyssey-4"," "));

			//List<ArticlesImages> listImagesCOD = new ArrayList<ArticlesImages>();
			a3.add(new ArticlesImages("Call of Duty Modern Warfare-1"," "));
			a3.add(new ArticlesImages("Call of Duty Modern Warfare-2"," "));
			a3.add(new ArticlesImages("Call of Duty Modern Warfare-3"," "));
			a3.add(new ArticlesImages("Call of Duty Modern Warfare-4"," "));
			
			a4.add(new ArticlesImages("Call of Duty Modern Warfare-1"," "));
			a4.add(new ArticlesImages("Call of Duty Modern Warfare-2"," "));
			a4.add(new ArticlesImages("Call of Duty Modern Warfare-3"," "));
			a4.add(new ArticlesImages("Call of Duty Modern Warfare-4"," "));
			
			//List<ArticlesImages> listImagesControl = new ArrayList<ArticlesImages>();
			a5.add(new ArticlesImages("Control-1"," "));
			a5.add(new ArticlesImages("Control-2"," "));
			a5.add(new ArticlesImages("Control-3"," "));
			a5.add(new ArticlesImages("Control-4"," "));
			
			a8.add(new ArticlesImages("Control-1"," "));
			a8.add(new ArticlesImages("Control-2"," "));
			a8.add(new ArticlesImages("Control-3"," "));
			a8.add(new ArticlesImages("Control-4"," "));
			
			a10.add(new ArticlesImages("Control-1"," "));
			a10.add(new ArticlesImages("Control-2"," "));
			a10.add(new ArticlesImages("Control-3"," "));
			a10.add(new ArticlesImages("Control-4"," "));
			
			//List<ArticlesImages> listImagesOver = new ArrayList<ArticlesImages>();
			a7.add(new ArticlesImages("Overwatch-1"," "));
			a7.add(new ArticlesImages("Overwatch-2"," "));
			a7.add(new ArticlesImages("Overwatch-3"," "));
			a7.add(new ArticlesImages("Overwatch-4"," "));
			
			//List<ArticlesImages> listImagesH2 = new ArrayList<ArticlesImages>();
			a6.add(new ArticlesImages("Halo 2-1"," "));
			a6.add(new ArticlesImages("Halo 2-2"," "));
			a6.add(new ArticlesImages("Halo 2-3"," "));
			a6.add(new ArticlesImages("Halo 2-4"," "));
			
			//List<ArticlesImages> listImagesDE = new ArrayList<ArticlesImages>();
			a9.add(new ArticlesImages("Doom Eternal-1"," "));
			a9.add(new ArticlesImages("Doom Eternal-2"," "));
			a9.add(new ArticlesImages("Doom Eternal-3"," "));
			a9.add(new ArticlesImages("Doom Eternal-4"," "));
			
			//List<ArticlesImages> listImagesRL = new ArrayList<ArticlesImages>();
			a11.add(new ArticlesImages("Rayman Legends-1"," "));
			a11.add(new ArticlesImages("Rayman Legends-2"," "));
			a11.add(new ArticlesImages("Rayman Legends-3"," "));
			a11.add(new ArticlesImages("Rayman Legends-4"," "));
			
			List<ArticlesImages> listImagesBOTW = new ArrayList<ArticlesImages>();
			a12.add(new ArticlesImages("Zelda Breath of the wild-1"," "));
			a12.add(new ArticlesImages("Zelda Breath of the wild-2"," "));
			a12.add(new ArticlesImages("Zelda Breath of the wild-3"," "));
			a12.add(new ArticlesImages("Zelda Breath of the wild-4"," "));
			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
//			listImagesForza.add(new ArticlesImages("Halo 1", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
//			listImagesForza.add(new ArticlesImages("Forza Horizon 4", " "));
			
			//List<ArticlesImages> listImagesH1 = new ArrayList<ArticlesImages>();
			a13.add(new ArticlesImages("Halo 1-1"," "));
			a13.add(new ArticlesImages("Halo 1-2"," "));
			a13.add(new ArticlesImages("Halo 1-3"," "));
			a13.add(new ArticlesImages("Halo 1-4"," "));
			
			//List<ArticlesImages> listImagesP2 = new ArrayList<ArticlesImages>();
			a15.add(new ArticlesImages("Portal 2-1"," "));
			a15.add(new ArticlesImages("Portal 2-2"," "));
			a15.add(new ArticlesImages("Portal 2-3"," "));
			a15.add(new ArticlesImages("Portal 2-4"," "));
			
//			List<ArticlesImages> listImagesForza = new ArrayList<ArticlesImages>();
			a14.add(new ArticlesImages("Metal Gear Solid 4"," "));
			a14.add(new ArticlesImages("Metal Gear Solid 4"," "));
			a14.add(new ArticlesImages("Metal Gear Solid 4"," "));
			a14.add(new ArticlesImages("Metal Gear Solid 4"," "));
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
	
	@GetMapping("/getArticle/{Id}")
	public Article getArticleById(@PathVariable("Id") Long id) {
		return articleRepository.findById(id).orElse(null);
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

# poec-projet-achat-en-ligne
Le code source de projet Achat en ligne. 

1. lancer http://localhost:8080/initusers
En lancant cette url : /initusers, Le systeme ajoute maintenant 3 roles (ROLE_ADMIN client seller) et 3 users avec chacun un role different. Lors de votre prochain pull, avant de lancer l'app spring, droper la BD ou les tables "users" "roles" et "users_roles" puis relancer le /initusers qui va ajouter les users avec leur roles
2. lancer http://localhost:8080/initArticles
Pour créer les articles, les insérer dans la base de données


Config projet : il faut rajouter dans spring -> edit starters -> spring web

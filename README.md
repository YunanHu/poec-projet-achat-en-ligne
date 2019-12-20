# poec-projet-achat-en-ligne
Le code source de projet Achat en ligne. 


/initusers 
puis dans my sql lancer ce script (attention il faut click droit sur la BD et clicker sur set as default schema ou le script ne va pas s'executer)

insert into roles values (1,"ROLE_ADMIN"),
(2,"ROLE_USER"); (

insert into users_roles values (1,1),
(2,2);











Config projet : il faut rajouter dans spring -> edit starters -> spring web

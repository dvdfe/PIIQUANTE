# PIIQUANTE
Prérequis:
- npm 
- node

Installation et déploiment du backend:
- Accéder au dossier back du projet: cd back
- Installer les dépendences du backend en exécutant la commande : npm install
- Créer un dossier "images" : mkdir images
- Créer un fichier ".env" : touch .env
- Ajouter au fichier .env les informations suivantes : DB_ADMIN= URL_CONNEXION_BASE_DE_DONNEES_MONGODB
- Remplacer la chaîne de caractère URL_CONNEXION_BASE_DE_DONNEES_MONGODB, par l'url de connexion à votre base de données mongodb
- Démarrer le serveur du backend en exécutant la commande : node server ou la commande nodemon server(si la commande nodemon est disponible sur votre ordinateur) 
Votre application backend est maintenant lancé sur le port 3000. Vous pouvez y accéder via l'url : localhost:3000

Installation et déploiment du frontend: 
- Accéder au dossier front du projet: cd front
- Démarrer le serveur du frontend en exécutant la commande : ng serve
Votre application frontend est maintenant lancé sur le port 4200. Vous pouvez y accéder via l'url : localhost:4200




# Portfolio Vue.js

## Introduction

Bienvenue sur le projet **Portfolio Vue.js** ! Ce projet est une application web interactive développée avec Vue.js, visant à présenter mes compétences, projets et informations personnelles de manière professionnelle et dynamique.

## Table des Matières
1. [Fonctionnalités](#fonctionnalités)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Installation et Configuration](#installation-et-configuration)
    - [Prérequis](#prérequis)
    - [Cloner le Répertoire](#cloner-le-répertoire)
    - [Installation des Dépendances](#installation-des-dépendances)
    - [Configuration de l’Environnement](#configuration-de-lenvironnement)
    - [Lancer l’Application](#lancer-lapplication)
4. [Structure du Projet](#structure-du-projet)
5. [Utilisation](#utilisation)
    - [Navigation](#navigation)
    - [Formulaire de Contact](#formulaire-de-contact)
6. [Serveur pour le Formulaire de Contact](#serveur-pour-le-formulaire-de-contact)
    - [Configuration du Serveur](#configuration-du-serveur)
    - [Obtenir les Informations d’Authentification](#obtenir-les-informations-dauthentification)
    - [Démarrer le Serveur](#démarrer-le-serveur)
7. [Personnalisation](#personnalisation)
    - [Modifier les Composants](#modifier-les-composants)
    - [Changer les Images](#changer-les-images)
8. [Contributions](#contributions)
9. [Licence](#licence)
10. [Contact](#contact)

## Fonctionnalités

- **Page d'Accueil** : Présentation dynamique avec des éléments interactifs.
- **À Propos** : Détails sur mon parcours, compétences, et expériences professionnelles.
- **Projets** : Galerie interactive avec des détails des projets dans des fenêtres modales.
- **Contact** : Formulaire de contact permettant aux visiteurs de me contacter directement.
- **Page 404** : Page d'erreur personnalisée pour les URLs non trouvées.

## Technologies Utilisées

- **Vue.js** : Framework JavaScript pour des interfaces utilisateur réactives.
- **Vue Router** : Gestion des routes et navigation entre les pages.
- **Axios** : Client HTTP pour envoyer des requêtes API.
- **CSS** : Pour le style et la mise en page.
- **HTML5** : Structure du site.
- **JavaScript ES6** : Logique interactive du site.
- **Webpack** : Bundler pour le traitement des modules.
- **Node.js & Express** : Backend pour traiter les requêtes du formulaire de contact.

## Installation et Configuration

### Prérequis

- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gestionnaire de paquets)

### Cloner le Répertoire
Clonez le dépôt sur votre machine locale :
git clone https://github.com/Nicolas-Lemaire/mon-portfolio


### Installation des Dépendances
Après avoir cloné le répertoire du projet sur votre machine, la prochaine étape consiste à installer les dépendances. 
    Les dépendances sont des bibliothèques et des outils supplémentaires dont le projet a besoin pour fonctionner correctement.
        Suivez ces étapes pour installer les dépendances :

1. Ouvrir un Terminal

2. Accéder au Répertoire du Projet : Une fois le terminal ouvert, vous devez naviguer jusqu'au dossier où vous avez cloné le projet.
    Utilisez la commande cd pour vous déplacer dans le répertoire . 
        Exemple : 
            cd mon-portfolio

3. Une fois dans le répertoire du projet, vous devez installer les dépendances.
    Le fichier package.json dans votre projet liste toutes les dépendances nécessaires.
        Pour installer ces dépendances: 
            npm install# ou yarn install

### Configuration de l’Environnement
    Créez un fichier .env à la racine de votre projet pour les variables d'environnement.
        Ajoutez les configurations suivantes :
            VUE_APP_API_URL=http://localhost:3000/send-email

### Lancer l’Application
    Démarrez le serveur de développement pour visualiser le site :
     npm run serve ou yarn serve 
        Ouvrez votre navigateur à http://localhost:8080.
  
## Structure du Projet

    🗃️ .git/ (Contrôle de Version)
        Ce dossier contient les fichiers Git pour le suivi des modifications et des versions du projet.

    📦 node_modules/ (Dépendances du Projet)
        Dossier généré automatiquement après l'installation des dépendances via npm install. Ce dossier contient toutes les bibliothèques et modules requis par le projet.

    🌐 public/ (Fichiers Publics)
        Ce dossier contient les fichiers accessibles directement par le navigateur, comme :
            📄index.html
                Le point d'entrée principal de l'application Vue.js.
            📄documents/ (Documents PDF)
                Ce sous-dossier contient les fichiers PDF que l'application peut servir.

    💻 src/ (Code Source de l'Application)
        Dossier principal où se trouve tout le code de l'application Vue.js.
            🎨 assets/ (Ressources Statistiques)
                Dossier pour les images, polices, et autres ressources statiques.
                    🖼️ images/ (Images)
                        Sous-dossier pour toutes les images utilisées dans l'application.
                    🎨 styles/ (Styles)
                        Sous-dossier pour les fichiers CSS ou SCSS, contenant les styles de l'application..
                    🧩 components/ (Composants Vue.js)
                        Dossier regroupant les composants réutilisables de l'interface utilisateur.
                    📄 views/ (Pages Vue.js)
                        Dossier pour les composants représentant les différentes pages de l'application.
                    🗺️ router/ (Gestion des Routes)
                        Configuration des routes de l'application, reliant les URL aux composants de vue.
                    🔧 App.vue (Composant Racine)
                        Le composant principal qui structure l'application.
                    🚀 main.js ( Point d'Entrée Principal)
                        Le fichier où l'application Vue.js est initialisée et configurée.
                
    📜 package.json (Configuration du Projet)
        Fichier contenant les scripts, les dépendances et les configurations de base du projet.
    🔒 package-lock.json (Verrouillage des Dépendances)
        Ce fichier est automatiquement généré lors de l'installation des dépendances. Il assure que les mêmes versions de dépendances sont installées sur toutes les machines.
    ⚙️ vue.config.js (Configuration Webpack)
        Fichier de configuration pour personnaliser Webpack, l'outil de build de Vue.js.
    📖 README.md (Documentation du Projet)
        Fichier Markdown contenant des informations importantes sur le projet, comme la configuration, l'utilisation, et la contribution.

## Utilisation

### Navigation 

    🏠 Accueil
        Introduction avec éléments dynamiques. La page d'accueil offre un aperçu général du site et des éléments visuels interactifs pour engager les visiteurs.

    💼 Projets
        Liste de projets avec détails accessibles en modale. Vous y trouverez une galerie de projets, chacun avec une vue détaillée en modale pour explorer les projets en profondeur.

    👤 À Propos
        Détails sur le parcours et les compétences. Cette section présente des informations sur l'expérience, les compétences et les réalisations.

    📞 Contact
        Formulaire de contact. Permet aux visiteurs d'envoyer des messages directement via un formulaire intégré pour poser des questions ou obtenir plus d'informations.

### Formulaire de Contact
    Le formulaire envoie les données à une API via une requête POST. Assurez-vous que le serveur backend est configuré et en cours d'exécution pour traiter ces requêtes.

## Serveur pour le Formulaire de Contact

### Configuration du Serveur 
    Au lieu de configurer manuellement le serveur, vous pouvez récupérer le dossier préconfiguré depuis mon dépôt GitHub. 
        Voici les étapes pour le faire :
            Rendez-vous sur : https://github.com/Nicolas-Lemaire/mon-portfolio-back-end.git dépôt GitHub du projet .
                Téléchargez ou clonez le dossier server-backend depuis le dépôt. Ce dossier contient tout le nécessaire pour configurer le serveur backend.

### Obtenir les Informations d'Anthentification
    Pour que le serveur puisse envoyer des e-mails, vous devez configurer les informations d'authentification. Voici comment obtenir et configurer les informations nécessaires :

1. Accéder à la Gestion de Votre Compte Google, rendez-vous https://myaccount.google.com/.

2. Accéder à la Section Sécurité, dans le menu de gauche, cliquez sur "Sécurité".

3. Dans la section "Sécurité", utilisez la barre de recherche en haut pour taper "Créer et utiliser des mots de passe d'application".

4. Une fois que vous avez recherché ce terme, une fenêtre d'aide apparaîtra à droite. Scrollez dans cette fenêtre jusqu'à ce que vous trouviez l'option "Créer et gérez les mots de passe d'application"

5. Attention !! Vous devrez activer la validation en deux étapes si ce n’est pas encore fait. Suivez les instructions fournies pour compléter cette étape.

6. À la racine de votre répertoire du backend, créez ou modifier un fichier  nommé  (.env ). 
    Ouvrez le fichier (.env) dans un éditeur de texte et ajoutez ou modifier les lignes suivantes :
        EMAIL_USER=votre-adresse@gmail.com
        EMAIL_PASS=votre-mots-de-passe-d'application

### Démarrer le Serveur 
    Dans le répertoire de votre serveur, installez les dépendances nécessaires :
        npm install express nodemailer body-parser cors dotenv
            Puis lancez le serveur :
                node server.js
                    Le serveur sera accessible à http://localhost:3000 et sera prêt à recevoir des requêtes POST pour envoyer des e-mails.

## Personnalisation
    
### Modifier les Composants
    Pour ajuster les composants Vue.js :
        Composants : Modifiez les fichiers dans src/components/. 
            Pour personnaliser les éléments réutilisables comme HeaderPage.vue, FooterPage.vue.
        Pages : Modifiez les fichiers dans src/views/. 
            Pour mettre à jour le contenu des pages comme HomePage.vue, NotFoundPage.vue.
        
### Changer les Image
    Les images utilisées sur le site se trouvent dans src/assets/images/. 
        Remplacez les images existantes par vos propres fichiers pour personnaliser l'apparence du portfolio.

## Contridutions
    Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations à proposer, veuillez soumettre une issue ou créer une pull request.

## Licence
    Ce projet est sous Licence MIT.

## Contact
    Pour toute question ou demande de support, veuillez me contacter à X.core.gaming187@gmail.com.











 


 


 


 





 





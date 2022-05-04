<!-- Résumé des ressources -->
<details>
  <summary>Résumé des ressources </summary>
  <ol>
    <li>
      <a href="#actualite">Actualité</a>
      <ul>
        <li>"/"</li>
        <li>"/actualite/:titre"</li>
        <li>"/actualite"</li>
      </ul>      
    </li>
    <li>
      <a href="#calendrier">Calendrier</a>
      <ul>
        <li>"/calendrier"</li>
        <li>"/calendrier/:classe"</li>
      </ul> 
    </li>
    <li>
          <a href="#contacts">Contact</a>
          <ul>
            <li>"/contacts"</li>
      </ul>
    </li>
    <li>
      <a href="#users">Users</a>
          <ul>
            <li>"/users"</li>
            <li>"users/:mail"</li>
            <li>"inscription"</li>
            <li>"connexion/userInfos"</li>
            <li>"password/:mail"</li>
         </ul>      
    </li>
    <li>
      <a href="#eleves">Eleves</a>
        <ul>
            <li>"/eleves"</li>
            <li>"users/:id"</li>
         </ul> 
    </li>
    <li>
      <a href="#commentaires">Commentaires </a>
        <ul>
            <li>"/comportement"</li>
            <li>"/comportement/:id"</li>
          <li>"/bulletins"</li>
          <li>"/bulletins/:id</li>
         </ul> 
    </li>
    <li>
      <a href="#classes">Classes</a>
      <ul>
        <li>classes</li>
      </ul>
    </li>
  </ol>
</details>


# Documentation des ressources 


<hr>

## Actualite

<strong><h3>Description de la ressource : </h3></strong>

Le point "Actualité" situé dans la rubrique "actualité" de notre application web regroupe un ensemble d'articles crées par le secrétariat qui seront affichés en première page lorsque n'importe quel utilisateur se rend sur le site et souhaite consulter les dernières actualités de l'école. <br><br>
Une ressource actualité est composée d'un titre, d'une date (afin de connaitre de quand date cette information) et d'un corps de texte qui reprend l'ensemble de ce que l'on doit connaitre et les informations à prendre en compte concernant cet article. <br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>


```text
.../
.../actualite
.../actualite/:titre
```
<br>
<br>

<strong>GET</strong> <br>
  
>A. une requête GET accessible via "/" lorsque que n'importe quel utilisateur se rend sur la page principale de notre site.<br>
route : "/" qui nous fournit les informations décrites ci-dessus, c'est à dire : titre, date et corps de l'article sous format JSON.<br><br>
  
<strong> Paramètres attendus : </strong><br>
  
  aucuns, cette route fait appel à une procédure stockées faisait appel à un SELECT * sur la table Actualité.
  
  <br><br>

>B. une requete GET accessible via "/actualite/:titre" qui permet dans la rubrique accessible au secrétariat de consulter la liste des actualités en fonction de leur titre et leur permettre de les modifier ou les supprimer en cas mise à jour dans le cadre de l'établissement.<br>
route : "/actualite/titre: qui nous fournit les information associées à un objet actualité en fonction de son titre<br><br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route s'attend à recevoir un paramètre de type "string" afin de permettre d'effectuer une requete sur base d'un critère spécifique et de récupérer les           actualités sur base de leur titre.
  
  <br><br>
  


<strong>POST</strong> <br>
  
>A. une requête POST accessible uniquement via le secrétariat afin de rajouter de l'actualité concernant l'école dans la base de données ou les informations seront réinjectées par la suite dans la rubrique actualité du site.<br>
route : "/actualite" qui nous permettra d'aller insérer du contenu au format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route s'attend à recevoir un object Json comportant : {Date: "Date", Titre: "String", Contenu: "String"} à envoyé en paramètre lors de la requete axios.
  
  <br><br>  

<strong><h3>Exemples liés à cette ressource : </h3><strong><br>
  
Recupération des actualités
```js
axios.get("http://localhost:3000/")

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

Status de la requete : 
```js
Status: 200 OK
```
  
Réponse : 
```js
[
    {
        "ActualiteId": 1,
        "Date":"2022-03-23T23:00:00.000Z",
        "Titre":"Actu 1",
        "Contenu":"\"Mon nom est Maximus Decimus Meredius, commandant en chef des armées du Nord, général des légions Felix, fidèle serviteur du vrai empereur Marc Aurèle.Père d'un fils assassiné, époux d'une femme assassinée, et j'aurai ma vengeance, dans cette vie ou dans l'autre.\""
    },
    {
        "ActualiteID":2,
        "Date":"2022-03-24T15:03:39.000Z",
        "Titre":"Actu 2",
        "Contenu":"\"Père bien aimé, veille sur ma femme et mon fils l’épée à la main. Murmure leur que je ne vis que pour les retrouver car tout le reste n’est que poussière.\""
    }
]
```
<br>
  
Envoi de données via une méthode POST vers "/actualite"
 
```js
async insertActu(){
  const destinationUrl = url.concatUrl("/actualite");

  await axios.post(destinationUrl,{
    Date: this.date,
    Titre: this.titre,
    Contenu: this.contenu
  })
  .then(response =>{
    console.log(response.data);
  })
  .catch(error =>{
    console.log(error);
  })
}

```
  
Satus de la requete : 
  
```js
Status: 200 OK
```
  
<br>
  
  
Recupération des actualités par Titre
```js
axios.get(`http://localhost:3000/${titre}`)

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

Status de la requete : 
```js
Status: 200 OK
```
  
Réponse : 
```js
[
    {
        "ActualiteId": 1,
        "Date":"2022-03-23T23:00:00.000Z",
        "Titre":"Actu 1",
        "Contenu":"\"Mon nom est Maximus Decimus Meredius, commandant en chef des armées du Nord, général des légions Felix, fidèle serviteur du vrai empereur Marc Aurèle.Père d'un fils assassiné, époux d'une femme assassinée, et j'aurai ma vengeance, dans cette vie ou dans l'autre.\""
    },
]
```
<br>


<br><br>

<hr>

## Calendrier

<strong><h3>description de la ressource : </h3></strong>

le point "Calendrier" situé dans la rubrique "calendrier" de notre application web regroupe un ensemble d'évènements à venir ou déjà passés concernant les activités, thèmes et autres concernant la classe d'un enfant.<br><br>
une ressource située dans le calendrier est constituée d'un Id d'évènement, d'un contenu regroupant la description de l'évènement visé, d'une date afin que celui-ci puisse être placé correctement dans le calendrier et d'une classe spécifique afin que l'évènement concerne une classe d'élèves spécifique.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>

```
.../calendrier
.../calendrier/:classe
```

<strong>GET </strong><br>

>A. une requête GET accessible via "/calendrier/:classe" qui permet de récupérer les évènements concernant une classe spécifique et afficher uniquement les ressources nécessaire aux élèves d'une certaine classe et non un simple Amat d'évènements mélangés.<br>
route : "/calendrier/:classe" ou l'on peut récupérer les évènement concernant une classe donnée sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route s'attend à recevoir un paramètre de type "String" permettant d'effectuer une requete sur base d'un critère spécifique
  
  <br><br>  

>B. une requête GET accessible via "/calendrier qui permet de récupérer tous les évènement contenus dans la table "calendrier" afin d'effectuer des test coté backend. cette route, pour le moment est à titre indicatif une façon d'effectuer différents test et consultation de table dans la base de données.<br>
route : "/calendrier" ou l'on peut récupérer tous les évènements listés dans la base de données sous format JSON.<br>
  

<strong> Paramètres attendus : </strong><br>
  
  cette route ne recois aucun paramètre mais fera appel à une procédure stockée permettant de récupérer l'ensemble des événements sous format Json
  
  <br><br>  


<strong>POST</strong> <br>

>A. une requête POST accessible uniquement pour les professeurs qui souhaiteront rajoutés des événements à venir concernant certaines de leurs classes dans le calendrier accessible pas les utilisateurs.<br>
route : "/calendrier" qui nous permettra d'aller insérer du contenu dans notre table "calendrier".<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route s'attend à recevoir un object Json comportant : {Date: "Date", Titre: "String", Classe: "String", StartTime: "Date", StopTime: "Date"} à envoyé en         paramètre lors de la requete axios.
  
  <br><br>  

<strong><h3>Exemples liés à cette ressource : </h3><strong><br>

<br>

Récupération des événements en fonction d'une classe

```js
axios.get(`http://localhost:3000/calendrier/${classe}`)

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "EvenementId": 1,
        "Classe":"1A",
        "Contenu":"Test premier event"
        "Date":"2022-02-28T23:00:00.000Z"
        
    },
    {
        "EvenementId": 3,
        "Classe":"1A",
        "Contenu":"test event2 classe 1A"
        "Date":"2022-03-08T23:00:00.000Z"
    }

]
```
<br>
  
Envoi de données via une méthode POST vers "/calendrier"
 
```js
async sendData(){

    let destinationUrl = url.concatUrl('/calendrier');
    await axios.post(destinationUrl,{
        Classe : this.classe,
        Date: this.start,
        Contenu: this.contenu,
        Titre: this.titre,
        StartTime: this.start,
        StopTime: this.stop,
    })
    .then(function(){
        console.log("request send");
    })
    .catch(error =>{
        console.log(error);
    })
},

```
  
Satus de la requete : 
  
```js
Status: 200 OK
```




<hr>

## Contacts

<strong><h3>Description de la ressource : </h3></strong>

Le point "Contact" situé dans la rubrique "Contact" de l'application se présente sous la forme d'un formulaire ou un parent pour se rendre afin de poser une éventuelle question au personnel de l'établissement. une ressource de contact est constituée de 2 mails (expéditeur et destinataires), d'un objet de requête ainsi qu'une zone de texte contenant le corps du message que l'on souhaite transmettre. cette rubrique à été crée afin de faciliter une prise de contact entre un parent cherchant à joindre un membre du personnel de façon simple et rapide.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3></strong>

```
/contacts
/sendMail
```

<strong>GET</strong> <br>
>A. une requête GET accessible via "/contacts" ayant pour but de charger dans un champ de formulaire les mails des membres du personnel de l'établissement et ainsi proposer au parent, une liste des contacts joignables au sein de l'établissement.<br>
route : "/contacts" ou l'on récupère toute la liste des mails des membres du personnel sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route ne recois aucuns paramètre et fait appel à une procédure stockée en DB.
  
  <br><br>   

<strong>POST</strong> <br>
>A. une requête POST accessible via "/sendMail" ayant pour but d'envoyer une requête contenant nos informations récoltées dans le formulaire de contacts pour ensuite utiliser ces données pour transmettre le mail via un serveur mail.<br>
route: "/sendMail" ou l'on envoi nos données récoltées dans le formulaire de contact.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route s'attend à recevoir un object Json comportant : {Expediteur: "String", DEstinataire: "String", Phone: "String", Nom: "String", Contenu: "String"} à         envoyé en paramètre lors de la requete axios.
  
  <br><br>   

<strong><h3>Exemples liés à cette ressource : </h3><strong>

<strong>.../contacts</strong>
```js
axios.get("http://localhost:3000/contacts")

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "Mail":"n.zebi@secretariat.be",
    },
    {
        "Mail":"p.chirec@direction.be",
    },
]
```
<br><br>
<br>
<hr>

## Users

<strong><h3>Description de la ressource : </h3></strong>
Le point "Users" ne se trouvent dans aucunes rubriques à proprement parlé mais nous sera utiles pour les taches administratives. une ressources User est constituée d'un prénom, nom, d'un mot de passe et d'un mail ainsi qu'un rôle et un token. Nous exploiterons cette ressources pour l'ajout de nouveaux utilisateurs et dans le cadre de consultation des utilisateurs déjà existants et des informations à récolter lié à certains profils ainsi que dans les modules de connexion et gestion de roles.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>

```
.../users
.../users/:mail
.../inscription
.../connexion
.../password/mail
```

<strong>GET</strong> <br>

>A. une requete GET accessible via "/users" qui nous permet de récuperer la liste complète des utilisateurs enregistrés dans la base de données qui nous permettrons d'effectuer certains tests lors de l'inscription d'un nouvel utilisateur par exemple. <br>
route : "/users" nous permettant de récupérer l'ensemble des utilisateurs sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route ne recois aucuns paramètre et fait appel à une procédure stockée en DB.
  
  <br><br>  

>B. une requete GET accessible via "/users/:mail" qui nous permet de recuperer les informations d'un utilisateur sur base de son mail. c'est à dire, prénom, nom, mail, mot de passe, role et token.<br>
route : "/users/:mail" nous permettant de recuperer l'ensemble des données d'un utilisateur sur base de son mail sous format JSON.<br>
  
  
<strong> Paramètres attendus : </strong><br>
  
  cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>  
  
>C. une requete GET accessible via "connexion/:userinfos" qui nous permet de recuperer les informations d'un utilisateur lors de son login. c'est à dire, prénom, nom, mail, mot de passe, role et token apres que toutes les conditions de login ai été validées<br>
route : "/connexion" nous permettant de recuperer l'ensemble des données d'un utilisateur sur base de son mail sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
  cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>  
  
>D. une requete GET accessible via "/password/:mail" qui nous permet de recuperer le mot de passe d'un utilisateur sur base de son mail lors des vérification de login ou encore de création de compte.
route : "/password/:mail" nous permettant de recuperer l'ensemble des données d'un utilisateur sur base de son mail sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>  

<strong>POST</strong> <br>

>A. une requete POST accessible via "/inscription" qui nous permettra d'aller enregistrer les données d'un nouvel utilisateur dans la base de données.<br><br>
route : "/inscription" nous permettant d'envoyer nos données sous format JSON.<br><br>

<strong> Paramètres attendus : </strong><br>
  
cette route recois un objet JSON en paramètres de type : {Nom : "String", Prenom : "String", Mail: "String", Password: "String", Role : "INT", Token : "String"}
  
  <br><br>


<strong><h3>Exemples liés à cette ressource : </h3><strong>


Récupération des utilisateurs
```js
axios.get("http://localhost:3000/users")

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "Prenom": "Guillaume",
        "Nom":"Vasseur",
        "Mail":"g.vasseur@gmail.com",
        "MotDePasse":"test",
        "Roles" : "1",
        "Token" : "testBonsoir",
        
    },
    {
        "Prenom": "nathalie",
        "Nom":"zebi",
        "Mail":"n.zebi@secretariat.be",
        "MotDePasse":"test",
        "Roles" : "2",
        "Token" : "testBonsoir",
        
    }
]
  
```
<br>

Envoi de données vers la ../inscription

```js
createAccount(){
    const self = this;

    this.$store.dispatch('createAccount',{
        Nom: this.nom,
        Prenom: this.prenom,
        Mail : this.email,
        MotDePasse: this.password,
        Token: this.token()
    })
    .then(function(){
        console.log('ok');
        self.logUser();
    })
    .catch(error =>{
        console.log(error);
    })
},
```

```js
createAccount: ({commit}, userInfos) => {
            
   commit('setStatus', 'loading');
   return new Promise((resolve, reject) =>{
   commit;
   instance.post("/inscription",userInfos)
     .then(response =>{
        commit('setStatus', 'created')
        resolve(response);
     })
     .catch(error =>{
        commit('setStatus', 'error_create')
        reject(error);
     });

  });
},
```
  


<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
  
<br>
Récupération des données utilisateur apres connexion (../connexion/${userInfos}")

```js
login: ({commit}, userInfos) => {

    let destinationUrl = url.concatUrl(`/connexion/${userInfos}`);

    commit('setStatus', 'loading');

    return new Promise((resolve, reject) =>{
        instance.get(destinationUrl)
        .then(response =>{
            commit('setStatus', 'logged');
            commit('logUser', response.data);
            resolve(response);
        })
        .catch(error =>{
            commit('setStatus', 'error_login')
            reject(error);
        });

    });
},
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
  
Récupération de utilisateurs en fonction de leur mail 
```js
axios.get(`http://localhost:3000/users/${mail}`)

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "Prenom": "Guillaume",
        "Nom":"Vasseur",
        "Mail":"g.vasseur@gmail.com",
        "MotDePasse":"test",
        "Roles" : "1",
        "Token" : "testBonsoir",
        
    },
    {
        "Prenom": "nathalie",
        "Nom":"zebi",
        "Mail":"n.zebi@secretariat.be",
        "MotDePasse":"test",
        "Roles" : "2",
        "Token" : "testBonsoir",
        
    }
]
  
```
  

  
  
<br><br>


<hr>

## Eleves

<strong><h3>Description de la ressource : </h3></strong>
Le point "Eleves" ne se trouvent dans aucune rubrique à proprement parlé mais nous sera d'une utilité primordiale quant au fonctionnement de notre application. En effet, les information constituant un eleve sont essentielles pour d'autre rubrique comme la page "comportement" ou encore "remarque" et autre. une ressource Eleves est constituée d'un nom, prenom, mail, d'un id et d'autres informations d'ordre administratif.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>

```
.../eleves
.../eleves/:id
```


<strong>GET </strong><br>

>A. une requête GET accessible via "/eleves" qui nous permet de récupérer la liste complètes des élèves stockés dans la base de données. cet endpoint à pour but de consulter l'ensemble des données des élèves ainsi que pour effectuer des tests sur nos données.<br>
route : "/eleves" qui nous permet de récupérer l'ensemble des données des élèves sous format JSON.<br>
  
  
<strong> Paramètres attendus : </strong><br>
  
cette route fait appel à une procédure stockée en DB et ne nécéssite aucun paramètre.
  
  <br><br>  

>B. une requete GET accessible via "/eleves/:id" qui nous permet de récupérer les données d'un élève sur base de son id. cette ressource est fondamental dans la réalisation des rubriques "comportement" et "remarque" qui se feront sur un élèves spécifique. ces données nous serons aussi nécessaire pour les parents situés dans la gestion de leurs compte contenant les informations de leur(s) enfant(s). Ce endpoint à été crée afin d'éviter un tas de calcul au sein de la base de données et de permettre de récupérer instantanément les données voulues sur base d'un id.<br>
route : "/eleves/:id" qui nous permet de récupérer les données d'un enfant sur base de son Id sous format JSON.<br>
  
  
<strong> Paramètres attendus : </strong><br>
  
cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>  
  

<strong>POST</strong> <br>

>A. une requete POST accessible via "/eleves" qui permettra au secrétariat d'encoder un nouvel élève et ses données associées dans la base de données.<br>
route : "/eleves" qui nous permettra d'envoyer les données d'un nouvel élève sous format JSON.<br>
  
  
<strong> Paramètres attendus : </strong><br>
  
cette route recoit en paramètre un objet JSON de type : {Nom: "String", Prenom: "String", DateDeNaissance: "Date", Mail :"String", Classe : "String"}
  
  <br><br>  


<strong><h3>Exemples liés à cette ressource : </h3><strong>

  
Récupération des élèves
```js
axios.get("http://localhost:3000/eleves")

   .then(reponse =>{
   this.items = reponse.data;
   })

   .catch(error =>{
   console.log(error);
   });
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "EleveId": "1",
        "Prenom": "Edouard",
        "Nom":"Maisin",
        "Mail":null,
        "Classe":"1A",
        "DateDeNaissance":"2022-03-16T23:00:00.000Z",
        
    },
]
```
<br><br>
  
  
Ajout d'un élève 
```js
async insertStudent(){

    let destinationUrl = url.concatUrl("/eleves")
    await axios.post(destinationUrl,
    {
        Nom:this.nom,
        Prenom:this.prenom,
        Mail:this.email,
        Classe:this.classe,
        DateDeNaissance:this.date,
    })
    .then(response =>{
        console.log(response.data);
    })
    .catch(error =>{
        console.log(error)
    })
}
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
<br><br>


<hr>
  
## Commentaires
  

<strong><h3>Description de la ressource : <h3></strong>
Les points "comportement" et "Bulletin" situés les rubriques "comportement" et "bulletin" se présente sous la forme d'un tableau contenant des divers informations tels que, un contenu et une date pour les bulletins. Un mail de professeur, un contenu et une date pour les remarques ainsi qu'un Id d'élève pour les 2 ressources qui constitue une ressource à part entière de notre application décrite dans le point 5 ci-dessus. Nous avons décidés de mettre ses 2 ressources dans le même point car leur principe de fonctionnement est identique.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>

```
.../bulletins/:id
.../comportement/:id
.../bulletins
.../comportement
```

<strong>GET</strong> <br>

>A. une requete GET "/bulletins/:id" qui nous permettra d'aller récupérer dans la base de données, le bulletin de l'élève correspondant.<br>
route : "/bulletins/:id" pour récupérer le bulletin dans un format encore indéterminé.<br>
  
<strong> Paramètres attendus : </strong><br>
  
cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>

>B. une requete GET "/comportement/:id" qui nous permettra d'aller récupérer les remarques effectuées par un professeur sur base de l'id d'un eleve dans la base de données.<br>
route : "/comportement/:id" pour récupérer les remarques sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
cette route fait appel à un paramètre de type "String" permettant d'effecteur une requete sur base d'un critère précis.
  
  <br><br>

<strong>POST</strong> <br>

>A. une requete POST "/bulletins" afin de permettre au professeur de pouvoir enregistré une nouvelle ressource "bulletin" dans la base de donnée à partir d'un formulaire.<br>
route : "/bulletins" nous permettra d'envoyer les données dans un format encore indéterminé pour le moment.<br>
  
<strong> Paramètres attendus : </strong><br>
  
EN COURS DE DEVELOPPEMENT...
  
  <br><br>

>B. une requete POST "/comportement" afin de permettre au professeur de pouvoir enregistré une nouvelle ressource "remarque" dans la base de donnée à partir d'un formulaire.<br>
route : "/remarques" nous permettra d'envoyer les données d'une nouvelle remarque sous format JSON.<br>
  
<strong> Paramètres attendus : </strong><br>
  
EN COURS DE DEVELOPPEMENT...
  
  <br><br>

<strong><h3>Exemples liés à cette ressource : </h3><strong>

  
Récupération des remarques en fonction d'un élève
```js
  async getAllComportement(){
      try{
          await instance.get(eleve_id)
          .then(response =>{
              this.items = response.data;
              console.log(response.data);
          })
          .catch(error =>{
              console.log(error)
          })
      }
      catch(error){
          console.log(error);
      }

  },
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
  {
    "ComportementID": 1,
    "Mail": "Simon.test@gmail.com",
    "Contenu": "C'est un test pour le backend vers le frontend.",
    "EleveID": 5,
    "Date": "2022-04-21T22:00:00.000Z",
    "Signature": 1
  },
  {
    "ComportementID": 2,
    "Mail": "Simon.test@gmail.com",
    "Contenu": "TEST 2",
    "EleveID": 5,
    "Date": "2022-04-21T22:00:00.000Z",
    "Signature": 1
  },
  {
    "ComportementID": 4,
    "Mail": "Simon.test@gmail.com",
    "Contenu": "test3",
    "EleveID": 5,
    "Date": "2022-04-24T22:00:00.000Z",
    "Signature": 1
  },
  
]
```


<br><br>

<hr>

## Classes

<strong><h3>Description de la ressource : </h3></strong>
Le point "classe" ne se trouve dans aucune ressource mais reste essentiel pour le bon fonctionnement de notre site et les relations inter-tables de notre base de données. nous ne pouvons associés que un seul endpoint qui n'est pas le plus important mais reste cependant souvent oubliés et ce détail ne peux être negligé. Une ressource "classe" est constituée d'un numéro identifiant la class ainsi que l'identifiant du professeur qui en est responsable.<br><br>

<strong><h3>Endpoints liés à cette ressource et méthodes accessibles : </h3><strong>

```
.../classes
```

<strong>GET</strong><br>
>A. une requête GET "/classes" qui nous permettra de consulter l'ensemble des classes.<br>
route : "/classes" qui nous permet de récupérer les ressources des différentes classe sous format JSON.<br>

<strong>POST</strong>br>

>B. une requete POST "/classes" qui nous permettra d'enregistrer une nouvelle classe si besoin est.<br>
route: "/classes" qui nous permet d'encoder une nouvelle classe sous format JSON.<br>

<strong><h3>Exemples liés à cette ressource : </h3><strong>

<strong>Frontend</strong><br><br>

<strong>.../classes</strong>
```js
 async getClasses(){

      let destinationUrl = url.concatUrl("/classes");
      await axios.get(destinationUrl)
      .then(response =>{
          this.items = response.data;
      })
      .catch(error =>{
          console.log(error)
      })
  },
```

<br>
<strong>Réponse</strong>

```js
Status: 200 OK
```
```js
[
    {
        "Classe": "1A",
    },
    {
        "Classe": "5B",
    }
]
```

<br><br>
  
  
Insérer une classe <br>
  
EN COURS DE DEVELOPPEMENT...

/// <reference types="cypress" />

context('Actualité Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/')
        cy.wait(1000)
        cy.get('.HomePageContainer > .row > .col-sm > .form-title')
        cy.contains('Test1').should('not.exist')
        cy.contains('15/05/2022').should('not.exist')
        cy.contains('Je suis un test Cypress').should('not.exist')
        cy.wait(2000)
    })
    
    it('Up down home page', () => {
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.wait(1000)
    });

    it('.click() - click on a DOM element', () => {
        cy.viewport(1920, 1080)
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.get('#email').type('MailSecretariat1@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('testtest')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)
        cy.reload(true)
        cy.wait(1000)
        
        //Ajout d'ue actualité
        
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Secretariat').click({force: true})
        cy.location('pathname').should('eq', '/secretariat')
        cy.wait(1000)
        cy.get("#actualite").click({force: true})
        cy.wait(1000)
        cy.get("#ajout").click({force: true})
        cy.wait(1000)
        cy.get("#exampleInputEmail1").type('Test1', {force: true})
        cy.wait(1000)
        cy.get("#exampleInputPassword1").type('2022-05-15',  {force: true})
        cy.wait(1000)
        cy.get('#contenu1').type('Je suis un test Cypress',  {force: true})
        cy.wait(1000)
        cy.contains('Ajouter').click({force: true})
        cy.wait(1000)  

        //Déconnexion en tant que secrétariat

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Profile').click({force: true})
        cy.location('pathname').should('eq', '/profile')
        cy.wait(2000)
        cy.get('#deconnexion').click({force: true})
        cy.wait(1000)

        //Connexion en tant que parent pour voir le résultat

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.get('#email').type('Cypress@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('Cypress123')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)

        //Check résultat

        cy.visit('http://localhost:8080/')
        cy.get('.HomePageContainer > .row > .col-sm > .form-title')
        cy.contains('Test1').should('exist')
        cy.contains('15/05/2022').should('exist')
        cy.contains('Je suis un test Cypress').should('exist')
        cy.wait(2000)

        //Déconnexion
        
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Profile').click({force: true})
        cy.location('pathname').should('eq', '/profile')
        cy.wait(2000)
        cy.get('#deconnexion').click({force: true})
        cy.wait(1000)

        //Retour à la connexion du secrétariat
        
        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.get('#email').type('MailSecretariat1@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('testtest')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)
        cy.reload(true)
        cy.wait(1000)

        //Supression directement

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Secretariat').click({force: true})
        cy.location('pathname').should('eq', '/secretariat')
        cy.wait(1000)
        cy.get("#actualite").click({force: true})
        cy.wait(1000)
        cy.get('select').select('Test1',{force: true})
        cy.wait(1000)
        cy.get("#btn-supprimer").click({force: true})
        cy.wait(1000)
        
        //Déconnexion

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Profile').click({force: true})
        cy.location('pathname').should('eq', '/profile')
        cy.wait(2000)
        cy.get('#deconnexion').click({force: true})
        cy.wait(1000)

        //Reconnexion en tant que parent

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Connexion').click({force: true})
        cy.location('pathname').should('eq', '/connexion')
        cy.wait(1000)
        cy.get('#email').type('Cypress@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('Cypress123')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)

        //Check résultat

        cy.visit('http://localhost:8080/')
        cy.wait(1000)
        cy.get('.HomePageContainer > .row > .col-sm > .form-title')
        cy.contains('Test1').should('not.exist')
        cy.wait(1000)
    });
  });
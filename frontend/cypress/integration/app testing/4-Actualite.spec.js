/// <reference types="cypress" />

context('Secrétariat Actualité Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/')
        cy.wait(1000)
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
        cy.get('#email').type('secretariat.test@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('testtest')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)
        cy.reload(true)
        
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
        cy.wait(2000)
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
        cy.get('#email').type('secretariat.test@gmail.com')
        cy.wait(1000)
        cy.get('#password').type('testtest')
        cy.wait(1000)
        cy.get('#btn-connexion').click({force: true})
        cy.wait(1000)
        cy.reload(true)

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
    });
  });
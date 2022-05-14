/// <reference types="cypress" />

context('Home Page', () => {
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
        cy.visit('http://localhost:8080/secretariat')
        cy.wait(1000)
        cy.get("#actualite").click({force: true})
        cy.wait(1000)
        cy.visit('http://localhost:8080/secretariat/actualites')
        cy.wait(1000)
        cy.get("#ajout").click({force: true})
        cy.wait(1000)
        cy.get("#exampleInputEmail1").type('Test1', {force: true})
        cy.wait(1000)
        cy.get("#exampleInputPassword1").type('2022-05-13')
        cy.wait(1000)
        cy.get('#contenu1').type('Je suis un test Cypress')
        cy.wait(1000)
        cy.contains('Ajouter').click({force: true})
        cy.wait(1000)   

        //Check du résultat
        cy.visit('http://localhost:8080/')
        cy.wait(1000)
        //Retour en mode gestion 
        cy.visit('http://localhost:8080/secretariat/actualites')
        cy.get('select').select('Test1',{force: true})
        cy.wait(1000)
        cy.get("#btn-supprimer").click({force: true})
        cy.wait(1000)

        cy.visit('http://localhost:8080/')
        cy.wait(1000)
    });
  });
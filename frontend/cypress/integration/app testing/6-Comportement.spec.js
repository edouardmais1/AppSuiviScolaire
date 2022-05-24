/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Calendrier Page', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit(' http://localhost:8080/')

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
      cy.reload(true)
      cy.wait(1000)
    });

    it('.click() - click on a DOM element', () => {   
      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Comportement').click({force: true})
      cy.location('pathname').should('eq', '/comportement')
      cy.wait(1000)

      //Testing existance 

      cy.get('.container-comportement')
      cy.contains('MailProf1@gmail.com').should('not.exist')
      cy.contains('Je suis un test Cypress').should('not.exist')
      cy.contains('15/05/2022').should('not.exist')
      cy.wait(1000)

      //Déconnexion

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Profile').click({force: true})
      cy.location('pathname').should('eq', '/profile')
      cy.wait(2000)
      cy.get('#deconnexion').click({force: true})
      cy.wait(1000)

      //Connexion en tant que sécrétariat

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Connexion').click({force: true})
      cy.location('pathname').should('eq', '/connexion')
      cy.wait(1000)
      cy.get('#email').type('MailProf1@gmail.com')
      cy.wait(1000)
      cy.get('#password').type('testtest')
      cy.wait(1000)
      cy.get('#btn-connexion').click({force: true})
      cy.wait(1000)
      cy.reload(true)
      cy.wait(1000)

      cy.get('.navbar-toggler').click({force: true})
      cy.contains('Comportement').click({force: true})
      cy.location('pathname').should('eq', '/comportement/modification')
      cy.wait(1000)

      cy.get('#add-component').click({force: true})

      cy.get('#classe').select('1A',{force: true})
      cy.get('#rechercher').click({force: true})
      
      cy.request('http://localhost:3000/eleves').should(
          (response) => {
            expect(response.status).to.eq(200)
            const respBody = response.body[0]
            const place = (respBody['length'])-1
            const id = respBody[place]['EleveID']
            expect(response.body)
            console.log(id)

            cy.wait(1000)
            cy.get("#eleveId").select(''+id, {force: true})
            cy.wait(1000)
            cy.get("#date").type('2022-05-15',  {force: true})
            cy.wait(1000)
            cy.get('#contenu').type('Je suis un test Cypress',  {force: true})
            cy.wait(1000)
            cy.get('#ajouter').click({force: true})
            cy.wait(1000)
        
            cy.request('http://localhost:3000/comportement/'+id).should(
            (response) => {
              expect(response.status).to.eq(200)
              const respBody2 = response.body[0]
              console.log(respBody2)
              const id2 = respBody2['ComportementID']
              expect(response.body)
              console.log(id2)


              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Profile').click({force: true})
              cy.location('pathname').should('eq', '/profile')
              cy.wait(2000)
              cy.get('#deconnexion').click({force: true})
              cy.wait(1000)
        
              //Connexion en tant que parent
        
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
              cy.reload(true)
              cy.wait(1000)
        
              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Comportement').click({force: true})
              cy.location('pathname').should('eq', '/comportement')
              cy.wait(1000)
              cy.get('.container-comportement')
              cy.contains('MailProf1@gmail.com').should('exist')
              cy.contains('Je suis un test Cypress').should('exist')
              cy.contains('15/05/2022').should('exist')
        
              cy.get('.button-send').click({force: true})

              //Déconnexion
        
              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Profile').click({force: true})
              cy.location('pathname').should('eq', '/profile')
              cy.wait(2000)
              cy.get('#deconnexion').click({force: true})
              cy.wait(1000)
        
              //Connexion en tant que sécrétariat
              
              cy.wait(1000)
              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Connexion').click({force: true})
              cy.location('pathname').should('eq', '/connexion')
              cy.wait(1000)
              cy.get('#email').type('MailProf1@gmail.com')
              cy.wait(1000)
              cy.get('#password').type('testtest')
              cy.wait(1000)
              cy.get('#btn-connexion').click({force: true})
              cy.wait(1000)
              cy.reload(true)
              cy.wait(1000)
        
        
              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Comportement').click({force: true})
              cy.location('pathname').should('eq', '/comportement/modification')
              cy.wait(1000)
              cy.get('#'+id2).click({force: true})
              cy.wait(1000)

              //Check du résultat

              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Profile').click({force: true})
              cy.location('pathname').should('eq', '/profile')
              cy.wait(2000)
              cy.get('#deconnexion').click({force: true})
              cy.wait(1000)
        
              //Connexion en tant que parent
        
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
              cy.reload(true)
              cy.wait(1000)

              cy.get('.navbar-toggler').click({force: true})
              cy.contains('Comportement').click({force: true})
              cy.location('pathname').should('eq', '/comportement')
              cy.wait(1000)
              cy.get('.container-comportement')
              cy.contains('MailProf1@gmail.com').should('not.exist')
              cy.contains('Je suis un test Cypress').should('not.exist')
              cy.contains('15/05/2022').should('not.exist')
              cy.wait(1000)
            });
      });   
    });  
});
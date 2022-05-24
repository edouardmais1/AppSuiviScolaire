/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Secrétariat élèves Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit(' http://localhost:8080/')
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
     
    })

    it('.click() - click on a DOM element', () => {   

        //Ajout d'un eleve besoin d'avoir le mail d'un utilisateur existant 

        cy.get('.navbar-toggler').click({force: true})
        cy.contains('Secretariat').click({force: true})
        cy.location('pathname').should('eq', '/secretariat')
        cy.wait(1000)
        cy.get("#eleve").click({force: true})
        cy.wait(1000)
        cy.get('#ajout').click({force: true})
        cy.wait(1000)
        cy.get('#exampleInputName1').type('Test')
        cy.wait(1000)
        cy.get('#exampleInputPrenom1').type('Cypress')
        cy.wait(1000)
        cy.get('#exampleInputEmail1').type('Cyress@gmail.com')
        cy.wait(1000)
        cy.get('#exampleInputDate1').type('2000-09-22')
        cy.wait(1000)
        cy.get('#inputGroupSelect01').select('1A',{force: true})
        cy.wait(2000)
        cy.contains('Ajouter').click({force: true})
        cy.wait(1000)

        //Gestion des eleves 
                  
        cy.request('http://localhost:3000/eleves').should(
          (response) => {
            expect(response.status).to.eq(200)
            const respBody = response.body[0]
            const place = (respBody['length'])-1
            const id = respBody[place]['EleveID']
            expect(response.body)
            console.log(id)

            cy.wait(1000)
            cy.get('.listeEleves > .row > .col-sm').get('#'+id+"nom").should('exist')
            cy.get('.listeEleves > .row > .col-sm').get('#'+id+"mail").should('exist')
            cy.get('.listeEleves > .row > .col-sm').get('#'+id+"classe").should('exist') 
            cy.wait(1000)
          });
           
      
        //     cy.get('#'+id+'classe').select('2B', {force: true})
        //     cy.wait(1000)
        //     cy.get('#'+id+'A').click({ force: true })
        //     cy.wait(1000)
        //     cy.get('#oui').click({ force: true })
        //     cy.wait(1000)
        //     cy.get('#'+id).click({ force: true })
        //     cy.wait(1000)
        //     cy.get('#oui').click({ force: true })
        //     cy.wait(1000)
      });
  });
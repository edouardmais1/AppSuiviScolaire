/// <reference types="cypress" />

import { walkIdentifiers } from "@vue/compiler-core";

context('Calendrier Page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:8080/secretariat')
        cy.wait(1000)
        cy.scrollTo('top')
    })

    it('.click() - click on a DOM element', () => {   

        //Ajotut d'un eleve besoin d'avoir le mail d'un utilisateur existant 
        cy.get("#eleve").click({force: true})
        cy.wait(1000)
        cy.get('#ajout').click({force: true})
        cy.wait(1000)
        cy.get('#exampleInputName1').type('Test')
        cy.wait(1000)
        cy.get('#exampleInputPrenom1').type('Cypress')
        cy.wait(1000)
        cy.get('#exampleInputEmail1').type('Cypress.test@gmail.com')
        cy.wait(1000)
        cy.get('#exampleInputDate1').type('2022-05-13')
        cy.wait(1000)
        cy.get('#inputGroupSelect01').select('1A',{force: true})
        cy.wait(1000)
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
            cy.get('#'+id+"nom").type('TestModifié')
            cy.wait(1000)
            cy.get('#'+id+'classe').select('2B', {force: true})
            cy.wait(1000)
            cy.get('#'+id+'A').click({ force: true })
            cy.wait(1000)
            cy.get('#oui').click({ force: true })
            cy.wait(1000)
            cy.get('#'+id).click({ force: true })
            cy.wait(1000)
            cy.get('#oui').click({ force: true })
            cy.wait(1000)
          })
        
      });
  });
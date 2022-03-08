/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
  it('My FirstTest case', function () {
    //How cypress handles alerts
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();

    //window.alert
    cy.on('window:alert', (str) => {
      //mocha
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
    cy.on('window:confirm', (str) => {
      //mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    cy.get('#opentab').invoke('removeAttr', 'target').click(); //se usa el comando .invoke para llamar una funcion de JQuery donde el primer argumento es la funcion y el segundo el atributo que se desea eliminar

    cy.url().should('include', 'rahulshettyacademy'); //Assertion de URL www. 'qaclickacademy' .com
    cy.go('back');

    //Mouse hover options
    //cy.get('div.mouse-hover-content').invoke('show') //the dot tells it is a class name - when we want to also check that the pop up is displaying
    cy.contains('Top').click({ force: true }); //If we only want to click on the hiden options
    cy.url().should('include', 'top');
  });
});

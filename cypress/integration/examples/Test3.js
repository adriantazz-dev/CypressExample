/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
  it('My FirstTest case', function () {
    //Check boxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1'); //same as click but more specific for checkboxes, then it makes sure it's checked, it's better to type 'and' instead of using several 'should's, then for properties we use have.value and in this case it should have a value of option1
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    //Radio buttons
    cy.get('[value="radio2"]').check().should('be.checked');
    //Static Dropdown
    cy.get('select').select('option2').should('have.value', 'option2');

    //Dynamic dropdowns
    cy.get('#autocomplete').type('ind');
    cy.wait(2000);
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        $el.click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India'); //Assertion

    //Visible and invisile elements
    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
  });
});

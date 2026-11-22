
describe('Módulo 03 - Carrinho de Compras', () => {

  it('RF-09 - Deve adicionar um produto ao carrinho', () => {

    Cypress.on('uncaught:exception', () => {
      return false;
    });

    cy.visit('/index.php?rt=product/product&product_id=65');

    cy.get('#product_product_id')
      .should('have.value', '65');

    cy.get('#product_quantity')
      .should('have.value', '1');

    cy.get('#product a.cart')
      .should('be.visible')
      .click();

    cy.url().should('include', 'rt=checkout/cart');

    cy.get('body').should('be.visible');

  });

  

it('RF-10 - Deve permitir alterar a quantidade do produto no carrinho', () => {

  Cypress.on('uncaught:exception', () => false);

  cy.visit('/index.php?rt=product/product&product_id=65');

  cy.get('#product a.cart').click();

  cy.get('#cart_quantity65')
    .should('have.value', '1')
    .clear()
    .type('2');

  cy.get('#cart_update').click();

  cy.get('#cart_quantity65')
    .should('have.value', '2');

});



it('RF-11 - Deve permitir remover um produto do carrinho', () => {

  Cypress.on('uncaught:exception', () => false);

  cy.visit('/index.php?rt=product/product&product_id=65');

  cy.get('#product a.cart').click();

  cy.get('#cart_quantity65').should('exist');

  cy.get('a[href*="remove=65"]')
    .should('be.visible')
    .click();

  cy.get('body').should('be.visible');

  cy.get('#cart_quantity65').should('not.exist');

});



it('RF-12 - Deve exibir mensagem quando o carrinho estiver vazio', () => {

  Cypress.on('uncaught:exception', () => false);

  cy.visit('/index.php?rt=checkout/cart');

  cy.contains('Your shopping cart is empty!')
    .should('be.visible');

  cy.get('.topcart')
    .should('contain', '0');

  cy.get('.cart_total')
    .should('contain', '$0.00');

});



});

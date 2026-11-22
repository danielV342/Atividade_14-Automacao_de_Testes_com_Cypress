describe('Navegação e Organização da Interface - Automation Test Store', () => {

  it('RF-01 - Deve acessar a página inicial', () => {
    cy.visit('/');

    cy.url().should('include', 'automationteststore.com');

    cy.get('body').should('be.visible');

    cy.get('header').should('be.visible');
  });

  

it('RF-02 - Deve selecionar a categoria Makeup', () => {
  cy.visit('/');

  // Clica no campo que abre o menu
  cy.get('#filter_keyword')
    .should('be.visible')
    .click();

  // Verifica se o menu abriu
  cy.get('#search-category')
    .should('be.visible');

  // Clica na categoria Makeup
  cy.get('#category_36')
    .should('be.visible')
    .click();

  // Verifica a categoria selecionada
  cy.get('#category_selected')
    .should('contain.text', 'Makeup');
});

  

  it('RF-03 - Deve permitir retornar à página inicial pelo logotipo', () => {
    cy.visit('/index.php?rt=product/category&path=36');

    cy.get('header').should('be.visible').click();

    cy.url().should('include', 'automationteststore.com');
  });



it('RF-04 - Deve selecionar diferentes categorias', () => {
  cy.visit('/');

  // Abre o menu de categorias
  cy.get('#filter_keyword')
    .should('be.visible')
    .click();

  cy.get('#search-category')
    .should('be.visible');

  // Seleciona Makeup
  cy.get('#category_36').click();

  cy.get('#category_selected')
    .should('contain.text', 'Makeup');

  // Abre novamente o menu usando o campo de busca
  cy.get('#filter_keyword')
    .clear()
    .type(' ');

  cy.get('#search-category')
    .should('be.visible');

  // Seleciona Skincare
  cy.get('#category_43').click();

  cy.get('#category_selected')
    .should('contain.text', 'Skincare');

});

});

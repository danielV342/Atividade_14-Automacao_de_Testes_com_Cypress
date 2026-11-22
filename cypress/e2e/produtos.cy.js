describe('Módulo 02 - Catálogo e Produtos', () => {

    it('RF-05 - Deve exibir produtos da categoria Makeup', () => {
        cy.visit('/index.php?rt=product/category&path=36');

        // Verifica se existem produtos na categoria
        cy.get('.thumbnail')
        .should('have.length.greaterThan', 0);

        // Verifica se a imagem do primeiro produto está visível
        cy.get('.thumbnail img')
        .first()
        .should('be.visible');

        // Verifica se o preço está visível
        cy.get('.thumbnail .oneprice')
        .first()
        .should('be.visible');
    });



    it('RF-06 - Deve acessar os detalhes de um produto', () => {
    cy.visit('/index.php?rt=product/category&path=36');

    // Clica na imagem do primeiro produto
    cy.get('.thumbnail > a')
        .first()
        .click();

    // Verifica se abriu a página de detalhes
    cy.url().should('include', 'rt=product/product');

    // Verifica se a página foi carregada
    cy.get('body').should('be.visible');
    });

    
it('RF-07 - Deve buscar um produto pelo nome', () => {
  cy.visit('/');

  // Digita o nome do produto
  cy.get('#filter_keyword')
    .should('be.visible')
    .type('skincare');

  // Aciona a pesquisa
  cy.get('.button-in-search').click();

  // Verifica se foi aberta uma página de produto
  cy.url().should('include', 'rt=product/product');

  // Confirma que o conteúdo do produto está visível
  cy.get('body').should('be.visible');
});


it('RF-08 - Deve apresentar informações comerciais do produto', () => {
  cy.visit('/index.php?rt=product/category&path=36');

  // Abre o primeiro produto
  cy.get('.thumbnail > a')
    .first()
    .click();

  // Verifica se o nome do produto está visível
  cy.get('.productname')
    .should('be.visible')
    .and('not.be.empty');

  // Verifica se o preço está visível
  cy.get('.productpageprice')
    .should('be.visible')
    .and('not.be.empty');
});




});

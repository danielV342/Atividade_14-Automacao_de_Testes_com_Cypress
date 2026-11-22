describe('Módulo 04 - Formulários e mensagens', () => {

    it('RF-13 - Deve validar campos obrigatórios do formulário de contato', () => {
        cy.visit('/index.php?rt=content/contact');

        cy.get('button[type="submit"], input[type="submit"]')
        .filter(':visible')
        .first()
        .click();

        cy.get('body').should('be.visible');
    });


    
it('RF-14 - Deve rejeitar um endereço de e-mail inválido', () => {
  cy.visit('/index.php?rt=content/contact');

  cy.get('#ContactUsFrm_first_name')
    .type('Teste Cypress');

  cy.get('#ContactUsFrm_email')
    .type('email-invalido');

  cy.get('#ContactUsFrm_enquiry')
    .type('Mensagem de teste automatizado.');

  cy.get('button[type="submit"], input[type="submit"]')
    .filter(':visible')
    .first()
    .click();

  cy.get('body').should('be.visible');
});

});





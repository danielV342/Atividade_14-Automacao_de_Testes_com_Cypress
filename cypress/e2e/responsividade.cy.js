describe('Módulo 05 - Responsividade', () => {

    it('RF-15 - Deve carregar a página inicial em dispositivos móveis', () => {
        cy.viewport(375, 667);

        cy.visit('/');

        cy.get('body').should('be.visible');

        cy.document().its('documentElement').should(($html) => {
        expect($html[0].scrollWidth).to.be.at.most(375);
        });

    });


        it('RF-16 - Deve carregar a página inicial em dispositivos tablet', () => {
        cy.viewport(768, 1024);

        cy.visit('/');

        cy.get('body').should('be.visible');

        cy.document().its('documentElement').should(($html) => {
            expect($html[0].scrollWidth).to.be.at.most(768);
        });

    });


});

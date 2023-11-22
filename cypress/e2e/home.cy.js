describe('Teste da pagina inicial', () => {
    it ('testando que a pagina funciona no desktop', () => {
        cy.visit('http://localhost:3000');

        cy.contains('HOME').should('exist');

        cy.get('.menu-mobile').should('not.exist');

    });

    it ('testando que quando eu acesso usando o celular nao aparece o HOME', () => {
        cy.visit('http://localhost:3000');

        cy.viewport('iphone-6');

        cy.contains('HOME').should('not.exist');

        cy.get('.button').should('exist');
    
        cy.get('.input').should('exist');
        
        cy.get('.logo').should('exist');

        cy.get('header.container').should('have.css', 'background-color', 'rgb(102, 102, 102)');

        cy.get('.menu a').should('have.css', 'color', 'rgb(255, 255, 255)');
    });

   
});
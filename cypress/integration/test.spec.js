describe('Test Color', function() {

    it('Cambio de color', function() {
      cy.visit('https://miso-4208-labs-vrt-colorpallete.glitch.me/palette.html');
      cy.screenshot();
      cy.get('#actions').contains('Generar nueva paleta').click();
      cy.screenshot();
    });

});
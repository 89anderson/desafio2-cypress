const el = require('./elements').ELEMENTS;

class MyAccount {
     validarLoginRealizadoComSucesso(nomeDoUsuario){
        cy.get(el.account).should('have.text', nomeDoUsuario);
     }
}

export default new MyAccount();
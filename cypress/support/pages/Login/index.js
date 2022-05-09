const el = require('./elements').ELEMENTS;



class Login {
    preencherLogin(mail, password) {
        cy.get(el.email).type(mail)
        cy.get(el.password).type(password)
        cy.get(el.sign_in).click()
    }

    preencherEmailDeCriacaoDeConta(email) {
        cy.get('#email_create').type(email)

    }

    clickarBotaoCadastrar() {
        cy.get(el.create_account).click()
    }

}

export default new Login();
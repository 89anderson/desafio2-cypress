

const el = require('./elements').ELEMENTS;



class NewAccount {
    escolheGeneroMasculino() {
        cy.get(el.title_element_male).click();
    }

    escolheGeneroFeminino() {
        cy.get(el.title_element_female).click()
    }

    preencheNome(nome) {
        cy.get(el.first_name).type(nome)
    }

    preencheSobreNome(sobrenome) {
        cy.get(el.last_name).type(sobrenome)
    }

    preenchePassword(password) {
        cy.get(el.password).type(password)
    }

    preencherDataNascimento(dia, mes, ano) {
        cy.get(el.days_tab).select(dia)
        cy.get(el.months_tab).select(mes)
        cy.get(el.years_tab).select(ano)
    }

    assinarNewsletter() {
        cy.get(el.news_letter_check_box).click()
    }

    assinarSpecialOffer() {
        cy.get(el.special_offer_check_box).click()
    }

    conferirAddressName(nome) {
        cy.get(el.address_first_name).should('have.value', nome)
    }

    conferirAddressLastName(sobrenome) {
        cy.get(el.address_last_name).should('have.value', sobrenome)
    }

    preencherEndereco(endereco) {
        cy.get(el.main_address).type(endereco)
    }

    preencherCidade(cidade) {
        cy.get(el.city).type(cidade)
    }

    escolherEstado(estado) {
        cy.get(el.state).select(estado)
    }

    preencherCep(cep) {
        cy.get(el.zip_code).type(cep)
    }

    escolherPais(pais) {
        cy.get(el.country).select(pais)
    }

    preencherMobilePhone(celular) {
        cy.get(el.mobile_phone).type(celular)
    }

    preecherEmailSecundario(email) {
        cy.get(el.alias_mail).type(email)
    }

    clickRegister() {
        cy.get(el.register_button).click()
    }

}

export default new NewAccount();
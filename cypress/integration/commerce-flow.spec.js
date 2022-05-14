/// <reference types="Cypress" />

import {
    homePage,
    categoryPage,
    loginPage,
    myAccountPage,
    createAccountPage
} from '../support/pages'

import userData from '../fixtures/userData.json';


describe('Fluxos do ecommerce', () => {

    it('Validando cadastro de usuário', () => {
        homePage.acessarLogin()
        loginPage.preencherEmailDeCriacaoDeConta(userData.userEmail.emailCadastrado)
        loginPage.clickarBotaoCadastrar()
        createAccountPage.escolheGeneroMasculino()
        createAccountPage.preencheNome(userData.userFirstName)
        createAccountPage.preencheSobreNome(userData.userLastName)
        createAccountPage.preenchePassword(userData.userPassword.passwordCadastrado)
        createAccountPage.preencherDataNascimento(userData.birthDate.validDate.day, userData.birthDate.validDate.month, userData.birthDate.validDate.year)
        createAccountPage.assinarNewsletter()
        createAccountPage.assinarSpecialOffer()
        createAccountPage.conferirAddressName(userData.userFirstName)
        createAccountPage.conferirAddressLastName(userData.userLastName)
        createAccountPage.preencherEndereco(userData.userAddress.endereco)
        createAccountPage.preencherCidade(userData.userAddress.cidade)
        createAccountPage.escolherEstado(userData.userAddress.estado)
        createAccountPage.preencherCep(userData.userAddress.cep)
        createAccountPage.escolherPais(userData.userAddress.pais)
        createAccountPage.preencherMobilePhone(userData.userAddress.celular)
        createAccountPage.preecherEmailSecundario(userData.userEmail.emailSecundario)
        createAccountPage.clickRegister()
        myAccountPage.validarLoginRealizadoComSucesso(`${userData.userFirstName} ${userData.userLastName}`)
    
    });

    categoryPage.CATEGORIES.forEach(category => {
        it.skip(`acessar categoria ${category}`, () => {
            homePage.acessarCategoria(category);
            categoryPage.validarAcessoACategoria(category)
        });
    });

    
    it.skip('realizar login', () => {
        homePage.acessarLogin();
        loginPage.preencherLogin();
        myAccountPage.validarLoginRealizadoComSucesso()
    });

});
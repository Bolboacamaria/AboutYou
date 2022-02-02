/// <reference types="cypress" />
import selectors from '../../support/selectors.js';


describe('add woman clothing item to basket', () => {
    before(() => {
        cy.visit('https://m.aboutyou.de')
        cy.wait(10000)
        cy.get(selectors.cookieAcceptButtonOk).click()
         cy.get(selectors.languageSwitch).click()
         cy.get(selectors.languageSwitchEnglish).click()
    })

    it('go to the woman clothing section and load it', () => {
        cy.get(selectors.topWomanMenu).click()
        cy.get(selectors.headerNavClothing).click()
        cy.get(selectors.leftSideNavBar).contains("New")
    })

    it('add first clothing item to basket', () => {
        cy.get(selectors.productImage).first().click()
        cy.get(selectors.openSizeFlyout).click()
        cy.get(selectors.sizefromList).first().click()
        cy.get(selectors.addToBasketButton).click()
    })

    it('check basket content', () => {
        cy.get(selectors.basketIcon).click()
        cy.wait(5000)
        cy.get(selectors.basketItem).should('be.visible')
    })

    it('remove item from basket', () => {
        //TODO
    })

})

describe('go to basket and finalize order', () => {
    before(() => {
        cy.visit('https://m.aboutyou.de')
        cy.wait(10000)
        cy.get(selectors.cookieAcceptButtonOk).click()
         cy.get(selectors.languageSwitch).click()
         cy.get(selectors.languageSwitchEnglish).click()
    })

    it('add first man clothing item to basket', () => {
        //todo
    })

    it('go to basket and finalize order', () => {
        //todo
    })

})

describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD')
        cy.get('.auth__button').click({ force: true });
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true });
        cy.get('[href="/shop"]').click({ force: true });
        cy.get(':nth-child(3) > .shop__button').click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type(1225);
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(125);
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Pirozhkov Nikita');
        cy.get('.pay-btn').click({ force: true });
        cy.wait(2000);
        cy.get('#cardnumber').type(56456);
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.success__image').should('be.visible');
        
    })
})   
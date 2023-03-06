// describe('Settings Test', () => {
//   beforeEach(() => {
//     cy.viewport('macbook-15');
//   });
//   before(() => {
//     cy.fixture('login.json').then((fixture) => {
//       cy.login(fixture.email, fixture.password);
//     });
//   });

//   it('Should go to survey page', () => {
//     cy.url().should('include', 'dashboard');
//     cy.getBySel('redirect-survey-page').click();
//     cy.url().should('include', 'survey');
//   });

//   it('Should check all components selectOne ', () => {
//     cy.getBySel('select-one').check();
//   });

//   it('Should check all components slider ', () => {
//     cy.getBySel('slider-survey').eq(0).type('5');
//     cy.getBySel('slider-survey').eq(1).type('5');
//     cy.getBySel('slider-survey').eq(2).type('5');
//   });

//   it('Should check all components textArea ', () => {
//     cy.getBySel('text-area').eq(0).type('lorem ipsum');
//     cy.getBySel('text-area').eq(1).type('lorem ipsum');
//     cy.getBySel('text-area').eq(2).type('lorem ipsum');
//     cy.getBySel('text-area').eq(3).type('lorem ipsum');
//     cy.getBySel('text-area').eq(4).type('lorem ipsum');
//   });

//   it('Should check all components rank ', () => {
//     cy.getBySel('rank').check();
//   });

//   it('Should check all components dragDrop ', () => {
//     cy.getBySel('drag-drop').eq(0).trigger('mousemove').trigger('mousedown', {
//       which: 1,
//     });
//     cy.getBySel('drag-drop').eq(2).trigger('mousemove').trigger('mouseup');
//   });

//   // it('Should save survey', () => {
//   //   //TODO: esperando cambios del back para poder confirmar
//   //   // cy.getBySel('save-survey').click();
//   //   // cy.getBySel('survey-modal-banner').should('be.visible');
//   // });

//   // it('Should return to dashboard', () => {
//   //   cy.getBySel('survey-modal-close').click();
//   //   cy.url().should('include', 'dashboard');
//   // });
// });

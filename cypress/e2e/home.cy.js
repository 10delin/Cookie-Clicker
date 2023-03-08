describe("Home Test", () => {
  before(() => {
    cy.visit("/");
  });

  it("should change language properly", () => {
    cy.getBySel("es-lang").click();
    cy.getBySel("en-lang").click();
  });

  it("should work home page properly", () => {
    cy.visit("/");
    cy.getBySel("input-home").type("test");
    cy.getBySel("button-home").click();
    cy.url().should("include", "/game");
  });

  it("should work game page properly", () => {
    cy.visit("/game");
    cy.getBySel("input-home").type("test");
    cy.getBySel("button-home").click();
    for (let i = 0; i < 50; i++) {
      cy.getBySel("merge-button").click();
    }
    cy.getBySel("auto-button").click();
    cy.getBySel("link-home").click();
    cy.url().should("include", "/");
  });
});

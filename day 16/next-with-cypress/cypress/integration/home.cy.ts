/** @format */

/// <refrence types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("testing home", () => {
    const fruits = ["banana", "apple", "watermelon"];

    cy.get(".fruits>div").each((item, index) => {
      cy.wrap(item).should("contain.text", fruits[index]);
    });
  });
});

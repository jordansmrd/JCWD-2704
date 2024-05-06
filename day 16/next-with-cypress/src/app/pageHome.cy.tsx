/** @format */

import Home, { fruits } from "./page";

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(<Home />);
    cy.get(".fruits>div").each((item, index) => {
      cy.wrap(item).should("contain.text", fruits[index]);
    });
  });
});

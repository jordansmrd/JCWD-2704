/** @format */

import AboutPage from "./page";

describe("<AboutPage/>", () => {
  it("should render and display expected content", () => {
    cy.mount(<AboutPage />);

    cy.get("h1").contains("About Page");

    cy.get('a[href="/"]').should("be.visible");
  });
});

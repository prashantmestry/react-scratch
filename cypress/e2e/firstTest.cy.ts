describe("cypress dempo", () => {
  it("check default element", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="list-title"]')
      .should("exist")
      .should("have.text", "Page list to get help from");
  });

});

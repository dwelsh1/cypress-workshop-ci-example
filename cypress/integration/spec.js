/// <reference types="cypress" />

describe('Smoke tests', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('h1', 'cypress-workshop-ci-example').should('be.visible')
  })

  it('navigates to README', () => {
    cy.visit('/')
    cy.contains('a', 'README99').click()
    cy.location('pathname').should('equal', '/README/')
  })

  afterEach(() => {
    cy.wait(1000)
  })
})

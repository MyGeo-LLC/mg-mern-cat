#!/bin/bash

# Define variables
PROJECT_ROOT=$(pwd)

# Install Cypress
echo "Installing Cypress..."
npm install cypress --save-dev

# Initialize Cypress to create default folder structure
echo "Initializing Cypress..."
npx cypress open

# Wait for Cypress to initialize
echo "Waiting for Cypress initialization..."
sleep 10

# Create an example test file
echo "Creating example test file..."
cat <<EOL > ${PROJECT_ROOT}/cypress/integration/app.spec.js
describe('MERN Application E2E Tests', () => {
  it('Should load the home page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to the MERN App');
  });

  it('Should register a new user', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Registration successful');
  });

  it('Should log in the user', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome, Test User');
  });

  it('Should upgrade to premium', () => {
    cy.visit('/');
    cy.get('button').contains('Upgrade to Premium').click();

    // Mock payment gateway response
    cy.intercept('POST', '/api/payment/create-checkout-session', {
      statusCode: 200,
      body: {
        id: 'mock-session-id'
      }
    });

    cy.intercept('POST', '/api/payment/webhook', {
      statusCode: 200,
      body: {
        received: true
      }
    });

    cy.contains('Thank you for upgrading to premium!');
  });
});
EOL

# Create a Cypress configuration file
echo "Configuring Cypress..."
cat <<EOL > ${PROJECT_ROOT}/cypress.json
{
  "baseUrl": "http://localhost:3000",
  "video": false,
  "viewportWidth": 1280,
  "viewportHeight": 720
}
EOL

echo "Cypress setup completed successfully!"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// before( () => {
//     const reset = '/reset'
//     cy.request('GET', reset)  
// })

import 'cypress-file-upload';
// Custom AXE-CORE Logging
import 'mocha-param';
Cypress.Commands.add("customCheckAlly", () => {
    const severityIndicatorIcons = {
      minor: "⚪",
      moderate: "🌕",
      serious: "⭕",
      critical: "⛔",
    };
  
    function callback(violations) {
      violations.forEach((violation) => {
        const nodes = Cypress.$(
          violation.nodes.map((node) => node.target).join(",")
        );
  
        Cypress.log({
          name: `${severityIndicatorIcons[violation.impact]} AllY`,
          consoleProps: () => violation,
          $el: nodes,
          message: `[${violation.help}](${violation.helpUrl})`,
        });
  
        violation.nodes.forEach(({ target }) => {
          Cypress.log({
            name: "ℹ▶",
            consoleProps: () => violation,
            $el: Cypress.$(target.join(",")),
            message: target,
          });
        });
      });
    }
  
    cy.checkA11y(null, null, callback);
  });
  
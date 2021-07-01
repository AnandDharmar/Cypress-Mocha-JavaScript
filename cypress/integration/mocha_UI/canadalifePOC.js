var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");
describe('Account creation', function () {

    it('Register an account', function () {
        cy.visit('https://class.canadalife.co.uk/');
        cy.get('#username').type("aggvikas11");
        cy.get('#password').type("temppassword1")
        cy.get('.col-md-8 > .btn').click()
        cy.get(':nth-child(1) > .button > .h1').click()
        cy.get('[title="Online group insurance quotations"] > h3 > strong').click()
        cy.get('#ctl00_Main_NewQuoteButton').click()
        cy.get('#ctl00_Main_txtYears').type("2")
        cy.get('#ctl00_Main_CompanyNumberTextBox').type("1234566")
        cy.get('#ctl00_Main_cmbIndustryType').select("IT")
        cy.get('[type="radio"]').eq(4).click({
            force: true
        })
        cy.get('#ctl00_FooterContinueButton').click()
        cy.get('#ctl00_Main_EmployerNameTextbox').type("2")
        cy.get('#ctl00_Main_PostCodeTextbox').type("Sl1 9AW")
        cy.get('#ctl00_Main_FindAddressButton').click()
        cy.get('#ctl00_Main_SaveAddressButton').click()
        cy.get('#ctl00_Main_UKEmployeesTextbox').type("2")
        cy.get('#ctl00_Main_eligibleEmployeesTextbox').type("2")
        cy.get('#ctl00_Main_EffectiveDateTextbox').click()
        cy.get('tbody > :nth-child(5) > :nth-child(5)').click();
        cy.get('#ctl00_Main_chkReadGIP').click();
        cy.get('#ctl00_Main_chkReadGCI').click();
        cy.get('#ctl00_Main_chkReadGLA').click();
        cy.get('#ctl00_FooterContinueButton').click();
        cy.get('#ctl00_Main_drpEligibilityType').select("All - pensionable and non-pensionable employees");
        cy.get('#ctl00_Main_drpBenefitDifferent').select("Yes")
        cy.get('#ctl00_Main_drpSalaryDefinitionDifference').select("Yes")
        cy.get('#ctl00_Main_drpBenefitDifferent').select("Yes")
        cy.get('#ctl00_FooterContinueButton').click()
        cy.get('#ctl00_Main_UploadRadioButton').click()
        cy.get('#ctl00_Main_FileUploadButton').click()
        cy.get('#ctl00_Main_FileUploadButton').attachFile('sample.xlsx');
        cy.get('#ctl00_Main_LoadButton').click();
    })
})
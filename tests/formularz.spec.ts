import { test, expect } from '@playwright/test'

test('Zadanie 6', async ({ page }) => {
	//Open page
	await page.goto('https://demoqa.com/automation-practice-form')

	// Scroll to the fields
	await page.locator('#dateOfBirthInput').scrollIntoViewIfNeeded()

	// Fill in the fields
	await page.locator('#firstName').fill('Jan')
	await page.locator('#lastName').fill('Kowalski')
	await page.locator('#userEmail').fill('jk@email.pl')
	await page.locator('#gender-radio-1').click({ force: true })
	await page.locator('#userNumber').fill('0700888007')

	await page.locator('#dateOfBirthInput').fill('01.01.1990')
	await page.locator('#dateOfBirthInput').press('Enter')

	// Subjects
	await page.locator('.subjects-auto-complete__value-container').click()
	await page.locator('#subjectsInput').fill('Math')
	await page.getByText('Maths', { exact: true }).click()
	await page.locator('#subjectsInput').fill('C')
	await page.getByText('Computer Science', { exact: true }).click()

	await page.locator('#hobbies-checkbox-3').click({ force: true })
	await page.locator('#currentAddress').fill('TEST')

	// State and City
	await page.getByText('Select State').click()
	await page.getByText('Haryana').click()
	await page.getByText('Select City').click()
	await page.getByText('Panipat').click()

	// Finish
	await page.locator('#submit').click()

	//  Assertion
	await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form')
})

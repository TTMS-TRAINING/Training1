import { test, expect} from '@playwright/test';

test('Filling out the form', async ({ page }) => {
	
	//Open page
	await page.goto('https://demoqa.com/automation-practice-form/');

	//Name input
	await page.locator('#firstName').fill('Q')
	//Surname input
	await page.locator('#lastName').fill('W')
	//Email
	await page.locator('#userEmail').fill('QW@mail.pl')
	//Gender
	await page.locator('#gender-radio-1').click({ force: true })
	//Phone
	await page.locator('#userNumber').fill('1234567890')
	//Birth Date
	await page.locator('#dateOfBirthInput').fill('19.September.2024')

	//Subjects
	await page.locator('.subjects-auto-complete__value-container').click()
	//Select element
	await page.locator('#subjectsInput').fill('Computer')
	await page.getByText('Computer Science', { exact: true }).click()
	//Remove element
	await page.locator('.subjects-auto-complete__value-container').click()
	await page.locator('.subjects-auto-complete__indicators.css-1wy0on6').click();
	
	//Select element
	await page.locator('#subjectsInput').fill('E')
	await page.getByText('Economics', { exact: true }).click()

	//Select element
	await page.locator('#subjectsInput').fill('Sci')
	await page.getByText(' Computer Science', { exact: true }).click()

	await expect(page.locator('//*[@id="subjectsContainer"]/div/div[1]/div[1]/div[1]')).toHaveText('Economics');
    await expect(page.locator('//*[@id="subjectsContainer"]/div/div[1]/div[2]/div[1]')).toHaveText('Computer Science');
	//Hobbies
	await page.locator('#hobbies-checkbox-2').click({ force: true })
	
	//Picture
	const fileChooserPromise = page.waitForEvent('filechooser')
	await page.locator('#uploadPicture').click()
	//await page.locator('#uploadPicture').setInputFiles('Test.txt')
	await page.locator('input[name="Test.txt"]').setInputFiles('./deskop/Test.txt');
	
	//await expect(page.getByText('Test.txt')).toBeVisible();

	//Adress
	await page.locator('#currentAddress').fill('ASDF')

	// State and City
	await page.getByText('Select State').click()
	await page.getByText('Rajasthan').click()
	await page.getByText('Select City').click()
	await page.getByText('Jaiselmer').click()

	//Scroll down
	await page.locator('#submit').scrollIntoViewIfNeeded()

	// Finish
	await page.locator('#submit').click()

	// Assertion
	await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form')

})
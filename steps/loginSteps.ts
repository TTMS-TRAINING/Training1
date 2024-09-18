import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { AccountPage } from "../pages/AccountPage";
import { AccountTestData } from "../testData/AccountTestData";
import { Page, Browser, chromium } from "playwright";

let page: Page;
let accountPage: AccountPage;
let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Uruchom przeglądarkę przed każdym testem
  page = await browser.newPage();
  accountPage = new AccountPage(page);
});

//After(async function () {
  //await browser.close(); // Zamknij przeglądarkę po każdym teście
//});

Given("I am on the account login page", async function () {
  await accountPage.navigateTo("https://fakestore.testelka.pl/moje-konto/");
});

When("I login with {string}", async function (accountType: string) {
  let accountData;

  switch (accountType) {
    case "CorrectEmailLogin":
      accountData = AccountTestData.CorrectEmailLogin;
      break;
    case "WrongEmailLogin":
      accountData = AccountTestData.WrongEmailLogin;
      break;
    case "NotRegisteredEmail":
      accountData = AccountTestData.NotRegisteredEmail;
      break;
    case "CorrectLogin":
      accountData = AccountTestData.CorrectLogin;
      break;
    case "WrongLogin":
      accountData = AccountTestData.WrongLogin;
      break;
    case "NotRegistered":
      accountData = AccountTestData.NotRegistered;
      break;
    default:
      throw new Error(`Account type ${accountType} is not recognized`);
  }
  await accountPage.login(accountData);
});

Then(
  "I should see message containing: {string}",
  async function (expectedResult: string) {
    await expect(page.getByText(`${expectedResult}`)).toBeVisible();
  }
);

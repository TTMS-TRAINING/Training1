import { test, expect } from "@playwright/test";
import TokenService from "./TokenService"; // Import the token service class

test("Create a booking", async ({ request, baseURL }) => {
  const bookingData = {
    firstname: "Akash",
    lastname: "Balhara",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  const response = await request.post(`${baseURL}booking`, {
    data: bookingData,
  });

  const bookingDetails = await response.json();

  console.log(bookingDetails);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  expect(bookingDetails.booking.firstname).toBe(bookingData.firstname);
});

test("Create and delete a booking", async ({ request, baseURL }) => {
  const tokenService = new TokenService(request, baseURL); // Instantiate TokenService
  const token = await tokenService.getToken(); // Get token

  const bookingData = {
    firstname: "Akash",
    lastname: "Delete",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  const bookingResponse = await request.post(`${baseURL}booking`, {
    data: bookingData,
  });

  const { bookingid } = await bookingResponse.json();

  const deleteResponse = await request.delete(`${baseURL}booking/${bookingid}`, {
    headers: { Cookie: `token=${token}` },
  });

  expect(deleteResponse.status()).toBe(201);
});

test("Create token", async ({ request, baseURL }) => {
  const tokenService = new TokenService(request, baseURL);
  const token = await tokenService.getToken(); // Get token

  console.log({ token });
  expect(token).toBeTruthy();
});

test("Get booking by ID", async ({ request, baseURL }) => {
  const bookingId = 100;
  const response = await request.get(`${baseURL}booking/${bookingId}`);

  const bookingDetails = await response.json();

  console.log(bookingDetails.firstname);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test("Get all booking IDs", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}booking`);

  const bookingIds = (await response.json()).map((obj) => obj.bookingid);
  console.log(bookingIds);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test("Update a booking", async ({ request, baseURL }) => {
  const tokenService = new TokenService(request, baseURL);
  const token = await tokenService.getToken(); // Get token

  const bookingData = {
    firstname: "Akash",
    lastname: "Balhara",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  const bookingResponse = await request.post(`${baseURL}booking`, {
    data: bookingData,
  });

  const { bookingid } = await bookingResponse.json();

  const updatedBookingData = {
    firstname: "Test",
    lastname: "Balhara",
    totalprice: 9166,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Lunch",
  };

  const updateResponse = await request.put(`${baseURL}booking/${bookingid}`, {
    data: updatedBookingData,
    headers: { Cookie: `token=${token}` },
  });

  const updatedBooking = await updateResponse.json();

  expect(bookingData.firstname).not.toBe(updatedBooking.firstname);
  expect(updateResponse.status()).toBe(200);
});

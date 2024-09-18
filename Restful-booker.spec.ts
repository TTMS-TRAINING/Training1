import { test, expect } from "@playwright/test";

test(" Create a booking ", async ({ request, baseURL }) => {
  // creating data required to make a booking
  const bookingData = {
    firstname: "Tomek",
    lastname: "Test",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  const response = await request.post(`${baseURL}booking/`, {
    data: bookingData,
  });

  // saving api response as json in object
  const bookingDetails = await response.json();
  console.log(bookingDetails);
  // extracting first name as an example
  console.log(bookingDetails.booking.firstname);

  // assert that the api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test(" Script to create and then delete a booking ", async ({
  request,
  baseURL,
}) => {
  // getting token number for authoization
  const response = await request.post(`${baseURL}auth`, {
    data: { username: "admin", password: "password123" },
  });

  // saving the token
  const BookingToken = await response.json();
  const tokenNumber = String(BookingToken.token);

  // creating a booking
  const bookingData = {
    firstname: "Tomek",
    lastname: "Delete",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  // sending post request to make a booking with the above data
  const response1 = await request.post(`${baseURL}booking/`, {
    data: bookingData,
  });

  // saving api response as json in object
  const bookingDetails = await response1.json();
  const BookingID = bookingDetails.bookingid;

  // saving the cookie value for the authorization
  const cookieVal = "token=" + tokenNumber;

  // deleting the booking
  const response2 = await request.delete(`${baseURL}booking/` + BookingID, {
    headers: { Cookie: cookieVal },
  });

  // assert that the correct status code is getting received
  expect(response2.status()).toBe(201);
});

test(" Create-Token ", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}auth`, {
    data: {
      username: "admin",
      password: "password123",
    },
  });

  // getting the api response
  console.log(await response.json());

  // assert that the api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test(" Get Booking id ", async ({ request, baseURL }) => {
  // setting a random id number
  const id = 100;
  const response = await request.get(`${baseURL}booking/` + id, {});

  // saving api response as json in object
  const bookingDetails = await response.json();
  // extracting first name as an example
  console.log(bookingDetails.firstname);

  // assert that the api is working as expected
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test(" Get All Booking id ", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}booking`, {});

  // storing api response and the booking ids
  const apiResponse = await response.json();
  const bookingId = apiResponse.map((obj) => obj["bookingid"]);
});

test(" Update a booking ", async ({ request, baseURL }) => {
  // getting token number for authoization
  const response = await request.post(`${baseURL}auth`, {
    data: { username: "admin", password: "password123" },
  });

  // saving the token
  const BookingToken = await response.json();
  const tokenNumber = String(BookingToken.token);

  // creating a booking
  const bookingData = {
    firstname: "Tomek",
    lastname: "Test",
    totalprice: 6199,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Breakfast",
  };

  // sending post request to make a booking with the above data
  const response1 = await request.post(`${baseURL}booking/`, {
    data: bookingData,
  });

  // saving api response as json in object
  const bookingDetails = await response1.json();
  const BookingID = bookingDetails.bookingid;

  // creating data for updating the booking
  const updatedBookingData = {
    firstname: "Test",
    lastname: "Test",
    totalprice: 9166,
    depositpaid: true,
    bookingdates: {
      checkin: "2023-04-25",
      checkout: "2023-05-30",
    },
    additionalneeds: "Lunch",
  };

  // saving the cookie value for the authorization
  const cookieVal = "token=" + tokenNumber;

  // udpating the booking
  const response2 = await request.put(`${baseURL}booking/` + BookingID, {
    data: updatedBookingData,
    headers: { Cookie: cookieVal },
  });
  const updatedBookingDetails = await response2.json();

  // assert that the first name for the booking has been changed
  expect(bookingDetails.booking.firstname).not.toBe(
    updatedBookingDetails.firstname
  );
});

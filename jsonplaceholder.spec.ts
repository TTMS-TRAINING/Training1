import { test, expect } from '@playwright/test';

  test('GET Users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
  
    const users = await response.json();
    expect(users.length).toBeGreaterThan(0);
  });


  test('POST Create User', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {

      data: {
        name: "Tomek",
        username: "Tomek",
        email: "test@test.pl"
      }
    })

    expect(response.status()).toBe(201);
  });
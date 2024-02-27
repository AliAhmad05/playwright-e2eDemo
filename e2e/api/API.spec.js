import { test, expect } from '@playwright/test';
import requestData from '../Fixtures/apiUserData';

test.describe.serial('API testing', () => {
  let userId,authToken;
  test(`TC 07 Create user using API and verify`, async ({ request }) => {
    const response = await request.post(`/Account/v1/User`, { data: requestData });

    console.log(await response.json());
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(201);
    const responseBody = await response.json();
    await expect(responseBody.username).toBe(requestData.userName);
    userId= responseBody.userID;
    console.log('userID:', userId);
    
  });

  test(`TC 08 Request the same API and check if user already exist`, async ({ request }) => {
    const response = await request.post(`/Account/v1/User`, { data: requestData });

    console.log(await response.json());
    await expect(response.ok()).not.toBeTruthy();
    await expect(response.status()).toBe(406);
    const responseBody = await response.json();
    await expect(responseBody.message).toBe('User exists!');
  });

  test('TC 09 Add a list of books using API', async ({ request }) => {
    const response = await request.post(`/Account/v1/GenerateToken`, { data: requestData });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.result).toBe('User authorized successfully.');

    const response2 = await request.post(`/Account/v1/Authorized`, { data: requestData });
    console.log(await response2.json());
    expect(response2.ok()).toBeTruthy();
    expect(response2.status()).toBe(200);
    const responseBody2 = await response2.json();
    expect(responseBody2).toBe(true);

    authToken = responseBody.token;

    console.log('Generated Token:', authToken);

    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };

    const body = {
      "userId": `${userId}`,
      "collectionOfIsbns": [
        {
          "isbn": "9781449331818"
        }
      ]
    };

    const anotherResponse = await request.post('/BookStore/v1/Books', {
      //method: 'POST',
      headers: headers,
      data: JSON.stringify(body)
    });
    expect(anotherResponse.ok()).toBeTruthy();
  });

  test('TC 10 Delete book using API', async ({ request }) => {
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };

    const body = {
      "isbn": "9781449331818",
      "userId": `${userId}`,
    };

    const anotherResponse = await request.delete('/BookStore/v1/Book', {
      //method: 'POST',
      headers: headers,
      data: JSON.stringify(body)
    });
    expect(anotherResponse.ok()).toBeTruthy();
  });
});

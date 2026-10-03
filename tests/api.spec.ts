import { test, expect } from '@playwright/test';

test('GET Users API', async ({ request }) => {

  const response = await request.get(
    'https://reqres.in/api/users?page=2'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body);

  expect(body.page).toBe(2);

});

test('Create User', async ({ request }) => {

  const response = await request.post(
    'https://reqres.in/api/users',
    {
      data: {
        name: 'Rahul',
        job: 'QA Engineer'
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body);

  expect(body.name).toBe('Rahul');

});
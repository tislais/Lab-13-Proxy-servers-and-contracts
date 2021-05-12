import app from '../lib/app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('API Routes', () => {

  // If a GET request is made to /api/cats, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data?
  it('GET /api/cats', async () => {
    // act - make the request
    const response = await request.get('/api/cats');

    // was response OK (200)?
    expect(response.status).toBe(200);

    // did it return the data we expected?
    expect(response.body).toEqual(expectedCats);

  });

  // If a GET request is made to /api/cats/:id, does:
  // 1) the server respond with status of 200
  // 2) the body match the expected API data for the cat with that id?
  test('GET /api/cats/:id', async () => {
    const response = await request.get('/api/cats/2');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedCats[1]);
  });
});
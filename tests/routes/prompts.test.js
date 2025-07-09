const request = require('supertest');
const app = require('../../src/server'); // adjust if your app export differs

describe('DELETE /api/prompts/:id', () => {
  it('should return 404 for non-existent ID', async () => {
    const res = await request(app).delete('/api/prompts/999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Prompt not found');
  });

  it('should delete an existing prompt and return it', async () => {
    // First create a prompt to delete
    const post = await request(app)
      .post('/api/prompts')
      .send({ text: 'To be deleted' });
    const id = post.body.id;
    const del = await request(app).delete(`/api/prompts/${id}`);
    expect(del.status).toBe(200);
    expect(del.body).toHaveProperty('id', id);
  });
});
describe('Authentication guard on /api/prompts', () => {
  it('rejects unauthenticated GET requests', async () => {
    const res = await request(app).get('/api/prompts');
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Authentication required');
  });

  it('rejects unauthenticated POST requests', async () => {
    const res = await request(app)
      .post('/api/prompts')
      .send({ text: 'Test' });
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Authentication required');
  });

  it('rejects unauthenticated DELETE requests', async () => {
    const res = await request(app).delete('/api/prompts/1');
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Authentication required');
  });
});


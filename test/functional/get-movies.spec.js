'use strict'

const Factory = use('Factory');
const { test, trait } = use('Test/Suite')('Get Movies');

trait('Test/ApiClient');

test('can get all movies', async ({ assert, client }) => {
    const movies = await Factory.model('App/Models/Movie').createMany(10);
    const response = await client.get('/api/movies').end();

    response.assertStatus(200);
});


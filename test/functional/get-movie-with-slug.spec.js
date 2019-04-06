'use strict'

const Factory = use('Factory');
const { test, trait } = use('Test/Suite')('Get Movie With Slug');

trait('Test/ApiClient');

test('can get one movie with slug', async ({ assert, client }) => {
    const numberOfMoviesToCreate = (Math.random() * (20 - 10 + 1)) << 0;

    const movies = await Factory.model('App/Models/Movie').createMany(numberOfMoviesToCreate);

    const randomNumber = Math.floor(Math.random() * (numberOfMoviesToCreate - 1));
    const randomMovie = movies[randomNumber];

    const response = await client.get(`/api/movie/${randomMovie.movie_slug}`).end();

    response.assertStatus(200);
    response.assertJSONSubset(
        { movie_name: randomMovie.movie_name, movie_genre: randomMovie.movie_genre }
        );
});

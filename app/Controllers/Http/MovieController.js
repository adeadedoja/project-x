'use strict'
const Movie = use('App/Models/Movie');

class MovieController {
    async all({ response, request }) {
        const movies = await Movie.all();

        return response.ok(movies);
    }

    async getMovieWithSlug({ response, params }) {
        const movie = await Movie.findByOrFail('movie_slug', params.slug);

        return response.ok(movie);
    }
};

module.exports = MovieController;

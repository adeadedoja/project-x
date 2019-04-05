'use strict'
const Movie = use('App/Models/Movie');

class MovieController {
    async all({ response, request }) {
        const movies = await Movie.all()

        return response.ok(movies);
    }
}

module.exports = MovieController

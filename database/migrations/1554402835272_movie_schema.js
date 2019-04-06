'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.string('movie_name').notNullable();
      table.string('movie_slug');
      table.string('movie_poster');
      table.string('movie_rating');
      table.string('movie_date_released');
      table.string('movie_is_coming_soon');
      table.string('movie_genre');
      table.increments();
      table.timestamps();
    });
  }

  down () {
    this.drop('movies');
  }
}

module.exports = MovieSchema;

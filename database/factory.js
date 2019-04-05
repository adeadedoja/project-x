'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Movie', async (faker) => {
    return {
        movie_name: faker.sentence({ words: 2 }),
        movie_poster: faker.avatar(),
        movie_rating: faker.floating({ min: 1, max: 5, fixed: 1 }),
        movie_date_released: faker.date(),
        movie_is_coming_soon: faker.bool(),
        movie_genre: faker.sentence(),
    }
})
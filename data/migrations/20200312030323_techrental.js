
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(users){
        users.increments();
        users.string('first_name').notNullable();
        users.string('last_name').notNullable();
        users.string('email').unique().notNullable();
        users.string('password').notNullable();
        users.string('city').notNullable();
        users.string('state').notNullable();
        users.string('zip').notNullable();
        users.timestamps(true, true);
    })
    .createTable('conditions', function(conditions){
        conditions.increments();
        conditions.string('condition').notNullable().unique();
    })
    .createTable('categories', function(category){
        category.increments();
        category.string('category').notNullable().unique();
    })
    .createTable('tech', function(tech){
        tech.increments();
        tech.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
        tech.timestamps(true, true);
        tech.string('title', 255).notNullable();
        tech.string('make', 255).notNullable().defaultTo('unknown');
        tech.string('model', 255).notNullable().defaultTo('unknown');
        tech.string('description', 255).notNullable();
        tech.integer('category_id'.references('id').inTable('categories').unsigned().notNullable();
        tech.integer('condition_id').unsigned().notNullable().references('id').inTable('conditions').onDelete('CASCADE').onUpdate('CASCADE');
        tech.integer('daily_cost').unsigned().notNullable();
        tech.string('img_url', 255).defaultTo('https://via.placeholder.com/150');
        tech.boolean('available').notNullable().defaultTo(true);
   })
    .createTable('rentals', function(rentals){
        rentals.increments();
        rentals.date('start_date').notNullable();
        rentals.date('end_date').notNullable();
        rentals.integer('total_cost').unsigned().notNullable();
        rentals.integer('tech_id').unsigned().notNullable().references('id').inTable('tech').onDelete('CASCADE').onUpdate('CASCADE');
        rentals.integer('renter_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
    })
 };
  
   exports.down = function(knex) {
      return knex.schema.dropTableIfExists('rentals').dropTableIfExists('tech').dropTableIfExists('categories').dropTableIfExists('conditions').dropTableIfExists('users');
   };
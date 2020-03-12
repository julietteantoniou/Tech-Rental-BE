exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("conditions")
      .delete()
      .then(function() {
        // Inserts seed entries
        return knex("conditions").insert([
          {
            condition: "EXCELLENT"
          },
          {
            condition: "GOOD"
          },
          {
            condition: "FAIR"
          },
          {
            condition: "POOR"
          }
        ]);
       });
  };
  
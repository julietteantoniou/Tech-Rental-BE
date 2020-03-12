exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('categories').delete()
      .then(function () {
        // Inserts seed entries
        return knex("categories").insert([
          {
            category: "AUDIO"
          },
          {
            category: "TELEVISIONS"
          },
          {
            category: "CAMERAS"
          },
          {
            category: "COMPUTERS"
          },
          {
            category: "ACCESSORIES"
          },
          {
            category: "GADGETS"
          },
          {
            category: "PHONES"
          }
        ]);
      });
  };
  
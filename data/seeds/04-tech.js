exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tech').delete()
      .then(function () {
        // Inserts seed entries
        return knex('tech').insert([
          {
            "user_id": 1,
            "title": "Camera for Rent",
            "description": "Bling bling away i'm in the shizzle ",
            "make": "Cannon",
            "model": "DSLR",
            "condition_id": 1,
            "category_id": 2,
            "daily_cost": 5,
            "available": true,
            "img_url": 'hhttps://ibb.co/R23SjDS'
        },
        {
          "user_id": 2,
          "title": "Macbook",
          "description": "Donizzle mah nizzle dui.",
          "make": "Apple",
          "model": "Macbook Pro",
          "condition_id": 2,
          "category_id": 5,
          "daily_cost": 15,
          "available": true,
          "img_url": 'https://ibb.co/MpmqY2G'
      },
      {
        "user_id": 1,
        "title": "Turntable",
        "description": "Pellentesque habitant morbi ma nizzle senectizzle et sizzle.",
        "make": "Crosley",
        "model": "Record Spinner 5000",
        "condition_id": 3,
        "category_id": 1,
        "daily_cost": 12,
        "available": true,
        "img_url": 'https://ibb.co/hdWYBjH'
    },
        ]);
      });
  };
  
const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findTech,
    findTechById,
    findTechByUser,
    updateTech,
    insert,
    destroy
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

function findTech() {
    return db('tech as t')
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
  }

function findTechById(id) {
    return db('tech as t')
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
      .where( {'t.id': id} )
  }

  function findTechByUser(id) {
    return db('tech as t')
      .join('conditions as con', 'con.id', 't.condition_id')
      .join('categories as cat', 'cat.id', 't.category_id')
      .select('t.*', "con.condition", "cat.category")
      .where('t.user_id', id)
  }

  function insert(tech) {
      const { category, condition, ...techObj } = tech
    return db("tech")
      .insert({
        ...techObj,
        category_id: db
          .select("id")
          .from("categories")
          .where("category", tech.category.toUpperCase()),
        condition_id: db
          .select("id")
          .from("conditions")
          .where("condition", tech.condition.toUpperCase())
      })
  }
  
  function updateTech(id, changes) {
    const { category, condition, ...techObj } = changes;
    if (changes.category && changes.condition) {
      console.log(typeof changes.condition)
      console.log(typeof changes.category)
      return db("tech")
        .where({ id })
        .update({
          ...techObj,
          category_id: db
            .select("id")
            .from("categories")
            .where("category", tech.category.toUpperCase()),
          condition_id: db
            .select("id")
            .from("conditions")
            .where("condition", tech.condition.toUpperCase())
        });
    
    } else if (changes.condition) {
      console.log(changes.condition)
      return db("tech")
        .where({ id })
        .update({
          ...techObj,
          condition_id: db
            .select("id")
            .from("conditions")
            .where("condition", changes.condition.toUpperCase())
        });
    } else if (changes.category) {
      return db("tech")
        .where({ id })
        .update({
          ...techObj,
          category_id: db
            .select("id")
            .from("categories")
            .where("category", changes.category.toUpperCase())
        });
    } else {
      return db("tech")
        .where({ id })
        .update(changes);
    }
  }
  

  function destroy(id) {
    return db('tech')
      .where('id', id)
      .del();
  }
exports.seed = (knex, Promise) => {
  return knex("forum")
    .del() // Deletes ALL existing entries
    .then(() => {
      // Inserts seed entries one by one in series
      return knex("forum").insert({
        title: "what is es6?",
        content: "Lorem Ipsum is simply dummy",
        draft:false,
        publish: true,
        unpublish: false
      });
    })
    .then(() => {
      return knex("forum").insert({
        title: "what is javascript?",
        content: "Lorem Ipsum is simply dummy",
        draft:false,
        publish: false,
        unpublish: true
      });
    })
    .then(() => {
      return knex("forum").insert({
        title: "what is nodejs?",
        content: "Lorem Ipsum is simply dummy",
        draft:false,
        publish: true,
        unpublish: false
      });
    })
    .then(() => {
      return knex("forum").insert({
        title: "what is TDD?",
        content: "Lorem Ipsum is simply dummy",
        draft:false,
        publish: false,
        unpublish: true
      });
    });
};

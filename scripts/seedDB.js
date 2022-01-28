const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Readings collection and inserts the readings below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const readingsSeed = [
  {
    title: "Meditations on First Philosophy",
    author: "René Descartes",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "An Essay Concerning Human Understanding",
    author: "John Locke",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "An Enquiry Concerning Human Understanding",
    author: "David Hume",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "Critique of Pure Reason",
    author: "Immanuel Kant",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“Examination of the Senses”",
    author: "Nāgārjuna",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Ghost in the Machine”",
    author: "Gilbert Ryle",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Mind-Body Problem”",
    author: "Paul M. Churchland",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“Freedom or Determinism?”",
    author: "Steven M. Cahn",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Freedom of the Will”",
    author: " Kitarō Nishida",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Five Ways”",
    author: "Thomas Aquinas",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Kalam Cosmological Argument”",
    author: "William L. Rowe ",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“Does God Exist?”",
    author: "Ernest Nagel",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Categorical Imperative”",
    author: "Immanuel Kant",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“Egoism and Moral Skepticism”",
    author: "James Rachels",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "Utilitarianism",
    author: "John Stuart Mill",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“The Nature of Virtue”",
    author: "Aristotle",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "“Confucian Morality”",
    author: "Henry Rosemont",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    synopsis: "",
    date: new Date(Date.now()),
  },
  {
    title: "Existentialism Is a Humanism",
    author: "Jean-Paul Sartre",
    synopsis: "",
    date: new Date(Date.now()),
  },
];

db.Readings.deleteMany({})
  .then(() => db.Readings.collection.insertMany(readingsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

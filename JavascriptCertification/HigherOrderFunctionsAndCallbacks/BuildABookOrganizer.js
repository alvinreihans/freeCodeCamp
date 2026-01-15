const books = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    authorName: 'Patrick Bet-David and Greg Dinkin',
    releaseYear: 2020,
  },
  {
    title: 'Atomic Habits',
    authorName: 'James Clear',
    releaseYear: 2018,
  },
  {
    title:
      'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    authorName: 'Patrick Bet-David',
    releaseYear: 2023,
  },
  {
    title: 'The Embedded Entrepreneur',
    authorName: 'Arvid Kahl',
    releaseYear: 2021,
  },
  {
    title:
      'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    authorName: 'Jon Gordon',
    releaseYear: 2023,
  },
  {
    title:
      'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    authorName: 'Jeff DeGraff and Staney DeGraff',
    releaseYear: 2020,
  },
  {
    title: 'Rich Dad Poor Dad',
    authorName: 'Robert Kiyosaki and Sharon Lechter',
    releaseYear: 1997,
  },
  {
    title: 'Zero to Sold',
    authorName: 'Arvid Kahl',
    releaseYear: 2020,
  },
  {
    title: 'The Psychology of Money',
    authorName: 'Morgan Housel',
    releaseYear: 2020,
  },
  {
    title: 'Deep Work',
    authorName: 'Cal Newport',
    releaseYear: 2016,
  },
  {
    title: 'Start with Why',
    authorName: 'Simon Sinek',
    releaseYear: 2009,
  },
  {
    title: 'Thinking, Fast and Slow',
    authorName: 'Daniel Kahneman',
    releaseYear: 2011,
  },
  {
    title: 'The Lean Startup',
    authorName: 'Eric Ries',
    releaseYear: 2011,
  },
  {
    title: 'Grit: The Power of Passion and Perseverance',
    authorName: 'Angela Duckworth',
    releaseYear: 2016,
  },
  {
    title: "Can't Hurt Me",
    authorName: 'David Goggins',
    releaseYear: 2018,
  },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else if (book1.releaseYear == book2.releaseYear) {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear <= 2020);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);

const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

  const quote = document.querySelector(`#quote span:first-child`);
  const author = document.querySelector(`#quote span:last-child`);


  // Math.random() * 10
  // 10을 곱하면 0에서 10 사이의 랜덤 숫자를 얻을 수 있음
  //float 형태로 출력

  // Math.Round(1.1)
  // 소수값에 따라 올리거나 버린다.
  // 1.5부터는 반올림

  // Math.ceil()
  // 소수값이 존재할 때 값을 올린다.
  // 1.1은 2가 된다.

  // math.floor()
  // 소수값이 존재할 때 소수값을 버린다.

  const todaysQuote =quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
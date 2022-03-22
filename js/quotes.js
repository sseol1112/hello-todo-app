const quotes = [
  {
    "quote" : "너 자신을 알라",
    "author" : "소크라테스"
  }, 
  {
    "quote" : "인생의 위대한 목표는 지식이 아니라 행동이다.",
    "author" : "헉슬리"
  }, 
  {
    "quote" : "삶은 호흡하는 것이 아니라 행위를 하는 것이다.",
    "author" : "루소"
  }, 
  {
    "quote" : "우리의 인생은 우리가 노력한 만큼 가치가 있다.",
    "author" : "모리악"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
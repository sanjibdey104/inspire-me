const quoteDisplay = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteFetchButton = document.querySelector('.quote-fetch-button');


quoteFetchButton.addEventListener('click', () => fetchQuotes());

const fetchQuotes = async() => {
  const res = await fetch('https://type.fit/api/quotes');
  const data = await res.json();
  pickRandomQuote(data);
}

const pickRandomQuote = (quotes) => {
  const randomIndex = Math.floor(Math.random()*quotes.length);
  
  const quote = quotes[randomIndex];
  renderQuote(quote);
}

const renderQuote = (quote) => {
  quoteDisplay.innerHTML = quote.text;
  
  (quote.author!==null) ? 
  author.innerHTML = `- ${quote.author}` : 
  author.innerHTML = "anonymous";

}

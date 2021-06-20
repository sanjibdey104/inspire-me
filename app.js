const quoteDisplay = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteFetchButton = document.querySelector('.quote-fetch-button');
const loader = document.querySelector('#loader');

window.addEventListener('DOMContentLoaded', () => fetchQuotes());
quoteFetchButton.addEventListener('click', () => fetchQuotes());

const fetchQuotes = async() => {
    loader.classList.add('show');
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    pickRandomQuote(data);
    loader.classList.remove('show');
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

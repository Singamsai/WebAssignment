const quote = document.getElementById('quote');
const writer = document.getElementById('writer');
const Next = document.getElementById('next_quote');

// init();

// function init(){
    Next.addEventListener('click', getQuote);
// }

async function getQuote(){
    const streamResponse = await fetch('https://api.quotable.io/random');
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    quote.innerHTML=`<span class="ticks">&#8220</span>${jsonData.content}<span class="ticks">&#8221</span>`;
    writer.innerText='~'+jsonData.author;
}
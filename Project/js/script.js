// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var quotes = 
[
	{
		quote: 'Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.',
		source: 'Colin Powell',
		image: document.getElementById("background-img").src = "img/colin.jpg"
	},
	{
		quote: 'By failing to prepare, you are preparing to fail.',	
		source: 'Benjamin Franklin',
		image: document.getElementById("background-img").src = "img/benjamin.jpg"
	},
	{
		quote: 'Knowing is not enough, we must apply. Willing is not enough, we must do.',
		source: 'Bruce Lee',
		image: document.getElementById("background-img").src = "img/bruceLee.jpg"
	},
	{
		quote: 'Life is what happens when you\'re busy making other plans.',
		source: 'John Lennon',
		image: document.getElementById("background-img").src = "img/johnLennon.jpg"
	},
	{
		quote:'In the end, it\'s not the years in your life, but the life in your years.' ,
		source: 'Abraham Lincoln',
		image: document.getElementById("background-img").src = "img/abeLincoln.jpg"
	},
	{
		quote:'I never made one of my discoveries through the process of rational thinking' ,
		source: 'Albert Einstein',
		image: document.getElementById("background-img").src = "img/einstein.jpg"
	},
	{
		quote:"You'll miss the best things with your eyes shut." ,
		source: 'Dr. Seuss',
		citation: 'I Can Read With My Eyes Shut!',
		image: document.getElementById("background-img").src = "img/drSeuss.jpg"
	},
	{
		quote:'Whether you think you can, or you think you can\'t -- you\'re right.' ,
		source: 'Henry Ford',
		image: document.getElementById("background-img").src = "img/henryFord.jpg"
	},
	{
		quote:'Do. Or do not. There is no try.' ,
		source: 'Yoda',
		citation: 'The Empire Strikes Back',
		image: document.getElementById("background-img").src = "img/yoda.jpg"
	}
];



function print(message)
{
	var quoteDisplay = document.getElementById("quote-box");
	quoteDisplay.innerHTML = message;
}

function getRandomQuote(quotes)
{
	var randomNumber = Math.floor(Math.random() * 9);
	var randomQuote = quotes[randomNumber];

	return randomQuote;
}

function printQuote () 
{
	var randomQuote = getRandomQuote(quotes);
	document.getElementById("background-img").src = randomQuote.image;
	printQuote = '<p class="quote">' + randomQuote.quote + '</p>';
	printQuote += '<p class="source">' + randomQuote.source;
	if (randomQuote.citation != undefined)
	{
  		printQuote += '<span class="citation"> ' + randomQuote.citation + '</span>';
  		if(randomQuote.year != undefined)
  			printQuote += '<span class="year"> ' + randomQuote.year + '</span>';
  	}
	printQuote += '</p>';
	document.getElementById('quote-box').innerHTML = printQuote;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


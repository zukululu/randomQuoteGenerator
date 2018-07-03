var quotes = 
[
	{
		quote: 'Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.',
		source: 'Colin Powell'
	},
	{
		quote: 'By failing to prepare, you are preparing to fail.',	
		source: 'Benjamin Franklin'
	},
	{
		quote: 'Knowing is not enough, we must apply. Willing is not enough, we must do.',
		source: 'Bruce Lee'
	},
	{
		quote: 'Life is what happens when you\'re busy making other plans.',
		source: 'John Lennon'
	},
	{
		quote:'In the end, it\'s not the years in your life, but the life in your years.' ,
		source: 'Abraham Lincoln'
	},
	{
		quote:'I never made one of my discoveries through the process of rational thinking' ,
		source: 'Albert Einstein'
	},
	{
		quote:"You'll miss the best things with your eyes shut." ,
		source: 'Dr. Seuss',
		citation: 'I Can Read With My Eyes Shut!'
	},
	{
		quote:'Whether you think you can, or you think you can\'t -- you\'re right.' ,
		source: 'Henry Ford'
	},
	{
		quote:'Do. Or do not. There is no try.' ,
		source: 'Yoda',
		citation: 'The Empire Strikes Back'
	},
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
	var printQuote = '<p class="quote">' + randomQuote.quote + '</p>';
	printQuote += '<p class="source">' + randomQuote.source;
	if (randomQuote.citation != undefined)
	{
  		printQuote += '<span class="citation"> ' + randomQuote.citation + '</span>';
  		if(randomQuote.year != undefined)
  			printQuote += '<span class="year"> ' + randomQuote.year + '</span>';
  	}
	printQuote += '</p>';

}

document.getElementById('quote-box').innerHTML
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];

var wordBank = ["football", "christmas", "peanuts", "woodstock", "charlie", "linus","ornament","blanket","santa","presents","beethoven","bubblegum","snoopy","pigpen","innkeeper","shepards"];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];







///starying score
var winCount = 0;
var loseCount = 0;
var guessesLeft = 5;
var rightGuessCounter = 0;

//reset game to this after played
function reset()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	lettersInWord = choosenWord.split('');

	numBlanks = lettersInWord.length;
	
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 5;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
test=false;
	startGame();
}
//beginning of game setup
function startGame()
{
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	lettersInWord = choosenWord.split('');

	numBlanks = lettersInWord.length;

	rightGuessCounter = 0;
	guessesLeft = 5;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
					  
 console.log(choosenWord);
	//Populate underscores
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
	}


	document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongLetters;


	console.log(lettersInWord);

}

function compareLetters(userKey)
{		///test
			console.log('WORKING!')
	if(choosenWord.indexOf(userKey) > -1)
				{
				for(var i = 0; i < numBlanks; i++)
					{
				if(lettersInWord[i] === userKey)
						{
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
	}
}

		else
				{
	wrongLetters.push(userKey);
	guessesLeft--;




					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;

}
			
			
		
}
function winLose()
{//when you win this happens

	if(rightGuessCounter === numBlanks)
	{
	winCount++;

	document.getElementById('winCounter').innerHTML = winCount;


	alert('Nice You Win! I Cant Believe It!');
	reset();

	}

	//when you lose...	
	else if(guessesLeft === 0)
	{
		loseCount++;

		document.getElementById('lossCounter').innerHTML = loseCount;


		alert('"OH NO YOU LOSE! TRY AGAIN!"');
		reset();
	}
}

//this is the actual functionality of the game here
startGame();

document.onkeyup = function(event)
{
test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
	if(letterGuessed === doubleWord[i] && test === true)
{
var spliceDword = doubleWord.splice(i,1);


	compareLetters(letterGuessed);
			winLose();
	
		}



		
}		
		
}
		

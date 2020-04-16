let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

const game = document.querySelector('#inputGroup'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.getElementById('message');

minNum.textContent = min;
maxNum.textContent = max;

  // game.addEventListener('mousedown',function (e) {
  // if (e.target.classList.contains ('btn')) {
  //   window.location.reload();
  // }
  // console.log(8);
  
  
  // });


  guessBtn.addEventListener('click',function(e){
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessege(`Please enter a number between ${min} and ${max} .`,'rgba(231, 76, 60,1.0)');
  }

  if (guess === winningNum) {
    gameOver(true,`${winningNum} is correct, You Win!!!`);
    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'green';
    // setMessege(`${winningNum} is correct, You Win!!!`, 'green');
  }else{
    guessesLeft = guessesLeft -1;
    if (guessesLeft === 0) {
      gameOver(false,`Game over,you lost. The correct number was ${winningNum}`);
    // guessInput.disabled = true;
    // guessInput.style.borderColor = 'red';
    // setMessege(`Game over,you lost. The correct number was ${winningNum}`, 'red');
    }else{
      
      guessInput.style.borderColor = 'redrgba(231, 76, 60,1.0)';
      setMessege(`${guess} is not correct, ${guessesLeft} guesses left`,'rgba(231, 76, 60,1.0)');
      guessInput.value = '';
    }
  }
  
  
  
  e.preventDefault();
});



function gameOver(won,msg) {
  let color ;
  won === true ? color = 'rgba(46, 204, 113,1.0)' : color = 'rgba(231, 76, 60,1.0)';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessege(msg); 
  guessBtn.textContent = 'Play Again';
  guessBtn.style.marginLeft = '1rem';
  guessBtn.addEventListener('mousedown',function (e) {
    e.target.textContent === 'play Again';
    window.location.reload();
  })
  guessBtn.className += 'play-again';
}
function getRandomNum(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
  
}


function setMessege(mag,color) {
  message.style.color = color;
  message.textContent = mag;
}





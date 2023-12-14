function generateRandomNumber() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('result').innerText = '';
  
    var loadingTime = Math.floor(Math.random() * (10 - 3 + 1)) + 3;

    setTimeout(function () {
      var randomNumber = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      document.getElementById('result').innerText = randomNumber + '% chance of AI in this text.';
      document.getElementById('loading').classList.add('hidden');
    }, loadingTime * 1000);
  }
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/templatedesign2.png') {
      myImage.setAttribute ('src','images/webdesign3.png');
    } else {
      myImage.setAttribute ('src','images/templatedesign2.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
   var myName = prompt('Please enter your name.');
   localStorage.setItem('name' , myName);
   myHeading.textContent = 'Welcome to Visual Web Portfolios, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'A Good Website is Awesome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

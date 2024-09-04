let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let myImage  = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/11.webp') {
    myImage.setAttribute('src', 'images/222.jpg');
  } else {
    myImage.setAttribute('src', 'images/11.webp');
  }
}

let myButton = document.querySelector("button");

function setUserName() {
    let myName  = prompt('请输入你的名字：');
    if(!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello'+ myName + '!';
}


if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello'+ storedName + '!';
}

myButton.onclick = function() {
    setUserName();
}

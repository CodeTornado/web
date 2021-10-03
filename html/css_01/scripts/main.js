let myHeading = document.querySelector('h1')
myHeading.textContent = "Hello World!"
myHeading.onclick = function() {
    console.log('被点击')
}
let imgObj = document.querySelector('img')
imgObj.onmouseout = function() {
    let imgObj = document.querySelector('img')
    let src = imgObj.getAttribute('src')
    if (src === 'images/IMG_0292.JPG')
        imgObj.setAttribute('src', 'images/IMG_0293.JPG')
    else
        imgObj.setAttribute('src', 'images/IMG_0292.JPG')
}
let myButton = document.querySelector('button')

function setUserName() {
    let myName = prompt('请输入你的名字')
    localStorage.setItem('name', myName)
    myHeading.textContent = '可以的，' + myName
}
myButton.onclick = function() {
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name')
        myHeading.textContent = 'Mozilla 酷毙了，' + storedName
    }
}
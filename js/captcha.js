var captcha = "";
var isFirstAttempt = true;
var accumulator = new Accumulator(0);

showTextCaptcha();

document.getElementById("captcha-submit").addEventListener("click", checkCaptcha);

function checkCaptcha() {
    if (isEmpty(document.getElementById("captcha-input").value)){
        alert("Пустая строка");
    }

    if (document.getElementById("captcha-input").value.toString() === captcha.toString()) {
        activateSendButton();
        return;
    }

    if (isFirstAttempt) {
        showSumCapture();
        isFirstAttempt = false;
        return;
    } 

    alert("Ошибка");
}

function showTextCaptcha(){
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    captchaLength = 5;

    for (i = 0; i < captchaLength; i++) {
        captcha += characters[Math.ceil(Math.random() * characters.length) - 1]
    }

    setCaptcha(captcha);
}

function showSumCapture(){
    let firstRandomValue = Math.ceil(Math.random() * 100);
    let secondRandomValue = Math.ceil(Math.random() * 100);
    captcha = firstRandomValue + secondRandomValue;
    
    setCaptcha(firstRandomValue.toString() + '+' + secondRandomValue.toString());
}

function activateSendButton(){
    document.getElementsByClassName("result").item(0).disabled = false;
}

function setCaptcha(captcha){
    document.getElementsByClassName("captcha").item(0).textContent = captcha;
}

function isEmpty(object) {
    for(var property in object) {
        if(Object.prototype.hasOwnProperty.call(object, property)) {
            return false;
        }
    }
    return true
}

function Accumulator(startingValue){
    this.value = parseInt(startingValue);
}

function addNumber(accumulator){
    let value = parseInt(prompt("Введите число:"));
    if(!isNaN(value)){
        accumulator.value += value;
    }
    document.getElementById("value").textContent=accumulator.value;
}
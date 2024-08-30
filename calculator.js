let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input){
    let currentResult = result.innerText;
    if(currentResult == "0"){
        if(input != "c" && input != "DEL" && input != "="){
            result.innerText = "";
            result.innerText += input;
        }
    } else {
        if(input == "DEL"){
            result.innerText = currentResult.substring(0, currentResult.length - 1);
            if(result.innerText == ""){
                result.innerText = "0";
            }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input != "C" && input != "DEL" && input != "="){
            result.innerText += input;
        }
        if(input == "="){
            try {
                result.innerText = eval(result.innerText);
            } catch (e) {
                result.innerText = "Error";
            }
        }
    }
}

        
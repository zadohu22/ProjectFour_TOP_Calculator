function add(a, b){
    let newA = parseFloat(a);
    let newB = parseFloat(b);
    return newA + newB;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b != 0){
    return a / b;
    }else{
        return "lol you can't divide by zero idiot"
    }
}

function operate(operator, x,y){
    if(operator === "+"){
        return add(x, y);  
    }else if(operator === "-"){
        return subtract(x, y);
    }else if(operator === "*"){
        return multiply(x, y);
    }else{
        return divide(x, y);
    }
}

const displayArea = document.getElementById("display");
const displayAreaOne = document.getElementById("displayOne");
const displayAreaTwo = document.getElementById("displayTwo");
const buttonsToDisplay = document.getElementsByClassName('btn');
const operators = document.getElementsByClassName('btnOperator')
const equals = document.getElementById('btnEquals');

let valueOfDisplay = "";

for(let i = 0; i < buttonsToDisplay.length; i++){
    buttonsToDisplay[i].addEventListener('click', function(){
        displayAreaTwo.innerText += buttonsToDisplay[i].innerHTML;
        valueOfDisplay += buttonsToDisplay[i].innerHTML;
        console.log(valueOfDisplay)
    });
}

let logValueOne;
let operator;

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', function(){
        // probably change class name for the display text
        //to get it to move to the top 

        if(valueOfDisplay != ""){
            logValueOne = valueOfDisplay; // in the operate() this will
                                    // make logValueOne = x
            console.log(logValueOne)
            displayAreaOne.innerText += displayAreaTwo.innerText;
            operator = this.innerText;   
            displayAreaOne.innerText += " " + operator + " ";
            displayAreaTwo.innerText = "";
            valueOfDisplay = ""; //reset the value so we can get the next
                                // number for y 

            
            // displayArea.className = "displayAfter";
        }
    })
}

let logValueTwo;
equals.addEventListener('click', function(){
    logValueTwo = valueOfDisplay;
    displayAreaOne.innerText += " " + displayAreaTwo.innerText;
    displayAreaTwo.innerText = operate(operator, logValueOne, logValueTwo);
    valueOfDisplay = displayAreaTwo.innerText;
})


// logValueOne = x
// log Value Two = y 
// operator = operator








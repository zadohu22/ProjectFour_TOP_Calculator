const displayArea = document.getElementById("display");
const displayAreaOne = document.getElementById("displayOne");
const displayAreaTwo = document.getElementById("displayTwo");
const numberButtons= document.getElementsByClassName('btn');
const operators = document.getElementsByClassName('btnOperator')
const equals = document.getElementById('btnEquals');
const decimal = document.getElementById('btnDecimal');
const clear = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
let valueOne = "";
let valueTwo;
let operator;

//***************** NUMBER BUTTONS ************************ */
for(let i = 0; i < numberButtons.length; i++){
  numberButtons[i].addEventListener('click', function(){
    if(displayAreaTwo.innerHTML.length < 14){
		displayAreaTwo.innerHTML += this.innerHTML;
	}
  })
}

//***************** OPERATOR BUTTONS ************************ */
for(let i = 0; i < operators.length; i++){
	operators[i].addEventListener('click', function(){
		
		if(displayAreaTwo.innerHTML != "" && displayAreaOne.innerHTML == "" && displayAreaTwo.innerHTML != "."){
			operator = this.innerHTML;
			displayAreaOne.innerHTML = `${displayAreaTwo.innerHTML} ${operator}`;
			displayAreaTwo.innerHTML = "";
            console.log("if works")
		}else if(displayAreaTwo.innerHTML != "" && displayAreaTwo.innerHTML != "."){
			valueOne = parseFloat(displayAreaOne.innerHTML);
			valueTwo = parseFloat(displayAreaTwo.innerHTML);
			let answer = operate(operator, valueOne, valueTwo)
            // check if answer is decimal, if it is then .toFixed(2);
		    if(answer % 1 != 0){
			answer = answer.toFixed(2);
		}
			operator = this.innerHTML;
			displayAreaOne.innerHTML = `${answer} ${operator}`
			displayAreaTwo.innerHTML = "";
            console.log("this is the else")
		}
	})	
}

//***************** EQUALS BUTTON ************************ */
equals.addEventListener('click', function(){
	if(displayAreaTwo.innerHTML != "" && displayAreaOne.innerHTML !=""){
	
		valueOne = parseFloat(displayAreaOne.innerHTML);
		valueTwo = parseFloat(displayAreaTwo.innerHTML);
		console.log(operator, valueOne, valueTwo)
		
		
		let answer = operate(operator, valueOne, valueTwo);
		// check if answer is decimal, if it is then .toFixed(2);
		if(answer % 1 != 0){
			answer = answer.toFixed(2);
		}
		
		displayAreaOne.innerHTML = "";
		displayAreaTwo.innerHTML = `${answer}`
	}
})

//***************** DECIMAL BUTTON ************************ */
decimal.addEventListener('click', function(){
	
	console.log(displayAreaTwo.innerHTML.length)
	let string = displayAreaTwo.innerHTML.toString();
	let hasDecimal = string.includes('.');
	if(hasDecimal === false && displayAreaTwo.innerHTML.length < 14){
		displayAreaTwo.innerHTML += this.innerHTML;
	}
})


//***************** CLEAR BUTTON ************************ */
clear.addEventListener('click', function(){
	displayAreaOne.innerHTML = "";
	displayAreaTwo.innerHTML = "";
})

//***************** DELETE BUTTON ************************ */
deleteBtn.addEventListener('click', function(){
	console.log(displayAreaOne.innerHTML)
		let newNum = displayAreaTwo.innerHTML.slice(0, -1);
		displayAreaTwo.innerHTML = newNum;
	
})

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
		alert("why are you trying to break my program >:(")
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

const answerbox = document.getElementById("answerbox")
const topcalcs = document.getElementById("top-calcs")
var digit = "0"
var digitYesNo = false
var continueDigit = true
var numberStr = ""
var numbered = 0
var count = 0
var allNums = [] //list with all floats
var numberInputted = false
var fullOperation = [] //list with all values and operations
var prevNumStr = "0"
var prevNum = 0
var operationDone = false
var whichSign = ""
var answered = false
var negative = false
var topcalcnew = ""
var operation = 0
if(numbered < 0){
    negative = true
}
else {
    negative = false
}
function signChange() {
    numbered = numbered * -1
    numberStr = numbered.toString()
    changeAnswer(numberStr)
}
// +1 -2 *3 /4
function C() {
    digit = "0"
    digitYesNo = false
    continueDigit = true
    numberStr = ""
    numbered = 0
    count = 0
    allNums = []
    numberInputted = false
    fullOperation = []
    prevNumStr = "0"
    prevNum = 0
    operationDone = false
    whichSign = ""
    answered = false
    negative = false
    topcalcnew = ""
    operation = 0
    changeAnswer(0)
    changeTopCalcs("")
}
function CE() {
    if(answered==false) {
        numberStr = numberStr.slice(0, -(numberStr.length))
        numbered = parseFloat(numberStr)
        if(numberStr == ""){
            answerbox.innerHTML = "0"  
        }
        else {
            answerbox.innerHTML = numberStr    
        }
    }
    else {
        C()
    }
}
function deletion() {
    if(answered==false) {
        numberStr = numberStr.slice(0, -1)
        numbered = parseFloat(numberStr)
        if(numberStr == ""){
            answerbox.innerHTML = "0"  
        }
        else {
            answerbox.innerHTML = numberStr    
        }        
    }
    else {
        topcalcs.innerHTML = ""
    }
}
function digits() {
    if(answered==false){
    numberStr = numberStr.concat('', digit)
    }
    else {
        prevNumStr = numberStr
        numberStr = digit
        answered = false
    }
    numbered = parseFloat(numberStr)

    answerbox.innerHTML = numberStr
    numberInputted = true
}

function changeAnswer(string) {
    answerbox.innerHTML = string
}
function changeTopCalcs(calc) {
    topcalcs.innerHTML = calc
}

function number(value) {
    digit = value.toString()
    digits()
}

function operator(sign) {
    if(numberInputted == true){
        count+=1
        if(count==1){
            if((operation != 5)&&(operation != 6)&&(operation != 7)&&(operation != 8)){
                prevNumStr = numberStr
                prevNum = numbered
                if(sign=="+") {
                    whichSign = "+"
                    operation=1
                }
                else if(sign=="-"){
                    whichSign = "-"
                    operation=2
                }
                else if(sign=="*" || sign=="x"){
                    whichSign = "x"
                    operation=3
                }
                else if(sign=="/"){
                    whichSign = "/"
                    operation=4
                }
                whichSign = ""
                numberInputted = true
                operationDone = true
                answered=true
            }
            allNums.push(numbered)
            fullOperation.push(numberStr)
            if(sign=="+") {
                operation = 1
                whichSign = "+"
            }
            else if(sign=="-"){
                operation = 2
                whichSign = "-"
            }
            else if(sign=="*"){
                operation = 3
                whichSign = "x"
            }
            else if(sign=="/"){
                operation = 4
                whichSign = "/"
            }
            else if(sign=="sqrt"){
                operation = 5
                whichSign = "<span>&#8730;</span>"
            }
            else if(sign=="sq"){
                operation = 6
                whichSign = "<span>&#178;</span>"
            }
            else if(sign =="recip"){
                operation = 7
                whichSign = "/"
            }
            else if(sign=="cubrt") {
                operation = 8
                whichSign="<span>&#8731;</span>"
            }
            if(operation == 5){
                changeTopCalcs(whichSign + prevNumStr)
                answer = Math.sqrt(numbered)
                changeAnswer(answer)
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
                count = 0
                answered=true
            }
            else if(operation == 6){
                    changeTopCalcs(prevNumStr + whichSign)
                    answer = numbered * numbered
                    changeAnswer(answer)
                    numberStr = answer.toString()
                    numbered = parseFloat(answer)
                    numberInputted = true
                    count = 0
                    answered=true
                    prevNumStr = numberStr
                    prevNum = numbered
            }
            else if(operation == 7){
                changeTopCalcs("1 " + whichSign + " " + prevNumStr)
                answer = 1 / numbered
                changeAnswer(answer)
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
                count = 0
                answered=true
            }
            else if(operation == 8){
                changeTopCalcs(whichSign + prevNumStr)
                answer = Math.cbrt(numbered)
                changeAnswer(answer)
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
                count = 0
                answered=true
            }
            else{
                changeTopCalcs(prevNumStr + " " + whichSign)
                whichSign = ""
                numberInputted = false
            }

            operationDone = true
        }
        else {
            if(sign=="+") {
                whichSign = "+"
            }
            else if(sign=="-"){
                whichSign = "-"
            }
            else if(sign=="*" || sign=="x"){
                whichSign = "x"
            }
            else if(sign=="/"){
                whichSign = "/"
            }
            if(operation==1) {
                answer = parseFloat(prevNumStr)+parseFloat(numbered)
                changeAnswer(answer)
                topcalcnew = (answer.toString()).concat(" ", whichSign)
                topcalcs.innerHTML = topcalcnew.toString()
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
            }
            else if(operation==2){
                answer = parseFloat(prevNumStr)-parseFloat(numbered)
                changeAnswer(answer)
                topcalcnew = (answer.toString()).concat(" ", whichSign)
                topcalcs.innerHTML = topcalcnew.toString()
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
            }
            else if(operation==3){
                answer = parseFloat(prevNumStr)*parseFloat(numbered)
                changeAnswer(answer)
                topcalcnew = (answer.toString()).concat(" ", whichSign)
                topcalcs.innerHTML = topcalcnew.toString()
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
            }
            else if(operation==4){
                answer = parseFloat(prevNumStr)/parseFloat(numbered)
                changeAnswer(answer)
                topcalcnew = (answer.toString()).concat(" ", whichSign)
                topcalcs.innerHTML = topcalcnew.toString()
                numberStr = answer.toString()
                numbered = parseFloat(answer)
                numberInputted = true
            }

            if(sign=="+") {
                operation = 1
            }
            else if(sign=="-"){
                operation = 2
            }
            else if(sign=="*"){
                operation = 3
            }
            else if(sign=="/"){
                operation = 4
            }
            whichSign = ""
            numberInputted = true
            operationDone = true
            answered=true
        }
    }
}
function equal() {   
    count = 0 
    if(operation==1) {
        answer = parseFloat(prevNumStr)+parseFloat(numbered)
        changeAnswer(answer)
        topcalcnew = (prevNumStr).concat(" + ", numberStr, " =" )
        changeTopCalcs(topcalcnew)
        numberStr = answer.toString()
        numbered = parseFloat(answer)
        numberInputted = true
    }
    else if(operation==2){
        answer = parseFloat(prevNumStr)-parseFloat(numbered)
        changeAnswer(answer)
        topcalcnew = (prevNumStr).concat(" - ", numberStr, " =" )
        changeTopCalcs(topcalcnew)
        numberStr = answer.toString()
        numbered = parseFloat(answer)
        numberInputted = true
    }
    else if(operation==3){
        answer = parseFloat(prevNumStr)*parseFloat(numbered)
        changeAnswer(answer)
        topcalcnew = (prevNumStr).concat(" x ", numberStr, " =" )
        changeTopCalcs(topcalcnew)
        numberStr = answer.toString()
        numbered = parseFloat(answer)
        numberInputted = true
    }
    else if(operation==4){
        answer = parseFloat(prevNumStr)/parseFloat(numbered)
        changeAnswer(answer)
        topcalcnew = (prevNumStr).concat(" / ", numberStr, " =" )
        changeTopCalcs(topcalcnew)
        numberStr = answer.toString()
        numbered = parseFloat(answer)
        numberInputted = true
    }
    else {
        answer = fullnumvalue
        changeAnswer(answer)
    }
    answered=true
}
document.addEventListener('keypress', (event) => {
    if((event.key == "1") || (event.key == "2") || (event.key == "3")||(event.key == "4")||(event.key == "5")||(event.key == "6")||(event.key == "7")||(event.key == "8")||(event.key == "9")||(event.key == "0")||(event.key == ".")) {
        number(event.key)
    }
    else if((event.key == "+") || (event.key == "-") || (event.key == "/")||(event.key == "*")||(event.key == "x")){
        operator(event.key)
    }
    else if((event.key == "Enter") || (event.key == "=")) {
        equal()
    }
    
})
document.addEventListener('keydown', (event) => {
    if((event.key == "Delete")) {
        CE()
    }
    else if((event.key == "Backspace")) {
        deletion()
    }
    else if((event.key == "Escape")) {
        C()
    }
})
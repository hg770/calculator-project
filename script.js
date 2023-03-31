const answerbox = document.getElementById("answerbox")
const topcalcs = document.getElementById("top-calcs")
var tempdigit = 0
var isnum = true
var fullnum = []
var fullnumvalue = ""
var fullOperation = []
var fullOperationvalue = ""
var operation = 0
var endofnum = false
var allNums = []
var answer = 0
// +1 -2 *3 /4
function number(value) {

    tempdigit = value
    if(endofnum==true) {
        allNums.push(fullnumvalue)
        fullnum=[]
        endofnum=false
    }
    fullnum.push(tempdigit)
    fullnumvalue = fullnum.join("")
    answerbox.innerHTML = fullnumvalue
}
function operator(sign) {
    fullOperation.push(fullnumvalue)
    

    endofnum = true
    if(sign=="+") {
        operation = 1
        fullOperation.push("+")
    }
    else if(sign=="-"){
        operation = 2
        fullOperation.push("-")
    }
    else if(sign=="*"){
        operation = 3
        fullOperation.push("x")
    }
    else if(sign=="/"){
        operation = 4
        fullOperation.push("/")
    }
    fullOperationvalue = fullOperation.join(" ")
    topcalcs.innerHTML = fullOperationvalue
}
function equal() {
    allNums.push(fullnumvalue)
    fullOperation.push(fullnumvalue)
    if(operation==1) {
        answer = parseInt(allNums[0])+parseInt(allNums[1])
    }
    else if(operation==2){
        answer = (parseInt(allNums[0]))-(parseInt(allNums[1]))
    }
    else if(operation==3){
        answer = (parseInt(allNums[0]))*(parseInt(allNums[1]))
    }
    else if(operation==4){
        answer = (parseInt(allNums[0]))/(parseInt(allNums[1]))
    }
    else {
        answer = fullnumvalue
    }
    fullOperation.push("=")
    answerbox.innerHTML = answer
    fullOperationvalue = fullOperation.join(" ")
    topcalcs.innerHTML = fullOperationvalue
}
function C() {
    tempdigit = 0
    isnum = true
    fullnum = []
    fullnumvalue = ""
    fullOperation = []
    fullOperationvalue = ""
    operation = 0
    endofnum = false
    allNums = []
    answer = 0
    answerbox.innerHTML = "0"
    topcalcs.innerHTML = " "
}
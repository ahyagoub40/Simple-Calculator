let prevVal = ""
let newVal = ""
let resultingVal = ""
let mathOperator = ""
let decimalClicked = false
let valMemStored = ""

// functions

function numButPress(num) {
  if (resultingVal) {
    newVal = num
    resultingVal = ""
  } else {
    if (num === ".") {
      if (decimalClicked != true) {
        newVal += num
        decimalClicked = true
      }
    } else {
      newVal += num
    }
  }
  document.getElementById("entry").value = newVal
}
function mathButPress(operator) {
  if (!resultingVal) {
    prevVal = newVal
  } else {
    prevVal = resultingVal
  }
  newVal = ""
  decimalClicked = false
  mathOperator = operator
  resultingVal = ""
  document.getElementById("entry").value = ""
}
function equalButPress() {
  decimalClicked = false
  prevVal = parseFloat(prevVal)
  newVal = parseFloat(newVal)
  switch (mathOperator) {
    case "+":
      resultingVal = prevVal + newVal
      break
    case "-":
      resultingVal = prevVal - newVal
      break
    case "*":
      resultingVal = prevVal * newVal
      break
    case "/":
      resultingVal = prevVal / newVal
      break
    default:
      resultingVal = newVal
  }
  prevVal = resultingVal
  document.getElementById("entry").value = resultingVal
}
function clearButPress() {
  prevVal = ""
  newVal = ""
  resultingVal = ""
  mathOperator = ""
  decimalClicked = false
  document.getElementById("entry").value = 0
}
function copyButPress() {
  valMemStored = document.getElementById("entry").value
}
function pasteButPress() {
  if (valMemStored) {
    document.getElementById("entry").value = valMemStored
    newVal = valMemStored
  }
} 
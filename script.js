

////////////with full explanations////////////detailed function/////////////////
// function displayValue(num){
//     let res=document.querySelector("#result")
//     res.value+=num;
// }

// function clearBox(){
//     document.querySelector("#result").value=""
// }

// function evaluateExpression(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     let result=eval(cur_val)
//     res.value=result
// }


// function backspace(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     res.value=cur_val.slice(0,-1)
// }


////////////Shortest and easiest method ////////

// function displayValue(num){
//     result.value+=num

// }




// function clearBox(){
//     result.value="";

// }

// function backspace(){
//     result.value=result.value.slice(0,-1)
// }


// function evaluateExpression(){
//     result.value=eval(result.value)
// }


/////////////////CHANGING INTO ARROW FUNCTION//////////////

var displayValue=(num)=>result.value+=num

var clearBox=()=>result.value=""

var backspace=()=>result.value=result.value.slice(0,-1)

var evaluateExpression=()=>result.value=eval(result.value)
function add( a , b ) {
    return a + b;
}

function PlusButton() {
    let addResult = add( +x.value, +y.value )
    result.value = addResult;
    console.log(addResult);
}

document.getElementById("plus").addEventListener("click", PlusButton);

function diff( a , b ) {
    return a - b;
}

function MinusButton() {
    let diffResult = diff( x.value, y.value )
    result.value = diffResult;
    console.log(diffResult);
}

document.getElementById("minus").addEventListener("click", MinusButton);

function multiply( a , b ) {
    return a * b;
}

function MultiplyButton() {
    let multiplyResult = multiply( x.value, y.value)
    result.value = multiplyResult;
    console.log(multiplyResult);
}

document.getElementById("multiply").addEventListener("click", MultiplyButton);

function divide( a , b ) {

    if ( b == 0 ) {
        alert("Ділити на нуль не можна");
        return null;
    }

    if ( a == 0 ) {
        alert("Ділити на нуль не можна");
        return null;
    }

    return a / b;
    
}

function DivideButton() {
    let divideResult = divide( x.value, y.value)
    result.value = divideResult;
    console.log(divideResult);
}

document.getElementById("divide").addEventListener("click", DivideButton)

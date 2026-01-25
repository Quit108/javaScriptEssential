function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let multiplyResult = multiply(num1, num2);
                    let addResult = add(num1, num2);
                    let subtractResult = subtract(num1, num2);
                    let divideResult = divide(num1, num2);
                    // Display the result
                    displayResult(multiplyResult, addResult, subtractResult, divideResult);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function add(a, b) {
                debugger;
                return a + b;
            }
            
            function subtract(a, b) {
                debugger;
                return a - b;
            }
            
            function divide(a, b) {
                debugger;
                return a / b;
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Multiply the numbers
                return a * b;
            }
            function displayResult(multiplyResult, addResult, subtractResult, divideResult) {
                // Display the result in the paragraph element
                const resultElement1 = document.getElementById('addResult');
                resultElement1.textContent = `The result of addition is: ${addResult}`;
                const resultElement2 = document.getElementById('subtractResult');
                resultElement2.textContent = `The result of subtraction is: ${subtractResult}`;
                const resultElement3 = document.getElementById('divideResult');
                resultElement3.textContent = `The result of division is: ${divideResult}`;
                const resultElement4 = document.getElementById('multiplyResult');
                resultElement4.textContent = `The result of multiplication is: ${multiplyResult}`;
            }
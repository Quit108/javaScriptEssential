let item1 = 0;
let item2 = 0;
let item3 = 0;

function groceryTotal() {
    item1 = parseFloat(document.getElementById('item1').value);
    item2 = parseFloat(document.getElementById('item2').value);
    item3 = parseFloat(document.getElementById('item3').value);

    let total = item1 + item2 + item3;
    document.getElementById('result').innerText = `The total amount is: $ ${total}`;
}
function ticketHandaler(name, inpt) {
    var Input = document.getElementById(inpt + 'Input');
    input = parseFloat(Input.value);
    if (name == 'decrease') {
        if (input < 1) {
            newinptvalue = 0
        } else {
            var newinptvalue = input - 1
        }
    }
    if (name == 'increase') {
        var newinptvalue = input + 1
    }
    Input.value = newinptvalue;
    getInput();
}


function getInput() {
    var firstInput = document.getElementById('firstInput');
    var economyInput = document.getElementById('economyInput');
    var firstTicket = firstInput.value * 150;
    var economyTicket = economyInput.value * 100;
    var subtotal = (firstTicket + economyTicket);
    document.getElementById('subtotal').innerText = '$' + subtotal;
    var tax = subtotal * 0.1;
    document.getElementById('tax').innerText = tax;
    var grandTotal = subtotal + tax;
    document.getElementById('grandtotal').innerText = grandTotal;
}
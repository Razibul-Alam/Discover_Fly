function ticketHandaler(name, inpt) {
    var Input = document.getElementById(inpt+'Input');
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

    Input.value = newinptvalue
}



// function firstClass(name) {
//     var Input = document.getElementById('firstInput');
//     input = parseFloat(Input.value);
//     if (name == 'decrease') {
//         if (input < 1) {
//             newinptvalue = 0
//         } else {
//             var newinptvalue = input - 1
//         }
//     }
//     if (name == 'increase') {
//         var newinptvalue = input + 1
//     }

//     Input.value = newinptvalue
// }


// function economyClass(name) {
//     var Input = document.getElementById('economyinput');
//     input = parseFloat(Input.value);
//     if (name == 'decrease') {
//         if (input < 1) {
//             newinptvalue = 0
//         } else {
//             var newinptvalue = input - 1
//         }
//     }
//     if (name == 'increase') {
//         var newinptvalue = input + 1
//     }

//     Input.value = newinptvalue
// }

// var totalamount=newinptvalue*150;
// var subtotal=document.getElementById('subtotal').innerText='$'+totalamount;
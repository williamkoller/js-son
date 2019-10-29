var click_me = document.getElementById('click_me');
var input = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');
var body1 = document.getElementsByTagName('body');

var title = document.getElementById('h1');
title.style.color = '#fff000';

var select = document.createElement('select');
select.style.background = '#000000';

body1[0].appendChild(select);


for(var i = 0; i < 10; i++) {
    var option = document.createElement('option');
    option.id = "#id_".i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

btn_generate.addEventListener('click', generate);

function generate(){
    var value = input[0].value;

    for (var i = 0; i < parseInt(value); i++){
        var inpt = document.createElement('input');
        inpt.id = "btn_" + i;

        var body = document.getElementsByTagName('body');

        body[0].appendChild(inpt);
    }

}

click_me.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('You click me');
}

function validateNumber() {
    var number = document.getElementById('number_val').value;

    if (isNaN(number) || number >= 1 && number <= 10){
        alert('input is not valid')
    } else {
        alert('input is valid');
    }
}

function over(obj) {
    obj.innerHTML = 'Over me JS';
    obj.style.background = '#ffffff';
}

function out(obj) {
    obj.style.background = '#fff000';
    obj.color = '#ccc';
}

// var ft = [
//     'william',
//     'Koller'
// ];
//
// var ft1 = [
//     'Luis'
// ];
//
// console.log(ft);
// console.log(ft1);
//
// var result = ft.concat(ft1);
// console.log(result);


// ft.unshift('LTSS') // no inicio
//ft.push('LTS') // adiciona no final
// console.log(ft);

// ft.pop(); // remove no final
// ft.shift(); // remove na frente
// ft.splice(1,1); // remove pelo array
// console.log(ft.indexOf('william'));
// console.log(ft);
// console.log(ft[0]);


// function myFunction(name)
// {
//     console.log('Name => ', name);
// }
//
// getFunction('Linux BR');

(function check(name) {
    return console.log('Name => ' + name);
})('Linux-Birl');

// (function check(name) {
//     return console.log('Name => ' + name);
//
// })('William Koller LTS');


/**
 *
 * @type {string}
 */
// var prop1 = prompt('Model ?')
// var prop2 = prompt('Name ?')
// var prop3 = prompt('Color ?');

// var obj = {
//     model: prop1,
//     name: prop2,
//     color: prop3
// };

// var obj = {};
// obj.model = prop1;
// obj.name = prop2;
// obj.color = prop3;

// var obj = {};
//
// obj["model"] = prop1;
// obj["name"] = prop2;
// obj["color"] = prop3;
// obj.start = function(){
//     console.log('I m ready')
// }
// console.log(JSON.stringify(obj));
// console.log(obj);
// obj.start();

// function  yourName(name) {
//     return name + " Developer";
// }
// console.log(yourName(prop));

// myFunction('Ubuntu LTS');

// console.log('hello from external scripts');

// var age = prompt('How old are you?');

// var ageParser = parseInt(age);

/**
 *  use condition if
 */

    // if(ageParser >= 18){
    //   console.log('You are authorized');
    // } else {
    //   console.log('You are not authorized');
    // }

/**
 *  use switch
 */

    // switch(true) {
    //     case (ageParser >= 18):
    //       console.log('You are authorized Switch');
    //     break;
    //     case (ageParser < 18):
    //       console.log('You are not authorized Switch');
    //     break;
    //     default:
    //       console.log('default function');
    //     break;
    // }
/**
 *  use callback
 */

    // [0,1,2,3,6,4,5,6].forEach(function($value, $key){
    //   console.log($value);
    // });

/**
 * use while
 */
    // var i = 0;
    // while(i < 10){
    //   console.log("variable I: " + i);
    //   i++;
    // }
/**
 *  use for
 */
    // for (var a = 0; a < 11; a++){
    //   console.log("variable A: " + a);
    // }

/**
 * use var and call console.log
 */

    // var number = 12;
    // var number1 = 30;

    // console.log(typeof number);

    // number = "0" + number1;

    // console.log(number);
    // console.log(typeof number);

    // var myFunction = function()
    // {
    //   var number = 0.1 + 2;

    //   console.log(number);
    // }
    // myFunction();


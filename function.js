// Function add: name of function, a,b: tham so

var name = 'Thach';

function add(a,b) {
    var c = a + b;
    return c;
}

var total = add(3,6);

//Khai bao function => use global variable

var multiply = (num1,num2) => {
    var result = num1 * num2;
    return result;
}


var kim = {
    name: 'Kim',
    age: 24,
    eat: function (food, icecream) {
        console.log(this.name + ' eats ' + food + icecream);
    }
};

kim.eat('banana', 'chocolate icecream');

kim.age = 22;

kim.name = 'Kim Cute';

kim.eat('banana', 'strawberry');

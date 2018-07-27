var price = prompt("How much does this cost?") || 10;
var coupon = prompt("what percent off is this?") || 0;
var tax = 1.20
var total = (price - (price * coupon)) * tax;

console.log("the total is: " +total);
console.log("pre-tax price is: " + (price - (price * coupon)) * tax);
console.log("coupon price is: " + coupon);


var books = {
    "Harry Potter and The CUrse of the While Loops": {
        "price": "15"

    },
    "Little Monsters": {
        "price": "20"
    },
    "The Go-Giver": {
        "price": "8"
    },
    "The Hitchhiker's Guide to the Galaxy": {
        "price": "17"
    }
}

var Harr = books["Harry Potter and The Curse of the While Loops"];
var Litt = books["Little Monsters"];
var TheG = books["The Go-Giver"];

var Hitc = books["The Hitchhiker's Guide To The Galaxy"];



var checkOut = function(selection){
    console.log(selection["price"] * tax);
}
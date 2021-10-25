console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello) - undefined
// hello = 'world'

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle';
// needle = 'haystack';

// function test(){
//        var needle = 'magnet';
//        console.log(needle);

// test() is called

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// brendan = 'super cool'
// function print(){
        //brendan = 'only okay';
        //console.log(brendan);
    //}
    //console.log(brendan) - returns 'super cool'

    var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
    
// var food;
// function eat();
// food = chicken
// console.log(food) - logs 'chicken'
//eat() 
//        {
//         var food;
//         food = 'half-chicken';
//         console.log(food); - returns 'half-chicken
//         food = 'gone';
//     }

console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);

// var mean;
// mean = function() {
//    food = "chicken";
//    console.log(food);
//    var food = "fish";
//    console.log(food);
//} 
//ERROR  mean is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre) - undefined
// genre = 'disco';
// function rewind();
// rewind() {
    //     var genre;
    //     genre = "rock";
    //     console.log(genre); - 'rock
    //     genre = "r&b";
    //     console.log(genre); = 'r&b'
//}
//console.log(genre); - 'disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = 'san jose';
// function learn();
// console.log(dojo); - 'san jose'
// learn() {
    //     var dojo;
    //     dojo = "seattle";
    //     console.log(dojo); - 'seattle'
    //     dojo = "burbank";
    //     console.log(dojo); - 'burbank'
//}
//console.log(dojo); - 'san jose'





console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//function makeDojo(name, students) {...}
//console.log(makeDojo('Chicago', 65));
//  const dojo;
//  dojo = {};
//  dojo = {name : "Chicago"}
//  dojo = {stuens : 65}
//}

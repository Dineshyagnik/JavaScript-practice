// function show(){
//     console.log("Hello");
// }
// show();
// show();
// show();

// function display(a,b,c){
//     console.log("Hello",a+b+c);
// }
// display(10,20,30);
// display(1,2,3);

// function ducat(x,y){
    //console.log(x,y, arguments);
//     console.log(x,y,arguments[2],arguments[3],arguments[4],);
// }
// ducat(10,20,30,40,50);


// function show(a,b,...rest){
    // console.log(a,b,rest);
//     console.log(a,b,rest[0],rest[1],rest[2],rest[3]);
// }
// show(10,20,30,40,50,60,70,80,90);

// function hello(a,b,c=30)
// {
//     console.log(a,b,c);
// }
// hello(10,20,30);


// function hello(a,b,c=30,d=10,e=50)
// {
//     console.log(a,b,c);
// }
// hello(10,20,80);

// function show(a,b){
//     return a+b;
// }
// var data = show(5,10);
// console.log(data);

function data(a,b)
{
    var c=a+b;
    return a+"+"+b+"="+c;
}
var d=data(10,20);
console.log(d);
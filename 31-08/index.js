/*
function show(){
     var a=10
     var b=20
     var c=a+b
     return c
}
 var data= show()
 console.log(data);
 */
// var b=50 //global 
//  function data()
//  {
//      var a=10 //local
//      console.log(a);
//      console.log(b);
//  }
//  data()
//  console.log(b);

// function display(){
//   x=10
//      console.log(x);
// }
// display();
// console.log(x);

// var data= function show(){
// console.log("hello ducat");
//  }
//  data()
// var data= function show(a,b){
//      console.log("hello ducat",a,b);
//       }
//       data(10,20)
// var data=function (){
//      console.log("hello");
// }
// data()
// var data=function (x,y){
//      console.log("hello",x,y);
// }
// data(1,2)
// var data=()=>{
//    console.log("hello");  
// }
// data()
// var data=(a)=>{
//      console.log("hello",a);  
//   }
//   data(10)

// (function(){console.log("hello");})()
// (function(a,b){console.log("hello",a,b);})(10,30)

// class school{
//      show(){
//           console.log("hello show");
//      }
// }
// var obj=new school();
// obj.show();

// class child{
//      get(a,b){
//           this.a=a
//           this.b=b
//           console.log("get method",a,b);
//      }
//      show(){
//           console.log("show method",this.a,this.b);
//      }
// }
// var obj=new child()
// obj.get(10,20)
// obj.show()

// class child{
//      get(a,b){
//           this.a=a
//           this.b=b
//           console.log("get method",a,b);
//      }
//      show(){
//           console.log("show method",this.a,this.b,this.x,this.y);
//      }
//      constructor(x,y){
//           this.x=x
//           this.y=y
//           console.log("hello constructor",x,y);
//      }

// }
// var obj=new child(7,8)
// obj.get(7,9)
// obj.show()

class A{
     txt(){
          console.log("hello txt");
     }
     constructor(){
     console.log(" A class constructor");
     }
}
class B extends A{
     show(){
          console.log("hello show");
     }
     constructor()
     {
          super();
          console.log("B class constructor");
     }
}
class C extends B{
     display()
     {
          console.log("hello display");
     }
     constructor()
     {
          super();
          console.log("C class constructor");
     }
    
}
var obj=new C();
obj.txt();
obj.show()
obj.display()
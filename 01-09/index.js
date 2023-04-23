class A {
    constructor(a, b) {
        console.log("A Class constructor",a,b);
    }
    show1() {
        console.log("show1");
    }
}
class B extends A {
    constructor(a, b) {
        super(a,b);
        console.log("B class constructor");
    }
    show2() {
        console.log("show2");
    }
}
class C extends B {
        constructor(a,b){
            super(a,b);
            console.log("C class constructor",a,b);
        }
        show3(){
            console.log("show3");
        }
}
var Obj=new C(10,20)
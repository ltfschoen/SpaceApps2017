function MyClass(myArg) {
    this.name = myArg;
}
module.exports = MyClass;

var myClass = new MyClass("luke");
console.log(myClass.name);
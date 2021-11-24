class Person{

    get name() {
         return this._name;
     }
     set name(name) {
         this._name = name;
     }

     get surname1() {
         return this._surname1;
     }
     set surname1(surname1) {
         this._surname1 = surname1;
     }

     get surname2() {
         return this._surname2;
     }
     set surname2(surname2) {
         this._surname2 = surname2;
     }

     get fullName(){
         return this.name + " " + this.surname1 + " " + this.surname2;
     }

     constructor(name, surname1, surname2) {
       this.name=name;
       this.surname1=surname1;
       this.surname2=surname2;

   }

 }

  let a = new Person("Manuel", "Delgado", "Linares");
  let b = new Person("Sara", "Ruiz", "García");
  let c = new Person("Elena", "Moreno", "Fernández");
  let agregar = new Array(a,b,c);

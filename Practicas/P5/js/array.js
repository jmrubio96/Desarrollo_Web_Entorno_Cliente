import{Person} from clasePerson.js;

class Lista{
    get array(){
        return this._array;
    }

    set array(array){
        this._array=array;
    }

    constructor() {
        this.array=  Array();
      
    }
}
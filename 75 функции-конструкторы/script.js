function Uzer(name, id){
   this.name = name;
   this.id = id;
   this.hello = function(){
      console.log(`Ты ${this.name} дебил`);
      
   };
   this.human = true;
}

const ivan = new Uzer('Ivan', 28);
const mikl = new Uzer('Mikl', 36);

Uzer.prototype.exit = function(){
   console.log(`а вот ${this.name} ушел` );
   
};
mikl.hello();
ivan.exit();

console.log(ivan);
console.log(mikl);


function Ninja(name, health, speed, strength){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;
  this.sayName = function(){
    console.log("My ninja name is " + this.name +"!")
  };
  this.showStats = function(){
    console.log("Name:" +this.name+ ", Health: " + this.health + ", Speed: " + speed + ", Strength: "+ strength);
  };
  this.drinkSake = function(){
    sake = 10;
    this.health += sake;
    console.log("Health: "+ (this.health));
  }
  this.punch = function(blueNinja){
    punch = -5;
    console.log( blueNinja.name +" was punch by " + this.name + " and lost 5 health!");
    this.health += punch;
    console.log("Name:" + blueNinja.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: "+ strength);
  }
  this.kick = function(redNinja){
    kick = -15;
    console.log(redNinja.name +" was kicked by " + this.name + " and lost 15 health!");
    this.health += kick;
    console.log("Name:" + redNinja.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: "+ strength);
  }

}

var ninja1 = new Ninja("gafield");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
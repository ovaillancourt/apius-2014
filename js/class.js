//Classe Parent
function animal(){

}

// Methodes de la classe de base.
animal.prototype.cri = function(){
  return '';
};

animal.prototype.nbYeux = function(){
  return 2;
};

//Classe enfant
function lion(){
  animal.call(this); //Appel du constructeur parent.
}
lion.prototype = Object.create(animal.prototype);

//On override une méthode.
lion.prototype.cri = function(){
  return 'warrrr';
};

var l = new lion();

//Appel fonction surchargée dans l'enfant.
console.log(l.cri());

//Appel fonction non-définie dans l'enfant.
console.log(l.nbYeux());

//Object "lion" est une instance de la classe animal et lion
console.log(l instanceof animal);
console.log(l instanceof lion);

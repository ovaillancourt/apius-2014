function parent(){
  var bob = 42;

  function enfant(){
    console.log(bob);
  }

  return enfant;
}

var e = parent();

e();
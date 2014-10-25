function doSomething(){
  var bob = 50;

  if(bob == 42 ){
    // pas de scope
  }

  for(var i = 0; i < bob; ++i){
    //pas de scope
  }
}
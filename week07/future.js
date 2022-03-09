var child = [0, 3, 2, 4, 5];
var job = ['Teacher', 'Black Jack Dealer', 'Programmer', 'Actor', 'Musician'];
var spouse = ['Julie','Paige','Ruth', 'Hina', 'Madeliene'];
var place = ['Colorado', 'Spain', 'California','Alaska', 'Neverland'];
var random = Math.floor(Math.random() * 5);

function tellFortune(job,place,spouse,child) {
  
  if (job == 'Actor'){
    document.write("You will be an " +job+" living in " +place+" and married to "+spouse+" with " +child+" kids.");
  }
  
  else {
    document.write("You will be a " +job+" living in " +place+" and married to "+spouse+" with " +child+" kids.");
  }
}

tellFortune (job[random], place[random], spouse[random], child[random]);

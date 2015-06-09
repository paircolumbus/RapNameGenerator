

/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

}

function getRapName(name, first_names, last_names) {
  return getRapFirstName(name, first_names) + getRapLastName(name, last_names);
}

function getRapFirstName(name, first_names) {
  var numOptions = first_names.length + 2;
  var option = getRandomInt(0, numOptions);
  if(option > numOptions) {
    alert("Error: random number generator is wrong");
  }
  if(option === numOptions) {
    return initializeName(name);
  }
  else if(option === numOptions-1){
    return name;
  }
  else if(option === numOptions-2) {
    return name.toUpperCase()[0];
  }
  else {
    return first_names[option] + " " + name;
  }
}

function getRapLastName(name, last_names) {
  var numOptions = last_names.length;
  var option = getRandomInt(0, numOptions);
  if(option > numOptions) {
    alert("Error: random number generator is wrong");
  }
  if(option === numOptions){
    return '';
  }
  else {
    return " " + last_names[option];
  }
}


function initializeName(name) {
  var initials = name.toUpperCase().split('');
  var newName = '';
  initials.forEach( function(letter) {
    newName+= letter + ".";
  });
  return newName;
}

function verifyInput(name) {
  return name != "";
}

function getUsersName() {
  return $("input[id='user-input']").val();
}

/**
 * Gets a random number between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function() {

    var engine = new Generator;
    $("#enter").click( function() {
      if(!verifyInput(getUsersName())) {
        $(".response").hide();
        $(".error").show();
      }
      else {
        var rapName = getRapName(getUsersName(), engine.first_names, engine.last_names)
        $(".error").hide();
        $(".response").text(rapName);
        $(".response").show();
      }
    });

});

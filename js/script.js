

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

    this.getRapName = function(name) {
      return this.getRapFirstName(name) + this.getRapLastName(name);
    }

    this.getRapFirstName = function(name) {
      var numOptions = this.first_names.length + 2;
      var option = getRandomInt(0, numOptions);
      if(option > numOptions) {
        alert("Error: random number generator is wrong");
      }
      if(option === numOptions) {
        return this.initializeName(name);
      }
      else if(option === numOptions-1){
        return name;
      }
      else if(option === numOptions-2) {
        return name.toUpperCase()[0];
      }
      else {
        return this.first_names[option] + " " + name;
      }
    }

    this.getRapLastName = function(name) {
      var numOptions = this.last_names.length;
      var option = getRandomInt(0, numOptions);
      if(option > numOptions) {
        alert("Error: random number generator is wrong");
      }
      if(option === numOptions){
        return '';
      }
      else {
        return " " + this.last_names[option];
      }
    }


    this.initializeName = function(name) {
      var initials = name.toUpperCase().split('');
      var newName = '';
      initials.forEach( function(letter) {
        newName+= letter + ".";
      });
      return newName;
    }

    this.getUsersName = function() {
      return $("input[id='user-input']").val();
    }
}

function verifyInput(name) {
  return name != "";
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
      if(!verifyInput(engine.getUsersName())) {
        $(".response").hide();
        $(".error").show();
      }
      else {
        var rapName = engine.getRapName(engine.getUsersName());
        $(".error").hide();
        $(".response").text(rapName);
        $(".response").show();
      }
    });

});

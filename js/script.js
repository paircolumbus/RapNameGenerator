

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

Generator.prototype.toAcronym = function(name) {
  return name.split("").join(".").toUpperCase()+"."
}

Generator.prototype.toInitial = function(name) {
  return name[0].toUpperCase()
}

Generator.prototype.append = function(name) {
  return name + " " + this.last_names[Math.floor(Math.random() * this.last_names.length)]
}

Generator.prototype.prepend = function(name) {
  return this.first_names[Math.floor(Math.random() * this.first_names.length)] + " " + name
}

Generator.prototype.sandwich = function(name) {
  return this.prepend(this.append(name))
}

Generator.prototype.onlyLetters = function(name) {
  return name.replace(/[^a-zA-Z]/g,"")
}

Generator.prototype.generate = function(name) {
  var new_name;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      new_name = name;
      break;
    case 1:
      new_name = this.toAcronym(name);
      break;
    case 2:
      new_name = this.toInitial(name);
      break;
  }
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      new_name = this.append(new_name);
      break;
    case 1:
      new_name = this.prepend(new_name);
      break;
    case 2:
      new_name = this.sandwich(new_name);
      break;
  }
  return new_name;
}

$(document).ready(function() {

  var engine = new Generator;

  $('#enter').on('click', function(){
    var input = engine.onlyLetters($('#user-input').val())
    if (input !== "") {
      $('.error').hide()
      $('.response').html(engine.generate(input)).show()
    } else {
      $('.error').show()
      $('.response').hide()
    }
  });


});

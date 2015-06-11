

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

function generate(){
  $(".error").hide()
  $(".response").hide()
  var engine = new Generator;
  var input = $("input[type='text']").val();
  convertToDots(input)
  if(input == ""){
    $(".error").show()
  }else{
    var usingFirst = Math.random() <= .5
    if (Math.random() < .3){
      input = convertToDots(input)
    }
    if (usingFirst){
      first_name = engine.first_names[Math.floor(Math.random()*engine.first_names.length)]
      $(".response").text(first_name + " " + input)
      $(".response").show()
    }else{
      last_name = engine.last_names[Math.floor(Math.random()*engine.last_names.length)]
      $(".response").text(input + " " + last_name)
      $(".response").show()
    }
  }
}

function convertToDots(name){
  var str = name.toUpperCase();
  var strArray = str.split("")
  var newName = "";
  for (var i = 0; i<strArray.length; i++){    
    newName += strArray[i]
    newName += "."
  }
  return newName
}




$(document).ready(function() {
    $("#enter").click(generate)
});



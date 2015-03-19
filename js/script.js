

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
    var gen = this;

    /* Name Arrays: Customize names to change possible output */
    gen.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    gen.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

    gen.rap_name = function () {
        return get_first_name() + ' ' + get_middle_name() + ' ' + get_last_name()
    }
    gen.set_name = function (orig_name) {
        if (gen.orig_name == undefined) {
           gen.orig_name = orig_name.trim()
        }
    };

    function get_last_name () {
        var index = Math.floor(Math.random() * gen.last_names.length)
        return gen.last_names[index]
    }

    function get_first_name () {
        var index = Math.floor(Math.random() * gen.first_names.length)
        return gen.first_names[index]
    }

    function get_middle_name () {
        var name_options = [];
        name_options.push(gen.orig_name);
        name_options.push(gen.orig_name.charAt(0).toUpperCase());
        name_options.push(gen.orig_name.toUpperCase().split('').join ('.'))
        var index = Math.floor(Math.random() * name_options.length)
        return name_options[index]
    }
}




$(document).ready(function() {

    var engine = new Generator;
    $('#enter').click(function () {
      var orig_name = $('#user-input').val();
      engine.set_name(orig_name);
      var rap_name = engine.rap_name;
      $('#user-input').val(rap_name);
    });

});

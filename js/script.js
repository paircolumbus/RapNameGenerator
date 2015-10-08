

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

Generator.prototype = {
    constructor: Generator,
    pick_first_name: function() {
        return this.select_string(this.first_names);
    },

    pick_middle_name: function(name) {
        var percent = this.random_percent();
        if(percent < 10)
        {
            // Initial
            return name.substr(0, 1).toUpperCase();
        }
        else if(percent < 25)
        {
            // N.A.M.E.
            return this.make_dotted_name(name);
        }
        return name;
    },

    pick_last_name: function() {
        return this.select_string(this.last_names);
    },

    pick_name:function(name) {
        var percent = this.random_percent();
        if(percent < 10)
            return this.all_parts(name);
        if(percent < 60)
            return this.middle_and_last(name);
        return this.first_and_middle(name);
    },

    all_parts:function(name) {
        return [this.pick_first_name(),
                this.pick_middle_name(name),
                this.pick_last_name()
                ].join(' ');
    },
    first_and_middle:function(name) {
        return [this.pick_first_name(),
                this.pick_middle_name(name),
                ].join(' ');
    },
    middle_and_last:function(name) {
        return [this.pick_middle_name(name),
                this.pick_last_name()
                ].join(' ');
    },

    random_percent:function() {
        return Math.floor(Math.random() * 100);
    },
    select_string:function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    make_dotted_name:function(name) {
        return name.split('').map(function(val){
            return val.toUpperCase();
        }).join('.') + '.';
    },
};


//Add your codez here


$(document).ready(function() {

    var engine = new Generator;
    //Add your codez here
    //
    $('button').click(function(evt) {
        var name = $('#user-input').val();
        if(name.length == 0) {
            // show alert
            $('.error:hidden').show();
            $('.response:visible').hide();
            return;
        }
        var rap_name = engine.pick_name(name);
        $('.response').text(rap_name);
        // show name
        $('.response:hidden').show();
        $('.error:visible').hide();
        return;
    })

});

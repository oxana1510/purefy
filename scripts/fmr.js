(function ($) {
    $.fn.invisible = function () {
        return this.each(function () {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function () {
        return this.each(function () {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

$(document).ready(function () {

    $('.psi-dropdown').each(function () {
        var args = $(this).attr('data-args');
        var $el = $(this);
        var command = ($(this).attr('data-command') != undefined ? $(this).attr('data-command') : '');
        var val = $(this).attr('value');

        if (command != '') {
            $(this).executeGet(command, args,
              function (data) {
                  hideWaiting();
                  data = data.root.root.codes.code;
                  if (data != undefined) {

                      var opts = '<option value="">Select</option>';

                      for (var i = 0; i < data.length; i++) {

                          opts += '<option value="' + data[i].value + '"' + (val === data[i].value ? 'selected="selected"' : '') + ' >' + (data[i].display != '' ? data[i].display : data[i].value) + '</option>';

                      }
                  }
                  $el.html(opts);
              }
            );
        }
        //alert(val);
        if (val != "")
        $(this).addClass('black');
        
    });

    if ($("#degree option:selected").val() != "")
        $("#degree").addClass('black');

});

function membershipBox() {
    var buttons = [];
    var canc = {};
    var subm = {};

    canc.text = "Not Interested";
    canc.click = function () {
        location.href = '/page/home';
    };

    subm.text = "Proceed";
    subm.click = function () {
        $(this).dialog('close');
        $('#region').val('I am willing to become a member');
        $("#tabs").tabs({ disabled: [2,3] });
        $("#tabs").tabs("option", "active", 1);
    };
    buttons.push(subm, canc);

    $("<div style='display: none;'></div>").dialog({
        autoOpen: true,
        modal: true,
        draggable: true,
        resizable: false,
        open: function (event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
        title: 'Confirmation',
        width: '600',
        show: {
            effect: "clip",
            duration: 600
        },
        hide: {
            effect: "clip",
            duration: 600
        },
        buttons: buttons
    }).html("<p>Are you sure? Membership is easy and free plus gives you access to all of PenFed's award winning products. You won't need to take any action until you are pre-approved but membership is required to refinance your student loans with us.  </p><p>If you are not interested in becoming a member, this web page will close and you will return to our website. Have questions about membership? Email us at <a class='styledlink' href='mailto:penfed@purefy.com'>penfed@purefy.com</a>.</p>").dialog("open");

}

function removeNumberClasses(index, classNames) {
    var current_classes = classNames.split(" "), // change the list into an array
        classes_to_remove = []; // array of classes which are to be removed

    $.each(current_classes, function (index, class_name) {
        // if the classname begins with bg add it to the classes_to_remove array
        if (/num.*/.test(class_name)) {
            classes_to_remove.push(class_name);
        }
    });
    // turn the array back into a string
    return classes_to_remove.join(" ");
}
$(function () {
    $('#li_graduation').append('<div id="slider-grad"></div>' +
                '<div class="slider-grad slider-cscore clearfix">' +
                            '<ul>' +
                                '<li><span>0</span></li>' +
                                '<li><span>1</span></li>' +
                                '<li><span>2</span></li>' +
                                '<li><span>3</span></li>' +
                                '<li><span>4</span></li>' +
                                '<li><span>5</span></li>' +
                              '</ul>' +
                        '</div>');
    $("#slider-grad").slider({
        range: "max",
        step: .5,
        min: 0,
        max: 5,
        value: 4,
        slide: function (event, ui) {

            $("#graduation").val(ui.value + ' Year');
            $("#graduation_in").val(ui.value * 12);

            

        }
    });

    $('#graduation').val(4 + ' Year');
});

//Forms Logic
$(document).ready(function () {
    //$('.inschool').hide();
    $('input[name="pull"]:first').prop('checked', true);
    $('input[name="contact-housing_status"]:first').prop('checked', true);
    //clear any softpull info that's not supposed to be shown
    $('#income').val('');
    $('#total-payment').val('');
    
    $('input[name="efinancing"]').click(function () {

        eFinanceRadio();

    });
    eFinanceRadio();
});



function eFinanceRadio() {
    if ($('input.Parent').prop('checked')) {

        $('._findhead').text("Find Your Rate");
        $('[id^="li_"]').show();
        $("#li_title").show();
        $('.sloan-hide').show();
        $('#li_degree').hide();
        $('#li_schoolname').hide();
        $("#type").val("");
        $('#_btnFindMyRate').attr('src', 'images/frm-btn.png');
        $('#li_schoolname label').text('Where did you go to school?');
        $('.inschool').hide();
        $('input[name="cosign-relationship"]').val('');
        $('input[name="repay"]').val('');
        $('.slider-grad').hide();
        pullHideShow();

    }
    else if ($('input.Student').prop('checked')) {

        $('._findhead').text("Find Your Rate");
        $('[id^="li_"]').show();
        $('#li_title').show();
        $('.sloan-hide').show();
        $('.slider-grad').hide();
        $('.inschool').hide();

        $('#_btnFindMyRate').attr('src', 'images/frm-btn.png');
        $('#li_schoolname label').text('Where did you go to school?');
        $('input[name="cosign-relationship"]').val('');
        $('input[name="repay"]').val('');
        pullHideShow();

    }
    else {

        $('#li_degree_in').addClass('div50');
        $('#li_degree_in').css('display', 'inline-block');
        $('input[name="repay"]').val('def');
        $("#type").val("");
        $('[id^="li_"]').not('#li_sloan').hide();
        $('input[name="cosign-relationship"]').val('parent');
        $('.slider-grad').show();
        $('.look-hide').hide();
        $('.inschool').show();
        $('.eh-email').show().visible();
        $("#fico").attr("name", "fico").val(score);

    }
    $("input[name='efinancing']").closest("span").removeClass('active');
    $("input[name='efinancing']:checked").closest("span").addClass('active');
    
}

//soft pull logic
$(document).ready(function () {

    $('#cz-ach').click(function () {
        $('input:not(:checked)').parent().removeClass("active");
        $('input:checked').parent().addClass("active");
    });

    
    $('#li_income').append('<i class="icon-info-circle" alt="" title="Please include all income from your primary employer, and include bonuses, commission, additional employment, self-employment, rental income, and any other income you may have. Do not include household income from another family member. Notice: Alimony, child support, or separate maintenance income need not be revealed if the Borrower or Cosigner does not choose to have it considered for repaying this loan." ></i> ');
    $('#li_total-payment').append('<i class="icon-info-circle" alt="" title="Please include your rent/mortgage payment, loan payments, car payments, credit card minimum payments, and any other monthly expense that may appear on your credit report." ></i> ');



    $("input[name='contact-housing_status']").click(function () {
        pullHideShow();
    });
  

    $('input[name="pull"]').click(function () {

        pullHideShow();

    });

    if ($("input[name='efinancing']:checked").val() !== 'In-school loan')
        pullHideShow();


});


function pullHideShow() {
    if (!$('input[name="pull"][value="Look it up for me"]').prop('checked')) {
        $('.look-hide').hide();
        $("#slider-cscore").show();
        $('.slider-cscore').show();
        $("#li_cscore").show();
        $("#type").val("");
        $("#fico").attr("name", "fico").val(score);
        $(".estimate-hide").show();
        $(".lh-email").invisible();
        $('.eh-email').visible();
        $('.li_state').hide();
        $('#total-payment').attr('name', 'total-payment');
        $('#contact-rent').hide();


    } else {
        $('.look-hide').show();
        $('.lh-email').visible();
        $('.eh-email').invisible();
        $("#slider-cscore").hide();
        $('.slider-cscore').hide();
        $("#li_cscore").hide();
        $("#type").val("softpull");
        $("#fico").attr("name", "not-fico").val('');
        $(".estimate-hide").hide();
        $('.li_state').show();
        $('#total-payment').attr('name', 'not-payment');
        $('#contact-rent').show();


    }
    $("input[name='contact-housing_status']").closest('span').removeClass('active');
    $("input[name='contact-housing_status']:checked").closest('span').addClass('active');
    if ($("input[name='contact-housing_status']:checked").val() === 'own') {
        $("#li_contact-rent").hide();
        
    }
    else {
        $("#li_contact-rent").show();
    }
        

    $('input[name="pull"]').closest('label').removeClass('active');
    $('input[name="pull"]:checked').closest('label').addClass('active');
}


$(document).ready(function () {

    $('.cleave-date').toArray().forEach(function (field) {
        new Cleave(field, {
            date: true,
            datePattern: ['m', 'd', 'Y']
        });
    });

    $('.cleave-zip').toArray().forEach(function (field) {
        new Cleave(field, {
            numericOnly: true,
            blocks: [5]

        });
    });

    $('.cleave-money').toArray().forEach(function (field) {
        new Cleave(field, {
            numeral: true,
            numeralThousandsGroupStyle: 'thousand',
            prefix: '$',
            noImmediatePrefix: true,
            rawValueTrimPrefix: true,
            onValueChanged: function (e) {
                field.setAttribute('data-raw', e.target.rawValue);
                // e.target = { value: '5100-1234', rawValue: '51001234' }
            }

        });
    });


});
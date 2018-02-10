$(document).ready(function(){
    $('#cms_title_div').on('click', function(){
        var editable = $(this);
    });

    $("#cms_title_div").toTextarea({
        allowHTML: false,//allow HTML formatting with CTRL+b, CTRL+i, etc.
        allowImg: false,//allow drag and drop images
        singleLine: false,//make a single line so it will only expand horizontally
        pastePlainText: true,//paste text without styling as source
        placeholder: false//a placeholder when no text is entered. This can also be set by a placeholder="..." or data-placeholder="..." attribute
      });

    $("#editor_input").toTextarea({
        allowHTML: true,//allow HTML formatting with CTRL+b, CTRL+i, etc.
        allowImg: true,//allow drag and drop images
        singleLine: false,//make a single line so it will only expand horizontally
        pastePlainText: true,//paste text without styling as source
        placeholder: false//a placeholder when no text is entered. This can also be set by a placeholder="..." or data-placeholder="..." attribute
      });

      //initialize niceSelect
      $('select').niceSelect();

      // Align icons activate
      $('.align_icons').on('click', function(){
        $('.align_icons').removeClass('active');
        $(this).addClass('active');
      });

    // Bold icon toggle
    $('#editor_input').on('keydown.toTextarea', function(e) {
        /* var key = e.which;
        if (key == 66 && (e.ctrlKey == true || e.metaKey == true)) {
            $('#bold_icon').toggleClass('active');
        } 
 */     //if(!$(this).data().disabled) {}
        var key = (e.keyCode ? e.keyCode : e.which);

        if (key == 66) { // B
            if (e.ctrlKey || e.metaKey) {
                $('#bold_icon').toggleClass('active');
                alert("Ctrl + B was pressed!!");
            }
        } else if(key == 73) { // I
            if (e.ctrlKey || e.metaKey) {
                $('#italic_icon').toggleClass('active');
                alert("Ctrl + I was pressed!!");
            }
        } else if(key == 85) { //U
            if (e.ctrlKey || e.metaKey) {
                $('#underline_icon').toggleClass('active');
                alert("Ctrl + U was pressed!!");
            }
        }
    });

   $("#bold_icon").on('click', function() {
       
        $('#bold_icon').toggleClass('active');
        $('#editor_input').focus();

         // place this within dom ready function
        function trigger_keypress() {     
            var e = jQuery.Event("keydown");
            e.which = 66; // # Some key code value
            e.ctrlKey = true;
            $("#editor_input").trigger(e);
        }

        // use setTimeout() to execute
        setTimeout(trigger_keypress, 100); 
    });
   $("#italic_icon").on('click', function() {
       
        $('#italic_icon').toggleClass('active');
        $('#editor_input').focus();

         // place this within dom ready function
        function trigger_keypress() {     
            var e = jQuery.Event("keydown");
            e.which = 73; // # Some key code value
            e.ctrlKey = true;
            $("#editor_input").trigger(e);
        }

        // use setTimeout() to execute
        setTimeout(trigger_keypress, 100); 
    });
   $("#underline_icon").on('click', function() {
       
        $('#underline_icon').toggleClass('active');
        $('#editor_input').focus();

         // place this within dom ready function
        function trigger_keypress() {     
            var e = jQuery.Event("keydown");
            e.which = 85; // # Some key code value
            e.ctrlKey = true;
            $("#editor_input").trigger(e);
        }

        // use setTimeout() to execute
        setTimeout(trigger_keypress, 100); 
    });

    $('.align_icons').on('click', function() {
        var self = $(this);
        var data = self.attr('data-align');

        if(data == 0) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_left');
        } else if (data == 1) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_center');
        } else if (data == 2) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_right');
        } else if (data == 3) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_justify');
        }
    });

    $(document).on('click', '#upload_image', function() {
        $(this).closest('.editor_tool_div_icons_container').find('#upload_img_file').click();
    });

      
     
});
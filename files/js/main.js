$(document).ready(function(){

    // Unique ID Function
    function uniqId() { /*To generate Unique Id's for the child elements*/
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }


    $('#cms_title_div').on('click', function(){
        var editable = $(this);
    });

    /* $("#cms_title_div").toTextarea({
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
      }); */

      //initialize niceSelect
      $('select').niceSelect();

      // Align icons activate
      $('.align_icons').on('click', function(){
        $('.align_icons').removeClass('active');
        $(this).addClass('active');
      });

    // Bold icon toggle
    $('#editor_input').on('keydown', function(e) {
        /* var key = e.which;
        if (key == 66 && (e.ctrlKey == true || e.metaKey == true)) {
            $('#bold_icon').toggleClass('active');
        } 
 */     //if(!$(this).data().disabled) {}
        var key = (e.keyCode ? e.keyCode : e.which);

        if (key == 66) { // B
            if (e.ctrlKey || e.metaKey) {
                $('#bold_icon').toggleClass('active');
            }
        } else if(key == 73) { // I
            if (e.ctrlKey || e.metaKey) {
                $('#italic_icon').toggleClass('active');
            }
        } else if(key == 85) { //U
            if (e.ctrlKey || e.metaKey) {
                $('#underline_icon').toggleClass('active');
            }
        }

        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }
    });

    function userselect() {
        var userSelection;
        if (window.getSelection) {
            userSelection = window.getSelection();
            var range  = userSelection.getRangeAt(0);
            console.log(range);
        }
    }
        

    $('#editor_input').on('mouseup', function(){
        userselect();
    }) 

    

   $(document).on('click', '.bold_icon', function() {

    
        $('#bold_icon').toggleClass('active');
        //$('#editor_input').blur();
        $('#editor_input').focus();

        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        /* var selObj = window.getSelection();
        var range  = selObj.getRangeAt(0);
        //var range  = selObj.anchorNode;
        
        console.log(range); */

        if (document.activeElement.id == "editor_input") {

            function trigger_keypress() {     
                document.execCommand('bold',false,null);
            }

            /* var state = document.queryCommandState ("bold");
            switch (state) {
            case true:
                // use setTimeout() to execute
                setTimeout(trigger_keypress, 100);
                break;
            case false:
                // use setTimeout() to execute
                setTimeout(trigger_keypress, 100);
                break;
            case null:
                alert ("The state of the 'bold' command is indeterminable.");
                break;
            } */

            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
            
        }

       
    });
    $(document).on('click', '.italic_icon', function() {
       
        $('#italic_icon').toggleClass('active');
        $('#editor_input').focus();

        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('italic',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100); 
        }
    });

    $(document).on('click', '.underline_icon', function() {
       
        $('#underline_icon').toggleClass('active');
        $('#editor_input').focus();

        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('underline',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });

    $(document).on('click', '.strikethrough_icon', function() {
       
        $('#strikethrough_icon').toggleClass('active');
        $('#editor_input').focus();
        
        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('strikeThrough',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });



    /* $('.align_icons').on('click', function() {
        var self = $(this);
        var data = self.attr('data-align');

        if(data == 0) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_left');
            $('#editor_input').attr('data-align', 0);
        } else if (data == 1) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_center');
            $('#editor_input').attr('data-align', 1);
        } else if (data == 2) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_right');
            $('#editor_input').attr('data-align', 2);
        } else if (data == 3) {
            $('#editor_input').removeClass(function (index, className) { // Remove all classes starting with 'align_'
                return (className.match (/(^|\s)align_\S+/g) || []).join(' ');
            });
            $('#editor_input').addClass('align_justify');
            $('#editor_input').attr('data-align', 3);
        }
    }); */



    /** Change Font-size **/   
    $(document).on('change', '#editor_font_size_select', function() {
        
        var size_value=$(this).val();
        $('#editor_input').css('font-size', size_value+'px');
    });

    /* Toggle fullscreen  */
    $('#toggle_fullscreen').on('click', function(){

        var self = $(this);
        //self.toggleClass('active');

        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
         if (document.documentElement.requestFullScreen) {  
           document.documentElement.requestFullScreen();  
            $('#ui_lhs').addClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', '100%');
         } else if (document.documentElement.mozRequestFullScreen) {  
           document.documentElement.mozRequestFullScreen();  
            $('#ui_lhs').addClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', '100%');
         } else if (document.documentElement.webkitRequestFullScreen) {  
           document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
            $('#ui_lhs').addClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', '100%');
         }  

         /* $('#ui_lhs').addClass('hidden-xs-up');
         $('#ui_rhs').css('min-width', '100%'); */
       } else {  
         if (document.cancelFullScreen) {  
           document.cancelFullScreen();  
            $('#ui_lhs').removeClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', 'auto');
         } else if (document.mozCancelFullScreen) {  
           document.mozCancelFullScreen();  
            $('#ui_lhs').removeClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', 'auto');
         } else if (document.webkitCancelFullScreen) {  
           document.webkitCancelFullScreen();  
            $('#ui_lhs').removeClass('hidden-xs-up');
            $('#ui_rhs').css('min-width', 'auto');
         }  

         /* $('#ui_lhs').removeClass('hidden-xs-up');
         $('#ui_rhs').css('min-width', 'auto'); */
       }  
    });

    /* $(document).on('keydown', function(e){
        console.log('keydown');
        var key = (e.keyCode ? e.keyCode : e.which);
        if((key == 27) && $('#toggle_fullscreen').hasClass('active')){
            console.log('escape');
            $('#toggle_fullscreen').click();
            self.removeClass('active');
        }
    }); */

    /* Generate Color Palette */
    var colorPalette = ['000000', 'F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '9E9E9E', '607D8B', '333333'];
    var forePalette = $('.fore-palette');
  
    for (var i = 0; i < colorPalette.length; i++) {
      forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + '" class="palette-item tool_icons_click_js" title="' + '#' + colorPalette[i] + '"></a>');
    }
    /* Generate Color Palette */
    

    /* Tools icon click  */
    $('.tool_icons_click_js').on('click', function(e){

        e.preventDefault();
        //var self = $(this);
        var command = $(this).data('command');
        $('#editor_input').focus();

        if($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }


        if (command == 'h1' || command == 'h2' || command == 'p' || command == 'blockquote') {
          document.execCommand('formatBlock', false, command);
        }
        else if (command == 'forecolor' || command == 'backcolor') {
          document.execCommand($(this).data('command'), false, $(this).data('value'));
        }
        /* if (command == 'createlink' || command == 'insertimage') {
           if(command == 'insertimage'){
                url = prompt('Enter the image link here: ', 'http:\/\/');
                document.execCommand($(this).data('command'), false, url);
           } */
            else if(command == 'createlink'){
                url = prompt('Enter the link here: ', 'http:\/\/');
                document.execCommand($(this).data('command'), false, url);
            }
        /* } */
        else {
            document.execCommand($(this).data('command'), false, null);
        }
    });
    /* Tools icon click  */

    
    /** Change Headings 1 -> 6 & Paragraph **/   
    $(document).on('change', '#editor_font_block_select', function() {
        
        var block_type = $(this).val();
        $('#editor_input').blur();
        $('#editor_input').focus();

        document.execCommand('formatBlock', false, block_type);
    });


    /* IMAGE DRAG AND DROP -> CONVERT TO BASE64  */
    var handleDrag = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
    };
    var handleDrop = function(e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
        //console.log(e);
        //get x and y coordinates of the dropped item
        x = e.clientX;
        y = e.clientY;
        //drops are treated as multiple files. Only dealing with single files right now, so assume its the first object you're interested in
        var file = e.dataTransfer.files[0];
        //don't try to mess with non-image files
        if (file.type.match('image.*')) {
            //then we have an image,

            //we have a file handle, need to read it with file reader!
            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                //get the data uri
                var dataURI = theFile.target.result;
                //make a new image element with the dataURI as the source
                var img = document.createElement("img");
                img.src = dataURI;


                //Insert the image at the carat

                // Try the standards-based way first. This works in FF
                if (document.caretPositionFromPoint) {
                    var pos = document.caretPositionFromPoint(x, y);
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.collapse();
                    range.insertNode(img);

                    //unique id for the inserted image
                    var uniqueId = uniqId();  
                    image=$('img[src="'+dataURI+'"]').attr('id', ''+uniqueId+'').addClass('editor_image');
                    //$( ".editor_image" ).resizable();
                }
                // Next, the WebKit way. This works in Chrome.
                else if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(x, y);
                    range.insertNode(img);

                    //unique id for the inserted image
                    var uniqueId = uniqId();  
                    image=$('img[src="'+dataURI+'"]').attr('id', ''+uniqueId+'').addClass('editor_image');
                    //$( ".editor_image" ).resizable();
                }
                else
                {
                    //not supporting IE right now.
                    console.log('could not find carat');
                }


            });
            //this reads in the file, and the onload event triggers, which adds the image to the div at the carat
            reader.readAsDataURL(file);
        }
    };

    var dropZone = document.getElementById('editor_input');
    dropZone.addEventListener('dragover', handleDrag, false);
    dropZone.addEventListener('drop', handleDrop, false);
    /* IMAGE DRAG AND DROP -> CONVERT TO BASE 64 */


     /* UPLOAD IMAGE BUTTON CLICK  */
     $(document).on('click', '.upload_image', function() {
        $('#upload_img_file').click();
    });
    /* UPLOAD IMAGE BUTTON CLICK  */
    

    /** User Image Preview **/
    var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
    var content_formData = new FormData();

    function readURL(input) {

        if (input.files && input.files[0]) {
            
            var extension = input.files[0].name.split('.').pop().toLowerCase(); //file extension from input file
            isSuccess = fileTypes.indexOf(extension) > -1;  //is extension in acceptable types
            
            if(isSuccess) {
                var reader = new FileReader();
        
                reader.onload = function (e) {
                    //$('#editor_image').attr('src', e.target.result);
                    $('#editor_input').focus();

                    //unique id for the inserted image
                    var uniqueId = uniqId();
                    
                    //console.log(e.target.result)
                    document.execCommand('insertimage', false, e.target.result);
                    image=$('img[src="'+e.target.result+'"]').attr('id', ''+uniqueId+'').addClass('editor_image');

                    //$( ".editor_image" ).resizable();
                    
                    /* $( ".editor_image" ).resizable({
                        containment: "#editor_input"
                    }); */
                };

        
                reader.readAsDataURL(input.files[0]);
                //$('.logo_file_error').removeClass('display');

                //populate formdata
                content_formData.append('content_img_file', $('#upload_img_file').prop('files')[0]);
            } else {
                 //$('.logo_file_error').addClass('display').html('<span class="fa fa-exclamation-triangle"></span> Sorry, only .jpeg, .jpg and .png files are allowed. Please try again with a different image.');
                 alert("Sorry, only JPEG, JPG, PNG and GIF files are allowed. Please try again with a different image.");
            }
        }
    }
    
    $("#upload_img_file").change(function(){ // When the file-upload-input changes
        if($(this).get(0).files.length > 0){ // only if a file is selected
            var fileSize = $(this).get(0).files[0].size; // get filesize
            if(fileSize <= 1024000) { // if filesize less than or equal to 1MB
                readURL(this); // change url
                //$('.logo_size_error').removeClass('display'); // remove error-message's display class
            } else { // show error message
                //$('.logo_size_error').addClass('display').html('<span class="fa fa-exclamation-triangle"></span> Uh-oh, file size exceeded the upload limit of 1 MB. Please try again with a different image.');
                alert("Uh-oh, file size exceeded the upload limit of 1 MB. Please try again with a different image.");
            }
          }
    });
    /** User Image Preview **/


    /* BLOCKQUOTE ISSUE FIX (Break out of the blockquote) */
    $('#editor_input').keydown(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
          var input = document.getElementById('editor_input');
      
          if (whichTag("blockquote")) {
      
            document.execCommand('InsertParagraph');
            document.execCommand('Outdent');
      
          }
        }
      });
      
      function whichTag(tagName) {
      
        var sel, containerNode;
        var tagFound = false;
      
        tagName = tagName.toUpperCase();
      
        if (window.getSelection) {
      
          sel = window.getSelection();
      
          if (sel.rangeCount > 0) {
            containerNode = sel.getRangeAt(0).commonAncestorContainer;
          }
      
        } else if ((sel = document.selection) && sel.type != "Control") {
      
          containerNode = sel.createRange().parentElement();
      
        }
      
        while (containerNode) {
      
          if (containerNode.nodeType == 1 && containerNode.tagName == tagName) {
      
            tagFound = true;
            containerNode = null;
      
          } else {
      
            containerNode = containerNode.parentNode;
      
          }
      
        }
      
        return tagFound;
      }
    /* BLOCKQUOTE ISSUE FIX (Break out of the blockquote) */

    /* GETSELECTION  */

    $('#editor_input').on('mouseup', function(e){
        
        var editor_input_width = document.getElementById("editor_input").offsetWidth;

        var selText = "";
        var cursor_x = e.clientX;
        var cursor_y = e.clientY - 125; // 125 being the height of the div + arrow etc, so that the inline editor is about the selection.

        console.log(cursor_x);
        console.log(editor_input_width);

        if(cursor_x > editor_input_width/1.5) {
            var cursor_x = editor_input_width/1.15;
        }

        console.log(cursor_x);

        if (window.getSelection) {  // all browsers, except IE before version 9
            /* if (document.activeElement && 
                    (document.activeElement.tagName.toLowerCase () == "textarea" || 
                     document.activeElement.tagName.toLowerCase () == "input")) 
            {
                var text = document.activeElement.value;
                selText = text.substring (document.activeElement.selectionStart, 
                                          document.activeElement.selectionEnd);
            }
            else { */
                var selRange = window.getSelection ();
                selText = selRange.toString ();
            /* } */

            if (selText !== "") {
                //alert (selText);
                $('.inline_toolbar').toggleClass('active');
                $('.inline_toolbar').css({"top":""+cursor_y+"px", "left": ""+cursor_x+"px"});
    
                //alert(cursor_x);
            } else {
                //alert (selText);
                $('.inline_toolbar').removeClass('active');
                //$('.inline_toolbar').toggleClass('active');
            }
        }
        else {
            if (document.selection.createRange) { // Internet Explorer
                var range = document.selection.createRange ();
                selText = range.text;
            }

            if (selText !== "") {
                //alert (selText);
                $('.inline_toolbar').toggleClass('active');
                $('.inline_toolbar').css({"top":""+cursor_y+"px", "left": ""+cursor_x+"px"});
    
                //alert(cursor_x);
            } else {
                //alert (selText);
                //$('.inline_toolbar').toggleClass('active');
            }
        }
        
    });

    /* $('#editor_input').on('click', function(){
        $('.inline_toolbar').toggleClass('active').css({});
    }); */

    /** Start of Generate Preview **/
          
    $('#save_content').on('click', function() {
        var get_editor_contents =  $("#editor_input").html();
        var get_editor_heading =  $("#cms_title_div").text();
        var editor_content = get_editor_contents;
        var editor_heading = get_editor_heading;
        localStorage.setItem('editor_content', editor_content);
        localStorage.setItem('editor_heading', editor_heading);
           
        //$(this).addClass('active');
        if((get_editor_contents !== "") || (get_editor_heading !== "")) {
            alert('Your post has been successfully saved.');
        }
        
   });

    if(localStorage.getItem('editor_heading')) {
        $('#cms_title_div').prepend(localStorage.getItem('editor_heading'));
    }
    if(localStorage.getItem('editor_content')) {
        $('#editor_input').prepend(localStorage.getItem('editor_content'));
    }

    $('#delete_content').on('click', function() {
        if (confirm('Are you sure you want to delete this post?')) {
            // Delete it!
            localStorage.removeItem('editor_content');
            localStorage.removeItem('editor_heading');
            $('#cms_title_div').html('');
            $('#editor_input').html('');
        } else {
            // Do nothing!
        }
        
    });

    setInterval(function(){ 
        //save every 5 seconds
        var get_editor_contents =  $("#editor_input").html();
        var get_editor_heading =  $("#cms_title_div").text();
        var editor_content = get_editor_contents;
        var editor_heading = get_editor_heading;
        localStorage.setItem('editor_content', editor_content);
        localStorage.setItem('editor_heading', editor_heading);
        
    }, 5000);

   /** End of Generate Preview **/
      
     
});
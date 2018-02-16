$(document).ready(function(){
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
    });

   $("#bold_icon").on('click', function() {

    
        $('#bold_icon').toggleClass('active');
        $('#editor_input').blur();
        $('#editor_input').focus();
        
        
        if (document.activeElement.id == "editor_input") {
            function trigger_keypress() {     
                document.execCommand('bold',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100); 
        }

       
    });
   $("#italic_icon").on('click', function() {
       
        $('#italic_icon').toggleClass('active');
        $('#editor_input').focus();

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('italic',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100); 
        }
    });
   $("#underline_icon").on('click', function() {
       
        $('#underline_icon').toggleClass('active');
        $('#editor_input').focus();

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('underline',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });

    $("#strikethrough_icon").on('click', function() {
       
        $('#strikethrough_icon').toggleClass('active');
        $('#editor_input').focus();

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {     
                document.execCommand('strikeThrough',false,null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });

    $("#blockquote_icon").on('click', function() {

        if(!$(this).hasClass('active')){

        } else {

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

    /* $(document).on('click', '#upload_image', function() {
        $(this).closest('.editor_tool_div_icons_container').find('#upload_img_file').click();
    }); */

    /** Change Font-size **/   
    $(document).on('change', '#editor_font_size_select', function() {
        
        var size_value=$(this).val();
        $('#editor_input').css('font-size', size_value+'px');
    });

    /* Toggle fullscreen  */
    $('#toggle_fullscreen').on('click', function(){

        var self = $(this);
        self.toggleClass('active');

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

    /* Tools icon click  */
    $('.tool_icons_click_js').on('click', function(){

        //var self = $(this);


        var command = $(this).data('command');

        $('#editor_input').focus();


        if (command == 'h1' || command == 'h2' || command == 'p' || command == 'blockquote') {
          document.execCommand('formatBlock', false, command);
        }
        if (command == 'forecolor' || command == 'backcolor') {
          document.execCommand($(this).data('command'), false, $(this).data('value'));
        }
        if (command == 'createlink' || command == 'insertimage') {
           if(command == 'insertimage'){
                url = prompt('Enter the image link here: ', 'http:\/\/');
                document.execCommand($(this).data('command'), false, url);
           }
           if(command == 'createlink'){
                url = prompt('Enter the link here: ', 'http:\/\/');
                document.execCommand($(this).data('command'), false, url);
           }
        } 
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
                }
                // Next, the WebKit way. This works in Chrome.
                else if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(x, y);
                    range.insertNode(img);
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

      
     
});
$(document).ready(function () {

    // Unique ID Function
    function uniqId() { /*To generate Unique Id's for the child elements*/
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }

    //initialize niceSelect
    $('select').niceSelect();

    // Align icons activate
    $('.align_icons').on('click', function () {
        $('.align_icons').removeClass('active');
        $(this).addClass('active');
    });

    // Bold, Italic, Underline icon toggle using key
    $('#editor_input').on('keydown', function (e) {

        var key = (e.keyCode ? e.keyCode : e.which);

        if (key == 66) { // B
            if (e.ctrlKey || e.metaKey) {
                $('#bold_icon').toggleClass('active');
            }
        } else if (key == 73) { // I
            if (e.ctrlKey || e.metaKey) {
                $('#italic_icon').toggleClass('active');
            }
        } else if (key == 85) { //U
            if (e.ctrlKey || e.metaKey) {
                $('#underline_icon').toggleClass('active');
            }
        }

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if ($('.image_editor_tools').hasClass('active')) {
            $('.image_editor_tools').removeClass('active');
        }
    });


    /* Start of Bold, Italic, Undreline, Strikethrough  */
    $(document).on('click', '.bold_icon', function () {


        $('#bold_icon').toggleClass('active');
        //$('#editor_input').blur();
        $('#editor_input').focus();

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {

            function trigger_keypress() {
                document.execCommand('bold', false, null);
            }

            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);

        }


    });
    $(document).on('click', '.italic_icon', function () {

        $('#italic_icon').toggleClass('active');
        $('#editor_input').focus();

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {
                document.execCommand('italic', false, null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });

    $(document).on('click', '.underline_icon', function () {

        $('#underline_icon').toggleClass('active');
        $('#editor_input').focus();

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {
                document.execCommand('underline', false, null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });

    $(document).on('click', '.strikethrough_icon', function () {

        $('#strikethrough_icon').toggleClass('active');
        $('#editor_input').focus();

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }

        if (document.activeElement.id == "editor_input") {
            // place this within dom ready function
            function trigger_keypress() {
                document.execCommand('strikeThrough', false, null);
            }
            // use setTimeout() to execute
            setTimeout(trigger_keypress, 100);
        }
    });
    /* Start of Bold, Italic, Undreline, Strikethrough  */

    /** Change Font-size **/
    $(document).on('change', '#editor_font_size_select', function () {

        var size_value = $(this).val();
        $('#editor_input').css('font-size', size_value + 'px');
    });
    /** Change Font-size **/

    /* Toggle fullscreen  */
    $('#toggle_fullscreen').on('click', function () {

        var self = $(this);

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
        }
    });

    /* Generate Color Palette */
    var colorPalette = ['000000', 'F44336', 'E91E63', '9C27B0', '673AB7', '3F51B5', '2196F3', '03A9F4', '00BCD4', '009688', '4CAF50', '8BC34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800', 'FF5722', '795548', '9E9E9E', '607D8B', '333333'];
    var forePalette = $('.fore-palette');

    for (var i = 0; i < colorPalette.length; i++) {
        forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + '" class="palette-item tool_icons_click_js" title="' + '#' + colorPalette[i] + '"></a>');
    }
    /* Generate Color Palette */


    /* Tools icon click  */
    $('.tool_icons_click_js').on('click', function (e) {

        e.preventDefault();
        //var self = $(this);
        var command = $(this).data('command');
        $('#editor_input').focus();

        if ($('.inline_toolbar').hasClass('active')) {
            $('.inline_toolbar').removeClass('active');
        }


        if (command == 'h1' || command == 'h2' || command == 'p' || command == 'blockquote') {
            document.execCommand('formatBlock', false, command);
        } else if (command == 'forecolor' || command == 'backcolor') {
            document.execCommand($(this).data('command'), false, $(this).data('value'));
        } else if (command == 'createlink' || command == 'insertimage') {
            if (command == 'insertimage') {
                url = prompt('Enter the image link here: ', 'http:\/\/');

                if (url === null) {
                    // Do nothing
                } else if (url == '') {
                    // Do nothing
                } else if (url == 'http://') {
                    // Do nothing
                } else {
                    document.execCommand($(this).data('command'), false, url);

                    //unique id for the inserted image
                    var uniqueId = uniqId();

                    //console.log(e.target.result)
                    document.execCommand('insertimage', false, e.target.result);
                    image = $('img[src="' + url + '"]').attr('id', '' + uniqueId + '').addClass('editor_image');
                }
            } else if (command == 'createlink') {
                url = prompt('Enter the link here: ', 'http:\/\/');
                if (url === null) {
                    // Do nothing
                } else if (url == '') {
                    // Do nothing
                } else if (url == 'http://') {
                    // Do nothing
                } else {
                    document.execCommand($(this).data('command'), false, url);
                }

            }
        } else {
            document.execCommand($(this).data('command'), false, null);
        }
    });
    /* Tools icon click  */


    /** Change Headings 1 -> 6 & Paragraph **/
    $(document).on('change', '#editor_font_block_select', function () {

        var block_type = $(this).val();
        $('#editor_input').blur();
        $('#editor_input').focus();

        document.execCommand('formatBlock', false, block_type);
    });
    /** Change Headings 1 -> 6 & Paragraph **/


    /* IMAGE DRAG AND DROP -> CONVERT TO BASE64  */
    var handleDrag = function (e) {
        //kill any default behavior
        e.stopPropagation();
        e.preventDefault();
    };
    var handleDrop = function (e) {
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
            reader.onload = (function (theFile) {
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
                    image = $('img[src="' + dataURI + '"]').attr('id', '' + uniqueId + '').addClass('editor_image');
                    //$( ".editor_image" ).resizable();
                }
                // Next, the WebKit way. This works in Chrome.
                else if (document.caretRangeFromPoint) {
                    range = document.caretRangeFromPoint(x, y);
                    range.insertNode(img);

                    //unique id for the inserted image
                    var uniqueId = uniqId();
                    image = $('img[src="' + dataURI + '"]').attr('id', '' + uniqueId + '').addClass('editor_image');
                    //$( ".editor_image" ).resizable();
                } else {
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
    $(document).on('click', '.upload_image_desktop', function () {
        $('#upload_img_file').click();
    });

    $(document).on('click', '.upload_image_open_modal', function () {
        $(this).toggleClass('active');
        $('.image_modal_container').toggleClass('active');
    });
    /* UPLOAD IMAGE BUTTON CLICK  */

    /* Change font  */
    $(document).on('change', '#editor_font_family', function () {
        var font_family = $(this).val();
        $('#editor_input').css('font-family', font_family);
    });
    /* Change font  */



    /** User Image Preview **/
    var fileTypes = ['jpg', 'jpeg', 'png', 'gif'];
    var content_formData = new FormData();

    function readURL(input) {

        if (input.files && input.files[0]) {

            var extension = input.files[0].name.split('.').pop().toLowerCase(); //file extension from input file
            isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

            if (isSuccess) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    //$('#editor_image').attr('src', e.target.result);
                    $('#editor_input').focus();

                    //unique id for the inserted image
                    var uniqueId = uniqId();

                    //console.log(e.target.result)
                    document.execCommand('insertimage', false, e.target.result);
                    image = $('img[src="' + e.target.result + '"]').attr('id', '' + uniqueId + '').addClass('editor_image');
                };


                reader.readAsDataURL(input.files[0]);
                //$('.logo_file_error').removeClass('display');

                //populate formdata
                content_formData.append('content_img_file', $('#upload_img_file').prop('files')[0]);
            } else {
                alert("Sorry, only JPEG, JPG, PNG and GIF files are allowed. Please try again with a different image.");
            }
        }
    }

    $("#upload_img_file").change(function () { // When the file-upload-input changes
        if ($(this).get(0).files.length > 0) { // only if a file is selected
            var fileSize = $(this).get(0).files[0].size; // get filesize
            if (fileSize <= 1024000) { // if filesize less than or equal to 1MB
                readURL(this); // change url

                $('#upload_img_file').val(''); // Clear uploaded file to prevent the error of the same image not being shown when deleted and uploaded again.
            } else { // show error message
                alert("Uh-oh, file size exceeded the upload limit of 1 MB. Please try again with a different image.");
            }
        }
    });
    /** User Image Preview **/


    /* BLOCKQUOTE ISSUE FIX (Break out of the blockquote) */
    $('#editor_input').keydown(function (e) {
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
    $('#editor_input').on('mouseup', function (e) {

        var editor_input_width = document.getElementById("editor_input").offsetWidth;

        var selText = "";
        var cursor_x = e.clientX;
        var cursor_y = e.clientY - 125; // 125 being the height of the div + arrow etc, so that the inline editor is about the selection.

        if (window.getSelection) { // all browsers, except IE before version 9

            var selRange = window.getSelection();
            var selText = selRange.toString();

            /*create an element before the selection to get the position*/
            var oRange = selRange.getRangeAt(0); //get the text range
            var oRect = oRange.getBoundingClientRect();

            var cursor_y = oRect.top - 105;
            var cursor_x = oRect.left;

            if (cursor_x > editor_input_width / 1.05) {
                var cursor_x = editor_input_width / 1.05;
            }

            if (selText !== "") {
                //alert (selText);
                $('.inline_toolbar').addClass('active');
                $('.inline_toolbar').css({
                    "top": "" + cursor_y + "px",
                    "left": "" + cursor_x + "px"
                });

            } else {
                $('.inline_toolbar').removeClass('active');
            }
        } else {
            if (document.selection.createRange) { // Internet Explorer
                var range = document.selection.createRange();
                var selText = range.text;
            }

            if (selText !== "") {
                //alert (selText);
                $('.inline_toolbar').toggleClass('active');
                $('.inline_toolbar').css({
                    "top": "" + cursor_y + "px",
                    "left": "" + cursor_x + "px"
                });

            } else {

            }
        }

    });

    /** Start of Save content **/
    $('#save_content').on('click', function () {
        var get_editor_contents = $("#editor_input").html();
        var get_editor_heading = $("#cms_title_div").text();
        var get_content_style = $("#editor_input").attr('style');
        var editor_content = get_editor_contents;
        var editor_heading = get_editor_heading;
        var content_style = get_content_style;
        localStorage.setItem('editor_content', editor_content);
        localStorage.setItem('editor_heading', editor_heading);
        localStorage.setItem('content_style', content_style);

        //$(this).addClass('active');
        if ((get_editor_contents !== "") || (get_editor_heading !== "")) {
            alert('Your post has been successfully saved.');
        }

    });

    if (localStorage.getItem('editor_heading')) {
        var heading = localStorage.getItem('editor_heading');
        $('#cms_title_div').prepend(heading);
    }
    if (localStorage.getItem('editor_content')) {
        var content = localStorage.getItem('editor_content');
        $('#editor_input').prepend(content);
    }
    if (localStorage.getItem('content_style')) {
        var style = localStorage.getItem('content_style');
        $('#editor_input').attr('style', style);
    }

    $('#delete_content').on('click', function () {
        if (confirm('Are you sure you want to delete this post?')) {
            // Delete it!
            localStorage.removeItem('editor_content');
            localStorage.removeItem('editor_heading');
            localStorage.removeItem('content_style');
            $('#cms_title_div').html('');
            $('#editor_input').html('');
            $('#editor_input').attr('style', '');
        } else {
            // Do nothing!
        }

    });

    setInterval(function () {
        //save every 5 seconds
        var get_editor_contents = $("#editor_input").html();
        var get_editor_heading = $("#cms_title_div").text();
        var get_content_style = $("#editor_input").attr('style');
        var editor_content = get_editor_contents;
        var editor_heading = get_editor_heading;
        var content_style = get_content_style;
        localStorage.setItem('editor_content', editor_content);
        localStorage.setItem('editor_heading', editor_heading);
        localStorage.setItem('content_style', content_style);

        // Chrome image localstorage being saved repeatedly bug reason: 2 windows were open and one of them had the image in it!!

    }, 5000);

    /** End of Save content **/


    /* Image Editing */
    $(document).on('click', '.editor_image', function () {
        image_id = $(this).attr('id');
        var position = $(this).offset();

        var cursor_y = position.top - 115;

        $('.image_editor_tools').toggleClass('active').css({
            "top": "" + cursor_y + "px",
            "left": "" + position.left + "px"
        });
    });

    $(document).on('click', '.full_width_image', function () {
        if ($('.image_editor_tools').hasClass('active')) {
            $('#' + image_id + '').css({
                'width': '100%',
                'height': 'auto'
            });
        }
    });


    $(document).on('click', '.half_width_image', function () {
        if ($('.image_editor_tools').hasClass('active')) {
            $('#' + image_id + '').css({
                'width': '50%',
                'height': 'auto'
            });
        }
    });

    $(document).on('click', '.quarter_width_image', function () {
        if ($('.image_editor_tools').hasClass('active')) {
            $('#' + image_id + '').css({
                'width': '25%',
                'height': 'auto'
            });
        }
    });

    $(document).on('click', '.original_width_image', function () {
        if ($('.image_editor_tools').hasClass('active')) {
            $('#' + image_id + '').css({
                'width': 'auto',
                'height': 'auto'
            });
        }
    });

    $(document).on('click', '.delete_image', function () {
        if ($('.image_editor_tools').hasClass('active')) {
            $('#' + image_id + '').remove();
            $('.image_size_text').removeClass('active');
            $('.image_editor_tools').removeClass('active');
        }
    });

    $(document).on('click', '.image_size_text', function () {
        $('.image_size_text').removeClass('active');
        $(this).addClass('active')
    })

    $(document).on('change paste keyup', '.input_image_width', function () {
        var width_value = $(this).val();

        if (width_value.match(/^\d+$/) && width_value.length >= 2) {
            if ($('.image_editor_tools').hasClass('active')) {
                $('#' + image_id + '').css('width', width_value);
            }
        }
    });

    $(document).on('change paste keyup', '.input_image_height', function () {
        var height_value = $(this).val();

        if (height_value.match(/^\d+$/) && height_value.length >= 2) {
            if ($('.image_editor_tools').hasClass('active')) {
                $('#' + image_id + '').css('height', height_value);
            }
        }
    });
    /* Image Editing */


});
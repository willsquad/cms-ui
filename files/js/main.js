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
    $('#editor_input').keyup("b",function(e) {
        if(e.ctrlKey){
            $('.bold_icon').toggleClass('active');
        }
    });

      
     
});
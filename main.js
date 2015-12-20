
$(function() {

  // hide the story from view
  $("#story").hide();
  $('#rickroll').hide();
  $('#btn-play').hide();
  

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {
    // grab the values from the input boxes, then append them to the DOM
    $(".person").empty().append($("input.person").val());
    var value = $("input.person").val();
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".company").empty().append($("input.company").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

    var characters = ['Luke', 'Leia', 'Han', 'Chewbacca', 'Chewie', 'Anakin', 'Padme','Yoda', 'Boba Fett'];
    for(i=0; i<characters.length; i++){
        if (value === characters[i])
        {
            $("#rickroll").show();

  
    // $('#btn-play').show();
    $('#banner').attr("src", "https://machita75.files.wordpress.com/2012/01/rickrolled.jpg")
    $('#rickroll').html($('<iframe id= "player" src="https:/player.vimeo.com/video/77091919?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'));


            // empty the form's values
    $(':input').val('');

        // hide the Questions
    $("#questions").hide();
        }
        else {

    $('#story').toggle();
    $('#rickroll').hide();
    $('#btn-play').toggle();

            // empty the form's values
    $(':input').val('');

        // hide the Questions
    $("#questions").hide();
        
    }
   
    

    // array.push(value);
    //   for(j=0; j<characters.length; j++){
    //   if (array[i] === character[i]) {
    //     $("#rickroll").show();
    //     $('#story').hide();
    //   }
    //   else {
    //     $('#story').show();
    //     $('#rickroll').hide();

    //         // empty the form's values
    //   $(':input').val('');

    //     // hidee theestions
    //   $("#questions").hide();
    //   }
    // }
    // }
// if (value !== 'Luke'){
//  $('#story').show();
//     $('#rickroll').hide();
//     $('#btn-play').show();

//             // empty the form's values
//     $(':input').val('');

//         // hide the Questions
//     $("#questions").hide();

// }else{

    // $("#rickroll").show();
 //    $('#story').hide();
 //    // $('#btn-play').show();
 //    $('#banner').attr("src", "https://machita75.files.wordpress.com/2012/01/rickrolled.jpg")
 //    $('#rickroll').html($('<iframe id= "player" src="https:/player.vimeo.com/video/77091919?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'));


 //            // empty the form's values
 //    $(':input').val('');

 //        // hide the Questions
 //    $("#questions").hide();
}
      
    // // empty the form's values
    // $(':input').val('');

    // // hide the questions
    // $("#questions").hide();

  });

});

$("#btn-play").click(function(e) {
  $("#questions").show();
  $("#story").hide();
  $("#rickroll").hide();
  $("#btn-play").hide();
});


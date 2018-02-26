//define functions here
function getIt(){

  alert("hey!")
}

function frameIt(){
  $( "img" ).addClass( "tasty" );

}

// function pressIt(){
//   if (e.which === 71) {
//       alert("You pressed 'g'!")
//     }
//   }


function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}
function submitIt(){
  alert("Your form is going to be submitted now.")
}
$(document).ready(function(){

  $('p').on('click', getIt())

  $("img").load(frameIt())



  $("form").submit(submitIt())
});

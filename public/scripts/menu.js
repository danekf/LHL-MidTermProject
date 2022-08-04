$(document).ready(function(){
  $(".fa-angles-down").on("click",
  (event) => {
    $("header nav ul").toggleClass("open");
  })
});

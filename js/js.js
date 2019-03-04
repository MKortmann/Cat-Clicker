"use strict";

jQuery(document).ready(function($) {

  let nameCat01 = "Lina";
  let nameCat02 = "Sabrina";

  $("#cat01").text(nameCat01);
  $("#cat02").text(nameCat02);

  let clicks = 0;
  let clicks02 = 0;
  $(".imageCat01")
    .click(function() {
      clicks++;
      $("#clicks").text(nameCat01 + " number of clicks: " + clicks);
    })

  $(".imageCat02")
    .click(function() {
      clicks02++;
      $("#clicks02").text(nameCat02 + " number of clicks: " + clicks02);

    })

});

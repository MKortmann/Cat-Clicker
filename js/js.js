"use strict";

jQuery(document).ready(function($) {

  let clicks = 0;
  $(".image")
    .click(function() {
      clicks++;
      $("#clicks").text(clicks);
    })

});

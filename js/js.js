"use strict";

jQuery(document).ready(function($) {

/**Declaring an array with the name of the cats*/
  let nameCats = ["Lina", "Sabrina", "Odof", "Bob", "Bib",
      "Carla", "Nata", "Flip", "Flop","Tat"];
/**Declaring an array, filled with 0. To display the number of
clicks of each cat.*/
  let clicks = new Array(10).fill(0);

/*Let's fill the selection box with the name of the cats*/
$("select option")
  .each(function(i, element) {
    element.innerText = nameCats[i];
  })

/**If you change the select box: update image and update text*/
  $("select")
     .change(function() {
       $(".image")[0].src = "./images/" + $("select")[0].value + ".jpg";
       $(".clicks").text(nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + clicks[$("select")[0].selectedIndex]);

     })

/*Initialization update!*/
 $(".clicks").text(nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + clicks[$("select")[0].selectedIndex]);

 /*Count the clicks at specific image and display it*/
  $(".image")
    .click(function() {
      clicks[$("select")[0].selectedIndex]++;
      $(".clicks").text(nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + clicks[$("select")[0].selectedIndex]);
    })
});

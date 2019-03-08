"use strict";

jQuery(document).ready(function($) {

  let model = {
    /**Declaring an array with the name of the cats*/
   nameCats: ["Lina", "Sabrina", "Odof", "Bob", "Bib",
      "Carla", "Nata", "Flip", "Flop","Tat"],
    /**Declaring an array, filled with 0. To display the number of
    clicks of each cat.*/
    clicks: new Array(10).fill(0)
  };

  let octopus = {
    addElementList: function(selection) {
      selection
      .each(function(i, element) {
        element.innerText = model.nameCats[i];
      })
    },

    updateText: function(clicks, selection) {
      clicks.text(model.nameCats[selection.selectedIndex]  + " number of clicks: "
        + model.clicks[selection.selectedIndex]);
    }
  }

/*Let's fill the selection box with the name of the cats*/
  let view = {

  initSelectionBox: function() {
    let selection = $("select option");
    octopus.addElementList(selection);
  },

  render: function() {
    /*Initialization update!*/
    let clicks = $(".clicks");
    let selection = $("select")[0];
    octopus.updateText(clicks, selection);

  }
};

view.initSelectionBox();
/**If you change the select box: update image and update text*/
  $("select")
     .change(function() {
       $(".image")[0].src = "./images/" + $("select")[0].value + ".jpg";
       $(".clicks").text(model.nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + model.clicks[$("select")[0].selectedIndex]);

     })



 /*Count the clicks at specific image and display it*/
  $(".image")
    .click(function() {
      model.clicks[$("select")[0].selectedIndex]++;
      $(".clicks").text(model.nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + model.clicks[$("select")[0].selectedIndex]);
    })
});

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
    addElementList: function(selectionOption) {
      selectionOption
      .each(function(i, element) {
        element.innerText = model.nameCats[i];
      })
    },

    updateSelectionBox: function(selectionBox, clicks, selection) {
      /**If you change the select box: update image and update text*/
        selectionBox
           .change(function() {
             clicks.text(model.nameCats[selection.selectedIndex]  +
               " number of clicks: " + model.clicks[selection.selectedIndex]);
           })
    },

    updateText: function(clicks, selection) {
      clicks.text(model.nameCats[selection.selectedIndex]  + " number of clicks: "
        + model.clicks[selection.selectedIndex]);
    },

    clicks: function(selection, clicks) {

        model.clicks[selection.selectedIndex]++;
        clicks.text(model.nameCats[$("select")[0].selectedIndex]  + " number of clicks: "
        + model.clicks[selection.selectedIndex]);
        // $(".clicks").text(model.nameCats[$("select")[0].selectedIndex]  + " number of clicks: " + model.clicks[$("select")[0].selectedIndex]);

    }
  }

/*Let's fill the selection box with the name of the cats*/
  let view = {

  initSelectionBox: function() {
    let selectionOption = $("select option");
    octopus.addElementList(selectionOption);
  },

  changeSelectionBox: function() {
    let selectionBox = $("select");
    let clicks = $(".clicks");
    let selection = $("select")[0];
    $(".image")[0].src = "./images/" + $("select")[0].value + ".jpg";
    octopus.updateSelectionBox(selectionBox, clicks, selection);
  },

  render: function() {
    /*Initialization update!*/
    let clicks = $(".clicks");
    let selection = $("select")[0];
    octopus.updateText(clicks, selection);
  },

  clicks: function() {
    /*Count the clicks at specific image and display it*/
     let image = $(".image")[0];
     let selection = $("select")[0];
     let clicks = $(".clicks");
     octopus.clicks(selection, clicks);
  }
};

view.initSelectionBox();
view.render();
$("select").click(view.changeSelectionBox);
$(".image").click(view.clicks);


});

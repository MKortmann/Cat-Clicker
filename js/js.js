"use strict";

jQuery(document).ready(function($) {

  /**You have here the model object responsible to
  get the data: array of cats and an empty array that
  will store the number of clicked done in each cat*/
  let model = {
    /**Declaring an array with the name of the cats*/
    nameCats: ["Lina", "Sabrina", "Odof", "Bob", "Bib",
      "Carla", "Nata", "Flip", "Flop", "Tat"
    ],
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
          clicks.text(model.nameCats[selection.selectedIndex] +
            " number of clicks: " + model.clicks[selection.selectedIndex]);
        })
    },
    updateText: function(clicks, selection) {
      clicks.text(model.nameCats[selection.selectedIndex] + " number of clicks: " +
        model.clicks[selection.selectedIndex]);
    },

    clicks: function(selection, clicks) {
      model.clicks[selection.selectedIndex]++;
      clicks.text(model.nameCats[selection.selectedIndex] + " number of clicks: " +
        model.clicks[selection.selectedIndex]);
    }
  }

  /*Let's fill the selection box with the name of the cats*/
  let view = {

    selection: $("select")[0],
    selectionOption: $("select option"),
    selectionBox: $("select"),
    clicks: $(".clicks"),

    /**This function start the program! It add the event listener
    and initialize the selectbox and render the image*/
    init: function() {
      $("select").click(view.changeSelectionBox);
      $(".image").click(view.clicked);

      view.initSelectionBox();
      view.render();
    },
    initSelectionBox: function() {
      octopus.addElementList(view.selectionOption);
    },

    changeSelectionBox: function() {
      /**Updating the image directly here*/
      $(".image")[0].src = "./images/" + view.selection.value + ".jpg";
      octopus.updateSelectionBox(view.selectionBox, view.clicks, view.selection);
    },
    render: function() {
      /*Initialization update!*/
      octopus.updateText(view.clicks, view.selection);
    },
    clicked: function() {
      /*Count the clicks at specific image and display it*/
      // let clicks = $(".clicks");
      octopus.clicks(view.selection, view.clicks);
    }
  };
  /*Make it runs*/
  view.init();
});

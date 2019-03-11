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
    /**Fill the element of the selection list*/
    addElementList: function(selectionOption) {
      selectionOption
        .each(function(i, element) {
          element.innerText = model.nameCats[i];
        })
    },
    /**If you change the image, update the text*/
    updateText: function(clicks, selection) {
      clicks.text(model.nameCats[selection.selectedIndex] + " number of clicks: " +
        model.clicks[selection.selectedIndex]);
    },
    /**if you clicked, update the data and the text*/
    clicks: function(selection, clicks) {
      model.clicks[selection.selectedIndex]++;
      this.updateText(clicks, selection);
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
      $("select").click(view.render);
      $(".image").click(view.clicked);

      view.initSelectionBox();
      view.render();
    },
    /**this function is called only 1 time!*/
    initSelectionBox: function() {
      octopus.addElementList(view.selectionOption);
    },
    render: function() {
      /*Update the image!*/
      $(".image")[0].src = "./images/" + view.selection.value + ".jpg";
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

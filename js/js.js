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
    clicks: new Array(10).fill(0),
    ImageUrl: ["./images/Cat01.jpg","./images/Cat02.jpg","./images/Cat03.jpg",
      "./images/Cat04.jpg","./images/Cat05.jpg","./images/Cat06.jpg",
      "./images/Cat07.jpg","./images/Cat08.jpg","./images/Cat09.jpg",
      "./images/Cat10.jpg"],
    proMode: false
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
      this.proMode === true ?  view.displayPro() : "";
    },
    /**if you clicked, update the data and the text*/
    clicks: function(selection, clicks) {
      model.clicks[selection.selectedIndex]++;
      this.updateText(clicks, selection);
      this.proMode === true ?  view.displayPro() : "";
    },
    setPromode: function() {
      this.proMode = true;
    },
    getName: function(selection) {
      return model.nameCats[selection.selectedIndex];
    },
    getUrl: function(selection) {
      return model.ImageUrl[selection.selectedIndex];
    },
    getClicks: function(selection) {
      return model.clicks[selection.selectedIndex];
    },
    save: function(selection, inputName, inputUrl, inputClicked) {
      model.nameCats[selection.selectedIndex] = inputName.val();
      model.ImageUrl[selection.selectedIndex] = inputUrl.val();
      model.clicks[selection.selectedIndex] = inputClicked.val();
    }

  }

  /*Let's fill the selection box with the name of the cats*/
  let view = {

    selection: $("select")[0],
    selectionOption: $("select option"),
    selectionBox: $("select"),
    clicks: $(".clicks"),
    inputName: $("#idName"),
    inputUrl: $("#idImageURL"),
    inputClicked: $("#idClicks"),

    /**This function start the program! It add the event listener
    and initialize the selectbox and render the image*/
    init: function() {
      $("select").click(view.render);
      $(".image").click(view.clicked);
      $(".bProMode").click(view.displayPro);
      $(".bSave").click(view.save);
      /**I know that it is better to implement in css, however
      I want to practice and do it with jQuery  */
      $("#input").css("display","none");

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
    },
    displayPro: function() {
      octopus.setPromode();
      $("#input").css("display","inline");

      view.inputName.val(octopus.getName(view.selection));
      view.inputUrl.val(octopus.getUrl(view.selection));
      view.inputClicked.val(octopus.getClicks(view.selection));
    },
    save: () => {
      octopus.save(view.selection, view.inputName, view.inputUrl, view.inputClicked);
      /*Initialization update!*/
      octopus.updateText(view.clicks, view.selection);
    }
  };
  /*Make it runs*/
  view.init();
});

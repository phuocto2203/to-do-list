$(document).ready(() => {
  //Set date for to-do-list
  const now = new Date();
  var dateDisplay = now.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  //Display date
  $(".app__date").text(dateDisplay);

  let list = []; //create an array to store list item
  let inputText = "";
  let toDoList = $("#menu-list");
  let refreshButton = $(".app__refresh");
  let addButton = $(".app__add-to-do__button");

  refreshButton.click(() => {
    location.reload();
  });


  //add list
  const addItem = () => {
    for (var i = 0; i < list.length; i++) {
      let itemToAdd = list[i];
      var stringToAdd = `<li class="app__to-do-item"><input type="checkbox" class="app__to-do-checkbox"/><label for="to-do-item" class="app__to-do-label">
                        ${itemToAdd}
                        </label><button type = "button" class="app__to-do-trash"> <i class="far fa-trash-alt"> </i></button></li>`;
    }
    toDoList.append(stringToAdd);
  };

  //check Item
  $(document).on("change", ".app__to-do-checkbox", function (event) {
    if ($(this).is(":checked")) {
      $(this).next().css("text-decoration", "line-through");
    } else {
      $(this).next().css("text-decoration", "none");
    }
  });

  //add to-do function
  addButton.click(() => {
    inputText = $(".app__add-to-do__text").val();
    if (inputText === "") {
      console.log("Nothing to add");
    } else {
      list.push(inputText);
      addItem();
    }
    $(".app__add-to-do__text").val(""); //clear text input
  });

  //delete Item
  $(document).on("click", ".app__to-do-trash", function (event) {
    for(var i = 1; i <= $(".app__to-do-item").length; i++){
      
      $(this).parent().fadeOut(500, ()=>{
        $(this).parent().remove()
      });
      
    }
    list = list.filter((item)=>( !$(this).prev().text().includes(item) ));
    console.log(list);
  });
});

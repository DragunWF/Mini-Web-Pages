$(document).ready(function () {
  const hiddenContents = [".content", ".container"];
  const checkList = function () {
    if (list_count == 0)
      $("#main-list").append('<li id="placeholder">None</li>');
  };
  let list_count = 0;

  for (content of hiddenContents) {
    $(content).hide();
  }

  $(".content").slideDown(1500, () => {
    $(".container").fadeIn(1000);
  });

  checkList();

  const empty_input_error = "Please type in something in the input field";
  const max_list_error = "You have reached the maximum limit";
  $("#add").click(() => {
    const text = $("#input-field").val();
    if (list_count < 5 && text.length > 0) {
      if (list_count == 0) $("#placeholder").remove();
      list_count++;
      $("#main-list").append(`<li id="list-${list_count}">${text}</li>`);
      $("#input-field").val("");
    } else {
      const error_msg = text.length > 0 ? max_list_error : empty_input_error;
      alert(error_msg);
    }
  });

  $("#remove").click(() => {
    if (list_count > 0) {
      $(`#list-${list_count}`).remove();
      list_count--;
      checkList();
    } else alert("You have nothing to remove");
  });
});

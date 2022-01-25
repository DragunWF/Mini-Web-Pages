$(document).ready(function () {
  const hiddenContents = [".content", ".container"];

  for (content of hiddenContents) {
    $(content).hide();
  }

  $("#submit").click(() => {
    if ($("#input-textarea").val()) {
      if (!$("#input-name").val()) $("#input-name").val("Anonymous");
      $("#submit").attr("type", "submit");
    } else alert("Please enter your message");
  });

  $("#reset").click(() => {
    $("#input-name").val("");
    $("#input-textarea").val("");
  });

  $(".content").slideDown(1500, () => {
    $(".container").fadeIn(1250);
  });
});

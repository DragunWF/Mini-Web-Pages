$(document).ready(function () {
  const hiddenContents = [".content", ".container"];
  let counter = 0;

  for (content of hiddenContents) {
    $(content).hide();
  }

  function updateCounter() {
    $("#counter").text(counter);
  }

  $(".content").slideDown(2000, () => {
    $(".container").fadeIn(1000);
  });

  $("#increase").click(() => {
    counter++;
    updateCounter();
  });

  $("#decrease").click(() => {
    counter--;
    updateCounter();
  });

  $("#reset").click(() => {
    counter = 0;
    updateCounter();
  });
});

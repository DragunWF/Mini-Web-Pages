$(document).ready(function () {
  const svgs = [
    "diamond-sunset",
    "polka-dots",
    "protruding-squares",
    "repeating-chevrons",
    "vanishing-stripes",
  ];
  let index = 0;

  const hiddenContents = [".container", ".content"];

  for (content of hiddenContents) {
    $(content).hide();
  }

  $("#next").click(() => {
    index++;
    if (index > svgs.length - 1) index = 0;
    $(".content").css("background-image", `url("svgs/${svgs[index]}.svg")`);
  });
  $("#back").click(() => {
    index--;
    if (index < 0) index = 4;
    $(".content").css("background-image", `url("svgs/${svgs[index]}.svg")`);
  });

  $(".content").css("background-image", `url("svgs/${svgs[0]}.svg")`);
  $(".content").slideDown(1500, () => {
    $(".container").fadeIn(1000);
  });
});

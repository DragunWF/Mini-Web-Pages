$(document).ready(function () {
  const svgs = [
    "diamong-sunset",
    "polka-dots",
    "slanted-gradient",
    "spectrum-gradient",
    "vanishing-stripes",
  ];
  let index = 0;

  const hiddenContents = [
    ".container",
    ".background-back",
    ".background-current",
    ".background-next",
  ];

  for (content of hiddenContents) {
    $(content).hide();
  }

  $("#next").click(() => {
    index++;
    if (index > svgs.length - 1) index = 0;
    $(".background-current").animate(
      {
        background: url(`svgs/${svgs[index]}.svg`),
      },
      1000
    );
  });
  $("#back").click(() => {
    index--;
    if (index < 0) index = 4;
  });

  $(".background-current").animate({
    // backgroundImage: `url(svgs/${svgs[index]}.svg)`,
    background: "#ffffff",
  });
  $(".background-current").show();

  $(".container").slideDown(1500, () => {
    $(".container-buttons").fadeIn(1000);
  });
});

// Note: Can't animate the background, Must rely on a different method
// Changed the href attribute of the images

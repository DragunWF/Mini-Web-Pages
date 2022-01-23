$(document).ready(function () {
  const hiddenContents = [".content", ".container"];
  const images = [
    ["nature", "A Sight of Nature"],
    ["camera", "Camera Stand"],
    ["houses", "Town Overview"],
    ["bird", "A Peculiar Bird"],
    ["plant", "An Interesting Plant"],
    ["room", "A Wonderful Living Room"],
  ]; // [src, title]
  let random_number = 0;
  let previous_number = 0;

  $("#image-heading").text(images[0][1]);
  $("#main-image").attr("src", `img/${images[0][0]}.jpg`);

  for (content of hiddenContents) {
    $(content).hide();
  }

  $(".content").slideDown(1500, () => {
    $(".container").fadeIn(1000);
  });

  $("#roll").click(() => {
    while (true) {
      random_number = Math.floor(Math.random() * images.length);
      if (random_number !== previous_number) break;
    }
    previous_number = random_number;
    console.log(random_number);
    $("#main-image").attr("src", `img/${images[random_number][0]}.jpg`);
    $("#image-heading").text(images[random_number][1]);
  });

  $("#download").click(() => {
    $("#download").attr("href", `img/${images[random_number][0]}.jpg`);
    $("#download").attr("download", `${images[random_number][0]}.jpg`);
  });
});

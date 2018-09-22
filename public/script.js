var $orbs = $(".orbs span");
$(".end-right").css("left", "-10%");
$(".end-left").css("left", "110%");
$orbs.velocity(
  { top: "-300px", scaleX: ".2", scaleY: ".2", color: "#990000" },
  0
);
var orb = 0;
var numOrbs = $orbs.length;

$(".end-right").velocity({ left: "24%" }, "easeOutExpo", 1500);
$(".end-left").velocity({ left: "59%" }, "easeOutExpo", 1500);

dropOrbs = function() {
  $orbs
    .eq(orb)
    .velocity({ top: "90px" }, 500)
    .velocity({ scaleX: 1, scaleY: 1, color: "#fff" }, 500)
    .css("position", "relative");
  orb = orb + 1;
  if (orb < numOrbs) {
    setTimeout(dropOrbs, 500);
  } else {
    setTimeout(function() {
      $(".glow").velocity({ opacity: 1 }, 1000);
    }, 500);
    setTimeout(function() {
      $(".card-layout").velocity({ opacity: 1 }, 1000);
    }, 1000);
  }
};

setTimeout(dropOrbs, 500);

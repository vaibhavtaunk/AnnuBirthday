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
      $(".text-carousel").velocity({ opacity: 1 }, 1000);
    }, 500);
    setTimeout(function() {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    }, 1000);
    setTimeout(function() {
      $(".card-layout").velocity({ opacity: 1 }, 1000);
    }, 1500);
  }
};

setTimeout(dropOrbs, 500);

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

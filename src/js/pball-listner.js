AFRAME.registerComponent("pball-listener", {
  init: function () {
    this.el.addEventListener("movingended", function (e) {
      newBall();
    });
  },
});

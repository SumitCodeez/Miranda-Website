function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.to("#page-1", {
    y: "100vh",
    scale: 0.6,
    duration: 0,
  });

  tl.to("#page-1", {
    y: "20vh",
    duration: 1,
    delay: 1,
  });
  tl.to("#page-1", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    duration: 1,
    delay: 0.6,
  });
}

loadingAnimation();

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}
function mouseMoveAnimation() {
  let relm = document.querySelectorAll(".right-elem");
  relm.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mouseover", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}
function page3AnimationVideo() {
  let page3Center = document.querySelector(".page3-center");
  let video = document.querySelector("#page3 video");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scale(1,1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scale(0.7,0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
function page5AnimationVideo() {
  let section = document.querySelectorAll(".sec-right");
  section.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
function page7animaton() {
  gsap.from(".btm6-parts h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".btm6-parts",
      scroller: "body",
      start: "top 80%",
      end: "top 10%",
      scrub: true,
    },
  });
}
loadingAnimation();
mouseMoveAnimation();
page3AnimationVideo();
page5AnimationVideo();
page7animaton();

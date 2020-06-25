import React, { useRef, useEffect } from "react";
import Scene from "../svg/reactlogo.svg";
import gsap from "gsap";

const ReactLogo = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const [
      smallball,
      lightBallBack,
      lightBall,
      circle3,
      circle2,
      circle1
    ] = elements.children;

    gsap.set([lightBall, lightBallBack, smallball, circle1, circle2, circle3], {
      autoAlpha: 0,
      transformOrigin: "50% 50%"
    });

    let tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } });
    let tlLoop = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "Power1.inOut" }
    });

    let tlPulse = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "Power0.None" }
    });

    tl.fromTo(
      lightBall,
      { scale: "0" },
      { duration: 1.5, scale: "1", autoAlpha: "1" }
    )
      .fromTo(
        lightBallBack,
        { scale: "0" },
        { duration: 1.5, scale: "1", autoAlpha: "1" },
        "-=.9"
      )
      .fromTo(
        [circle1, circle2, circle3],
        { scale: "0" },
        { duration: 1.5, scale: "1", autoAlpha: "1" },
        "-=.9"
      )
      .fromTo(
        smallball,
        { scale: "0.85" },
        { duration: 0.8, scale: 1, autoAlpha: 1 },
        "-=0.2"
      )
      .fromTo(circle1, { y: "0" }, { y: "+=13" }, "circleDrop")
      .fromTo(circle3, { y: "0" }, { y: "-=13" }, "circleDrop");

    tlPulse
      .delay(tl.duration())
      .fromTo(
        lightBallBack,
        { scale: "1" },
        { duration: 0.7, scale: "1.1" },
        "-=2"
      );
    tlLoop
      .delay(tl.duration())
      .to(circle1, { duration: 2, rotate: "+=45" }, "circleRotationLoop")
      .to(circle3, { duration: 2, rotate: "-=45" }, "circleRotationLoop")
      .to(circle1, { duration: 2, rotate: "-=45" }, "circleRotationBackLoop")
      .to(circle3, { duration: 2, rotate: "+=45" }, "circleRotationBackLoop")
      .to(circle1, { y: "+=30" }, "circleTranslationLoop")
      .to(circle3, { y: "-=30" }, "circleTranslationLoop");
  }, []);

  return (
    <div ref={wrapper} className="react-logo">
      <Scene />
    </div>
  );
};

export default ReactLogo;

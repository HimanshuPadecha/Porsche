import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Heading({children}) {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay:5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="mt-40 mb-20 flex justify-center items-center">
        <span className="text-5xl font-bold text-center" ref={headingRef}>
          {children}
        </span>
      </div>
    </>
  );
}
import gsap from "gsap";

export default Heading;

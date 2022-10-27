import React, { useEffect, useMemo, useRef, useState } from "react";

import Layout from "@/component/Layout";

const About = () => {
  const [s_pos, set_s_post] = useState<number>(0);
  const [li_pos, set_li_pos] = useState<number>(0);

  const refCont_1 = useRef<HTMLElement>(null);
  const refCont_2 = useRef<HTMLElement>(null);
  const refSlider = useRef<HTMLUListElement>(null);

  const s_move_max = useMemo<number>(() => {
    if (!refSlider.current) return 0;
    return (refSlider.current.offsetWidth - window.innerWidth / 2) * -1;
  }, []);

  useEffect(() => {
    if (!refCont_1.current || !refCont_2.current || !refSlider.current) return;

    refCont_1.current.addEventListener("wheel", function (e) {
      e.preventDefault;
      if (e.deltaY > 0) {
        if (!refCont_2.current) return;
        refCont_2.current.style.top = `0%`;
      }
    });
    refCont_2.current.addEventListener("wheel", function (e) {
      e.preventDefault;
      if (e.deltaY < 0 && s_pos >= 0) {
        setTimeout(() => {
          if (!refCont_2.current) return;
          refCont_2.current.style.top = `100%`;
        }, 500);
        return;
      }
      move_slider(e.deltaY);
    });
  }, []);

  function move_slider(amount: number) {
    if (!refSlider.current) return;
    set_s_post((prevState) => prevState - amount);
    if (s_pos < s_move_max) {
      set_s_post(s_move_max);

      return;
    } else if (s_pos > 0) {
      set_s_post(0);
      return;
    }
    refSlider.current.style.transform = `translateX(${s_pos}px)`;
    li_upDown(amount);
  }

  function li_upDown(amount: number) {
    if (!refSlider.current) return;
    set_li_pos((prevState) => prevState + amount);
    for (let i = 0; i < refSlider.current.childNodes.length; i++) {
      const li = refSlider.current.childNodes[i] as HTMLLIElement;
      if (i % 2 != 0) {
        li.style.transform = `translateY(${li_pos / (i * 5)}px)`;
      } else {
        li.style.transform = `translateY(${-li_pos / (i * 5)}px)`;
      }
    }
  }

  return (
    <Layout.Main>
      <section id="wrapper">
        <article ref={refCont_1} className="cont" id="cont_1">
          HELLO
        </article>

        <article ref={refCont_2} className="cont" id="cont_2">
          <ul ref={refSlider} id="slider">
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
            <li>
              <div>lorem</div>
              <span className="redSpan"></span>
            </li>
          </ul>
        </article>
      </section>
    </Layout.Main>
  );
};

export default About;

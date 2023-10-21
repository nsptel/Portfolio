'use client';

import { useRef } from 'react';
import { LazyMotion, domAnimation, useInView } from 'framer-motion';
import { HeadingDivider } from '@/_components';
import { TimeLine } from './TimeLine';
import { BsFillSaveFill } from 'react-icons/bs';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section">
        <HeadingDivider title="About me" />
        <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
          <div
            tabIndex="0"
            ref={ref}
            className="text-xl font-light leading-relaxed"
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            }}
          >
            <p className="my-3.5">
              My name is Neel. I started my journey by opting for Computer
              Engineering for my Bachelor&apos;s in Gujarat Technological
              University.
            </p>
            <p className="my-3.5">
              During my university years, I developed a deep passion for
              software programming, and I consistently engaged in learning new
              concepts and techniques in this field.
            </p>
            <p className="my-3.5">
              So, officially, my engineering journey began in 2021 as a Software
              Engineer where I learned all about SDLC, applied my knowledge and
              skills contributing in the building of an enterprise-level
              software product. I continued with this work for almost 1.5 years,
              and then chose another role as a Fullstack Engineer.
            </p>
            <p className="my-3.5">
              I enjoy learning, which is why I dedicated a significant amount of
              time to working with cutting-edge technologies.
            </p>
          </div>
        </div>

        <TimeLine />

        <div
          ref={ref}
          className="pt-10"
          style={{
            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          <a
            href="/assets/Resume.pdf"
            tabIndex="0"
            className="btn"
            aria-label="Latest projects"
            rel="noreferrer"
            download
          >
            Download My Resume &nbsp; <BsFillSaveFill />
          </a>
        </div>
      </section>
    </LazyMotion>
  );
}

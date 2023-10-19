'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { initial, animate, exit, transition } from '@/_utils/motions';
import { SOCIAL_MEDIA } from '@/_constants';
import { BsDownload } from 'react-icons/bs';

export function ConnectMedia() {
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        role="menu"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="/assets/Resume.pdf"
              rel="noreferrer"
              aria-label="download resume"
              title="Download Resume"
              className="text-2xl"
              download
            >
              <BsDownload />
            </a>
          </li>
          {SOCIAL_MEDIA.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
                title={item.title}
                className="text-2xl"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </m.nav>
    </LazyMotion>
  );
}

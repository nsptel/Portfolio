import { Suspense, useRef, useState } from 'react';
import { domAnimation, LazyMotion, useInView } from 'framer-motion';
import { HeadingDivider, Loader } from '@/_components';
import Error from '@/error';
import { ErrorBoundary } from 'react-error-boundary';
import { Projects } from '@/projects/_components/Projects';

export function ProjectsSection() {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });
  const [disableLoadButton, setDisableLoadButton] = useState(false);

  const [projects, setProjects] = useState([
    {
      _id: 1,
      title: 'SQL Executer for Excel',
      stack: ['Python', 'TKinter'],
      repoUrl: 'https://github.com/nsptel/SQL-Parser-For-Excel-Sheets',
      description:
        'Created a Windows desktop application using Python, where libraries like TKinter, Excelrd, etc., were used extensively to develop GUI having great user experience and flow. This tool is basically used for extracting data from Excel spreadsheets using MySQL selection queries, to make data extraction process easy and efficient, and eliminating the need of using complex Excel features.',
    },
    {
      _id: 2,
      title: 'Cricketable',
      stack: ['React Native', 'Firestore'],
      repoUrl: 'https://github.com/nsptel/Cricketable',
      description:
        'Developed a mobile application that works on Android and iOS using React Native Framework. This application is used for connecting people, setting up groups and organizing events for the people who have interest in the game of Cricket. This application was designed in a way that it would make it easier for everyone to connect based on their interest.',
    },
    {
      _id: 3,
      title: 'Minimal Dots Game',
      stack: ['Python', 'CLI'],
      repoUrl: 'https://github.com/nsptel/Minimal-Dots-Game',
      description:
        "A simple console game developed using Python programming language, as a side project. This game can be played by multiple people where they have to connect the dots of the board and create boxes. When the board is full or the users quit the game in between, the current progress shows the winner. Winner is decided based on who has the most amount of boxes with their player ids in them. I worked on this project in my free time and it's not associated with my studies or profession.",
    },
  ]);

  const loadMoreProjects = () => {
    setProjects((prevState) => {
      return [
        ...prevState,
        {
          _id: 4,
          title: 'GEC Auction',
          stack: ['PHP', 'JavaScript'],
          repoUrl: 'https://github.com/nsptel/GEC-Auction',
          description:
            'Built a web platform that enables students of a University/College to network and allow them to buy/sell their used stationary items. Features such as chat and bidding are available to make it similar to a real auctioning system.',
        },
        {
          _id: 5,
          title: 'MNIST Digit Recognition',
          stack: ['Python'],
          repoUrl: 'https://github.com/nsptel/MNIST-Digit-Recognition',
          description:
            'The classic MNIST digit recognition program that takes an image of a digit as input and predicts the digit. This is made from scratch using libraries such as NumPy and Pickle.',
        },
      ];
    });
    setDisableLoadButton(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="Projects" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense
            fallback={
              <div className="flex-center">
                <Loader />
              </div>
            }
          >
            <ErrorBoundary FallbackComponent={Error}>
              <Projects projects={projects} />
            </ErrorBoundary>
          </Suspense>

          <div
            aria-label="See more projects"
            tabIndex={-1}
            ref={btnRef}
            className="relative text-xl cursor-pointer hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
            onClick={loadMoreProjects}
            style={{
              transform: btnRef ? 'none' : 'translateX(-50px)',
              opacity: isBtnInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
              display: disableLoadButton ? 'none' : 'block',
            }}
          >
            More projects
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

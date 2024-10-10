import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';
import { BlurFade } from '../../ui/blur-fade';

const Main = () => {
  const [currentActive, setcurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main id="projects" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive('all');
            setArr(myProjects);
          }}
          className={currentActive === 'all' ? 'active' : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick('css');
          }}
          className={currentActive === 'css' ? 'active' : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick('js');
          }}
          className={currentActive === 'js' ? 'active' : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick('ts');
          }}
          className={currentActive === 'ts' ? 'active' : null}
        >
          TypeScript
        </button>
        <button
          onClick={() => {
            handleClick('react');
          }}
          className={currentActive === 'react' ? 'active' : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick('nextJS');
          }}
          className={currentActive === 'nextJS' ? 'active' : null}
        >
          Next JS
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item, idx) => {
            return (
              <BlurFade key={item.imgPath} delay={0.25 + idx * 0.05} inView>
                <motion.article
                  layout
                  initial={{ transform: 'scale(0.4)' }}
                  animate={{ transform: 'scale(1)' }}
                  transition={{ type: 'spring', damping: 8, stiffness: 50 }}
                  className="  card"
                >
                  <img width={266} src={item.imgPath} alt="" />

                  <div style={{ width: '266px' }} className="box">
                    <h1 className="title">{item.projectTitle}</h1>
                    <p className="sub-title">
                      {/* Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus. */}
                    </p>

                    <a className="flex icons" href={item.link}>
                      <div style={{ gap: '11px' }} className="flex">
                        <div className="icon-link"></div>
                        <div className="icon-github"></div>
                      </div>

                      <a className="link flex" href={item.link}>
                        more
                        <span
                          style={{ alignSelf: 'end' }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </a>
                  </div>
                </motion.article>
              </BlurFade>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

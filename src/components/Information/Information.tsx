import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Information = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page information-page" ref={ref}>
      <Header inView={inView} title="ИНОФРМАЦИЯ" />
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1.5}
      >
        <Animate
          play={inView}
          start={{
            transform: 'translateX(-5rem)',
          }}
          end={{ transform: 'translateX(0)' }}
          duration={1}
        >
          <div className="information-page-line">
            <img
              className="information-page__icon"
              alt="Победа"
              src="./planetCircle.svg"
            />
            <div className="information-page__description">Ссылка 1</div>
          </div>
        </Animate>
      </Animate>
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1.5}
        delay={0.2}
      >
        <Animate
          play={inView}
          start={{ transform: 'translateX(-5rem)' }}
          end={{ transform: 'translateX(0)' }}
          duration={1}
          delay={0.2}
        >
          <div className="information-page-line">
            <img
              className="information-page__icon"
              alt="Победа"
              src="./planetCircle.svg"
            />
            <div className="information-page__description">Ссылка 2</div>
          </div>
        </Animate>
      </Animate>
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1.5}
        delay={0.4}
      >
        <Animate
          play={inView}
          start={{ transform: 'translateX(-5rem)' }}
          end={{ transform: 'translateX(0)' }}
          duration={1}
          delay={0.4}
        >
          <div className="information-page-line">
            <img
              className="information-page__icon"
              alt="Победа"
              src="./planetCircle.svg"
            />
            <div className="information-page__description">Ссылка 3</div>
          </div>
        </Animate>
      </Animate>
    </div>
  );
};

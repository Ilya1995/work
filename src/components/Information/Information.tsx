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
        start={{
          transform: 'translateX(-50vw)',
          opacity: 0,
        }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
        duration={2}
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
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-50vw)',
          opacity: 0,
        }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
        duration={2}
        delay={2}
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
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-50vw)',
          opacity: 0,
        }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
        duration={2}
        delay={4}
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
    </div>
  );
};

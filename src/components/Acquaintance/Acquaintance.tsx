import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Acquaintance = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page acquaintance-page" ref={ref}>
      <Header inView={inView} title="СВЯЗЬ ПОБЕДА" />
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-100vw)',
          opacity: 0,
        }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
        duration={2}
      >
        <div className="acquaintance-page-line">
          <img
            className="acquaintance-page__icon"
            alt="Победа"
            src="./planetCircle.svg"
          />
          <div className="acquaintance-page__description">
            Оператор связи «Контентум-Запад» производит&nbsp;
            <b>
              <span className="stroke stroke-sm">
                инновационное оборудование
              </span>
              &nbsp; и программное обеспечение
            </b>
            &nbsp;для организации высокоскоростной резервируемой связи на
            труднодоступных объектах в любой точке планеты под брендом «СВЯЗЬ
            ПОБЕДА».
          </div>
        </div>
      </Animate>
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-100vw)',
          opacity: 0,
        }}
        end={{ transform: 'translateX(0px)', opacity: 1 }}
        duration={2}
        delay={2}
      >
        <div className="acquaintance-page-line">
          <img
            className="acquaintance-page__icon"
            alt="Победа"
            src="./logoCircle.svg"
          />
          <div className="acquaintance-page__description">
            <b>
              <span className="stroke stroke-lm">
                Технология не имеет аналогов на мировом рынке
              </span>
            </b>
            &nbsp; и нацелена на обеспечение связью труднодоступных и мобильных
            объектов, на которых любая другая технология связи либо технически
            невозможна, либо не рентабельна.
          </div>
        </div>
      </Animate>
    </div>
  );
};

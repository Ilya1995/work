import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { AnchorPageEnum, DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Acquaintance = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page acquaintance-page" ref={ref}>
      <Header
        inView={inView}
        title="СВЯЗЬ ПОБЕДА"
        href={AnchorPageEnum.ACQUAINTANCE}
      />
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
      >
        <Animate
          play={inView}
          start={{ transform: 'translateX(-5rem)' }}
          end={{ transform: 'translateX(0)' }}
          duration={1}
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
              &nbsp; и нацелена на обеспечение связью труднодоступных и
              мобильных объектов, на которых любая другая технология связи либо
              технически невозможна, либо не рентабельна.
            </div>
          </div>
        </Animate>
      </Animate>
    </div>
  );
};

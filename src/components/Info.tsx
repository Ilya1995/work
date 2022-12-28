import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';
import { Header } from './Header';

export const Info = () => {
  const [ref, inView] = useVisible({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div className="page info-page" ref={ref}>
      <Header inView={inView} />
      <Animate
        play={inView}
        start={{
          transform: 'translateX(-100vw)',
        }}
        end={{ transform: 'translateX(0px)' }}
        duration={1}
      >
        <div className="info-page-line">
          <img
            className="info-page__icon"
            alt="Победа"
            src="./planetCircle.svg"
          />
          <div className="info-page__description">
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

        <div className="info-page-line">
          <img
            className="info-page__icon"
            alt="Победа"
            src="./logoCircle.svg"
          />
          <div className="info-page__description">
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

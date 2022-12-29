import { Animate } from 'react-simple-animate';

import { Header } from './Header';
import { APPLICATIONS, DEFAULT_OBSERVER_OPTIONS } from '../constants';
import { useVisible } from '../hooks/useVisible';
import { useMedia } from '../hooks/useMedia';
import { ApplicationItem } from './ApplicationItem';

export const Application = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);
  const isMobile = useMedia('(max-width: 768px)');
  const newApplications = isMobile ? APPLICATIONS.slice(0, 3) : APPLICATIONS;

  return (
    <div className="page application-page" ref={ref}>
      <Header inView={inView} title="СВЯЗЬ ПОБЕДА" />
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
        easeType="ease-in"
      >
        <div className="application-page__info">
          «СВЯЗЬ ПОБЕДА» предлагает&nbsp;
          <b>
            <span className="stroke">скоростную и рентабельную связь</span>
            для труднодоступных объектов
          </b>
          &nbsp;с подключением от одного рабочего дня. В отличии от любого
          другого оператора связи или существующей технологии связи, мы
          подключаем объект на порядок быстрее и дешевле.
        </div>
        <hr className="line-horizontal" />
      </Animate>
      <div className="application-page__content">
        {newApplications.map((application) => (
          <ApplicationItem
            key={application.iconName}
            {...application}
            translateX={isMobile ? '-100vw' : application.translateX}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

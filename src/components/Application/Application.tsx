import { Animate } from 'react-simple-animate';

import { Header } from '../Header';
import { APPLICATIONS } from './constants';
import { useVisible, useMedia } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { ApplicationItem } from './ApplicationItem';

import './styles.scss';

export const Application = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);
  const isMobile = useMedia('(max-width: 768px)');
  const newApplications = isMobile ? APPLICATIONS.slice(0, 3) : APPLICATIONS;

  return (
    <div className="page application-page" ref={ref}>
      <Header inView={inView} title="ПРИМЕНЕНИЕ" />
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={2}
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
        {newApplications.map((application, index) => (
          <ApplicationItem
            key={application.iconName}
            {...application}
            inView={inView}
            delay={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

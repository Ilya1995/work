import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import { Header } from '../Header';
import { APPLICATIONS, SIZE_APPLICATIONS_FOR_MOBILE } from './constants';
import { useVisible } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { ApplicationItem } from './ApplicationItem';

import './styles.scss';

type PropsType = {
  isMobile?: boolean;
  page?: number;
};

export const Application: FC<PropsType> = ({ isMobile, page = 1 }) => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);
  const indexCopy = (page - 1) * SIZE_APPLICATIONS_FOR_MOBILE;
  const newApplications = isMobile
    ? APPLICATIONS.slice(indexCopy, indexCopy + SIZE_APPLICATIONS_FOR_MOBILE)
    : APPLICATIONS;

  return (
    <div className="page application-page" ref={ref}>
      <Header inView={inView} title="ПРИМЕНЕНИЕ" />
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
      >
        <div className="application-page__info">
          «СВЯЗЬ ПОБЕДА» предлагает&nbsp;
          <b>
            <span className="stroke">скоростную и рентабельную связь</span>
            &nbsp;для труднодоступных объектов
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
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

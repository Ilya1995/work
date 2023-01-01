import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import { DURATION } from './constants';

import './styles.scss';

type PropsType = {
  iconName: string;
  title: string;
  textList: string[];
  inView: boolean;
  translateY: string;
  delay: number;
};

export const ApplicationItem: FC<PropsType> = ({
  iconName,
  title,
  textList,
  inView,
  translateY,
  delay,
}) => (
  <div className="application-item">
    <Animate
      play={inView}
      start={{
        transform: `translateY(${translateY})`,
        opacity: 0,
      }}
      end={{ transform: 'translateY(0px)', opacity: 1 }}
      duration={DURATION}
      delay={delay * DURATION}
    >
      <img
        className="application-item__icon"
        alt="Победа"
        src={`./${iconName}.svg`}
      />
      <div className="application-item__title">{title}</div>
      <div className="application-item__description">
        <hr className="line-vertical" />
        <div>
          {textList.map((text, index) => (
            <div key={index} className="application-item__description-text">
              {text}
            </div>
          ))}
        </div>
      </div>
    </Animate>
  </div>
);

import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import './styles.scss';

type PropsType = {
  iconName: string;
  title: string;
  textList: string[];
  inView: boolean;
  translateX: string;
};

export const ApplicationItem: FC<PropsType> = ({
  iconName,
  title,
  textList,
  inView,
  translateX,
}) => (
  <div className="application-item">
    <Animate
      play={inView}
      start={{
        transform: `translateX(${translateX})`,
      }}
      end={{ transform: 'translateX(0px)' }}
      duration={1}
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

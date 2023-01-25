import { FC } from 'react';
import { Animate } from 'react-simple-animate';
import classNames from 'classnames';

import { DURATION } from './constants';

import './styles.scss';

type PropsType = {
  iconName: string;
  title: string;
  textList: string[];
  underlining: number[];
  inView: boolean;
  delay: number;
};

export const ApplicationItem: FC<PropsType> = ({
  iconName,
  title,
  textList,
  underlining,
  inView,
  delay,
}) => (
  <div className="application-item">
    <Animate
      play={inView}
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      duration={DURATION}
      delay={delay + 0.5}
    >
      <Animate
        play={inView}
        start={{
          transform: 'translateY(-5rem)',
        }}
        end={{ transform: 'translateY(0)' }}
        duration={DURATION}
        delay={delay}
      >
        <img
          className="application-item__icon"
          alt="Телеком"
          src={`./${iconName}.svg`}
        />
        <div className="application-item__title">{title}</div>
        <div className="application-item__description">
          <hr className="line-vertical" />
          <div>
            {textList.map((text, index) => (
              <p key={index}>
                <span
                  className={classNames('application-item__description-text', {
                    'application-item__description-text_under':
                      underlining.includes(index),
                  })}
                >
                  {text}
                </span>
              </p>
            ))}
          </div>
        </div>
      </Animate>
    </Animate>
  </div>
);

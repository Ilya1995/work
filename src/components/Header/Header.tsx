import classNames from 'classnames';
import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import './styles.scss';

type PropsType = {
  inView: boolean;
  title: string;
  isTitleWhite?: boolean;
};

export const Header: FC<PropsType> = ({
  inView,
  title,
  isTitleWhite = false,
}) => (
  <div className="header">
    <Animate
      play={inView}
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      duration={1}
      easeType="ease-in"
    >
      <div
        className={classNames('header__title', {
          'white-text': isTitleWhite,
        })}
      >
        {title}
      </div>
      <img className="header__img" alt="Победа" src="./logoHeader.svg" />
    </Animate>
  </div>
);

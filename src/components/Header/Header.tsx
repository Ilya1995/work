import classNames from 'classnames';
import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import './styles.scss';

type PropsType = {
  inView: boolean;
  title: string;
  isTitleWhite?: boolean;
  href?: string;
};

export const Header: FC<PropsType> = ({
  inView,
  title,
  isTitleWhite = false,
  href,
}) => {
  const onClickOnTitle = () => {
    if (href) {
      window.location.href = '#' + href;
    }
  };

  return (
    <div className="header">
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
      >
        <div
          className={classNames('header__title', {
            'white-text': isTitleWhite,
          })}
          onClick={onClickOnTitle}
        >
          {title}
        </div>
        <img className="header__img" alt="Телеком" src="./logoHeader.svg" />
      </Animate>
    </div>
  );
};

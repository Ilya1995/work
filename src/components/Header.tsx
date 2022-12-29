import { FC } from 'react';
import { Animate } from 'react-simple-animate';

type PropsType = {
  inView: boolean;
  title: string;
};

export const Header: FC<PropsType> = ({ inView, title }) => (
  <div className="header">
    <Animate
      play={inView}
      start={{ opacity: 0 }}
      end={{ opacity: 1 }}
      duration={1}
      easeType="ease-in"
    >
      <div className="header__title">{title}</div>
      <img className="header__img" alt="Победа" src="./logoHeader.svg" />
    </Animate>
  </div>
);

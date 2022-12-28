import { FC } from 'react';
import { Animate } from 'react-simple-animate';

type PropsType = {
  inView: boolean;
};

export const Header: FC<PropsType> = ({ inView }) => {
  console.log(inView);

  return (
    <div className="header">
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={1}
        easeType="ease-in"
      >
        <div className="header__title">СВЯЗЬ ПОБЕДА</div>
        <img className="header__img" alt="Победа" src="./internet.svg" />
      </Animate>
    </div>
  );
};

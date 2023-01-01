import { FC } from 'react';
import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Menu } from '../Menu';

import './styles.scss';

type PropsType = {
  handleChangePage: (index: number) => void;
};

export const Home: FC<PropsType> = ({ handleChangePage }) => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page home-page white-text" ref={ref}>
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={3}
        easeType="ease-in"
      >
        <Menu handleChangePage={handleChangePage} />
        <div className="home-page__content">
          <div>
            <div className="home-page-title">
              РЕНТАБЕЛЬНАЯ
              <br />
              СКОРОСТНАЯ
              <br />
              НАДЕЖНАЯ
              <br />
              СВЯЗЬ
            </div>
            <div className="home-page-subtitle">
              ДЛЯ ЛЮБЫХ
              <br />
              ТРУДНОДОСТУПНЫХ
              <br />
              ОБЪЕКТОВ
            </div>
          </div>
          <img className="home-page-logo" alt="Победа" src="./logo.svg" />
        </div>
        <div className="home-page-note">Москва 2023</div>
      </Animate>
    </div>
  );
};

import { Animate } from 'react-simple-animate';

import { useVisible } from '../hooks/useVisible';

export const Home = () => {
  const [ref, inView] = useVisible({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div className="page home-page" ref={ref}>
      <Animate
        play={inView}
        start={{ opacity: 0 }}
        end={{ opacity: 1 }}
        duration={3}
        easeType="ease-in"
      >
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

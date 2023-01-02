import { Animate } from 'react-simple-animate';
import classNames from 'classnames';

import { useVisible, useMedia } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Technology = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);
  const isMobile = useMedia('(max-width: 1080px)');

  return (
    <div className="page technology-page" ref={ref}>
      <Header inView={inView} title="ТЕХНОЛОГИЯ" isTitleWhite={!isMobile} />
      {!isMobile && (
        <img className="cloud-background" alt="Победа" src="./smallCloud.svg" />
      )}

      <div className="technology-page__content">
        <Animate
          play={inView}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          duration={1.5}
        >
          <Animate
            play={inView}
            start={{ transform: 'translateX(-5rem)' }}
            end={{ transform: 'translateX(0)' }}
            duration={1}
          >
            <div
              className={classNames('technology-page-block', {
                'white-text': !isMobile,
              })}
            >
              <hr
                className={classNames('line-vertical line-vertical_bold', {
                  'line-vertical_white': !isMobile,
                })}
              />
              <div className="technology-page__content-text">
                <b>
                  <span
                    className={classNames('stroke stroke-mm', {
                      'stroke-white': !isMobile,
                    })}
                  >
                    Рентабельная связь
                  </span>
                </b>
                &nbsp;&nbsp;в любой точке планеты возможна благодаря
                комбинированию существующих операторов и каналов связи таким
                образом, чтобы на конкретном объекте обеспечить строго
                необходимые показатели качества передачи данных и
                рентабельности.
                <p>
                  <b>
                    <span
                      className={classNames('stroke stroke-mm', {
                        'stroke-white': !isMobile,
                      })}
                    >
                      В тайге и морских судах
                    </span>
                  </b>
                  &nbsp;&nbsp;– спутниковая связь.
                </p>
                <p>
                  <b>
                    <span
                      className={classNames('stroke stroke-mm', {
                        'stroke-white': !isMobile,
                      })}
                    >
                      В зоне покрытия сотовых операторов
                    </span>
                  </b>
                  &nbsp;&nbsp;– сотовая связь.
                </p>
                <b>
                  <span
                    className={classNames('stroke stroke-mm', {
                      'stroke-white': !isMobile,
                    })}
                  >
                    Любые другие технологии связи
                  </span>
                </b>
                &nbsp;&nbsp;при необходимости. Любые радио-мосты, нестандартные
                протоколы перадачи данных и т.д.
              </div>
            </div>
          </Animate>
        </Animate>
        <Animate
          play={inView}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          duration={1.5}
        >
          <Animate
            play={inView}
            start={{ transform: 'translateX(5rem)' }}
            end={{ transform: 'translateX(0)' }}
            duration={1}
          >
            <div className="technology-page-block">
              <hr className="line-vertical line-vertical_bold" />
              <div className="technology-page__content-text">
                <b>
                  В состав продукта входит&nbsp;
                  <span className="stroke">абонентское оборудование</span>
                  &nbsp;и облачные сервисы,
                </b>
                &nbsp;которые позволяют объединять несколько слабых традиционных
                каналов передачи данных в один высокоскоростной и чрезвычайно
                надежный.
              </div>
            </div>
          </Animate>
        </Animate>
      </div>
    </div>
  );
};

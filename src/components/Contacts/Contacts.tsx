import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Contacts = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page contacts-page" ref={ref}>
      <Header inView={inView} title="КОНТАКТЫ" />

      <div className="contacts-page__content flex-center">
        <Animate
          play={inView}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          duration={2}
        >
          <div className="contacts-page__background">
            <div className="contacts-page-qr">
              <img
                className="contacts-page-qr__img"
                alt="Победа"
                src="./QR.svg"
              />
              <p className="contacts-page-qr__description">pobeda.link</p>
            </div>
            <div className="flex-center w-100">
              <div className="contacts-page__links">
                <div className="contacts-page__links-item">
                  <img
                    className="contacts-page__links-img"
                    alt="Победа"
                    src="./internet.svg"
                  />
                  pobeda.link
                </div>
                <div className="contacts-page__links-item">
                  <img
                    className="contacts-page__links-img"
                    alt="Победа"
                    src="./mail.svg"
                  />
                  info@pobeda.link
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};

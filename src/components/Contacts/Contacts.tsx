import { Animate } from 'react-simple-animate';

import { useVisible } from '../../hooks';
import { AnchorPageEnum, DEFAULT_OBSERVER_OPTIONS } from '../../constants';
import { Header } from '../Header';

import './styles.scss';

export const Contacts = () => {
  const [ref, inView] = useVisible(DEFAULT_OBSERVER_OPTIONS);

  return (
    <div className="page contacts-page" ref={ref}>
      <Header inView={inView} title="КОНТАКТЫ" href={AnchorPageEnum.CONTACTS} />

      <div className="contacts-page__content flex-center">
        <Animate
          play={inView}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          duration={1.5}
        >
          <div className="contacts-page__background">
            <div className="contacts-page-qr">
              <img
                className="contacts-page-qr__img"
                alt="Телеком"
                src="./QR.svg"
              />
              <p className="contacts-page-qr__description">ktel.link</p>
            </div>
            <div className="flex-center w-100">
              <div className="contacts-page__links">
                <a
                  className="contacts-page__links-item"
                  href="https://ktel.link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="contacts-page__links-img"
                    alt="Телеком"
                    src="./internet.svg"
                  />
                  ktel.link
                </a>
                <div className="contacts-page__links-item">
                  <img
                    className="contacts-page__links-img"
                    alt="Телеком"
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

import { FC, useState, useRef } from 'react';
import classNames from 'classnames';

import { useMedia, useOnClickOutside } from '../../hooks';

import './styles.scss';

type PropsType = {
  handleChangePage: (index: number) => void;
};

export const Menu: FC<PropsType> = ({ handleChangePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const isMobile = useMedia('(max-width: 768px)');

  useOnClickOutside(node, () => {
    if (isOpen) {
      onChangeIsMenuOpen();
    }
  });

  const onChangeIsMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="menu" ref={node}>
      <button
        className={classNames('menu__button', {
          menu__button_active: isOpen,
        })}
        onClick={onChangeIsMenuOpen}
      >
        <span className="menu__button-item" />
        <span className="menu__button-item" />
        <span className="menu__button-item" />
      </button>
      <div
        className={classNames('menu__side', {
          menu__side_open: isOpen,
        })}
      >
        <div className="menu__side-link" onClick={() => handleChangePage(1)}>
          О нас
        </div>
        <div className="menu__side-link" onClick={() => handleChangePage(2)}>
          Применение
        </div>
        <div
          className="menu__side-link"
          onClick={() => handleChangePage(isMobile ? 4 : 3)}
        >
          Информация
        </div>
        <div
          className="menu__side-link"
          onClick={() => handleChangePage(isMobile ? 5 : 4)}
        >
          Технология
        </div>
        <div
          className="menu__side-link"
          onClick={() => handleChangePage(isMobile ? 6 : 5)}
        >
          Контакты
        </div>
      </div>
    </div>
  );
};

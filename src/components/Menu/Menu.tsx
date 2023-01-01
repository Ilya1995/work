import { FC, useState, useRef } from 'react';
import classNames from 'classnames';

import { useOnClickOutside } from '../../hooks';

import './styles.scss';

type PropsType = {
  handleChangePage: (index: number) => void;
};

export const Menu: FC<PropsType> = ({ handleChangePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

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
          'menu__button_not-active': !isOpen,
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
        <div className="menu__side-link" onClick={() => handleChangePage(2)}>
          Главная
        </div>
        <div className="menu__side-link">Статьи</div>
      </div>
    </div>
  );
};

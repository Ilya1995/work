import { useState, useEffect, useMemo } from 'react';
import ReactPageScroller from 'react-page-scroller';

import { useMedia } from './hooks';
import { Home } from './components/Home';
import { Acquaintance } from './components/Acquaintance';
import { Application } from './components/Application';
// import { Information } from './components/Information';
import { Technology } from './components/Technology';
import { Contacts } from './components/Contacts';
import { AnchorPageEnum } from './constants';
import { AnchorMapToPageType } from './types';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<number>();
  const isMobile = useMedia('(max-width: 768px)');

  // @ts-expect-error
  const anchorMapToPage: AnchorMapToPageType = useMemo(
    () => ({
      [AnchorPageEnum.ACQUAINTANCE]: 1,
      [AnchorPageEnum.APPLICATION]: 2,
      [AnchorPageEnum.TECHNOLOGY]: isMobile ? 4 : 3,
      // [AnchorPageEnum.INFORMATION]: isMobile ? 5 : 4,
      [AnchorPageEnum.CONTACTS]: isMobile ? 5 : 4, // TODO: после добавления information заменить на isMobile ? 6 : 5
    }),
    [isMobile]
  );

  useEffect(() => {
    const hash = window.location.hash?.slice(1) as AnchorPageEnum;

    if (anchorMapToPage[hash]) {
      setCurrentPage(anchorMapToPage[hash]);
    }
  }, [anchorMapToPage]);

  return (
    <ReactPageScroller
      customPageNumber={currentPage}
      pageOnChange={setCurrentPage}
    >
      <Home
        handleChangePage={setCurrentPage}
        anchorMapToPage={anchorMapToPage}
      />
      <Acquaintance />
      {isMobile && <Application isMobile page={1} />}
      {isMobile && <Application isMobile page={2} />}
      {!isMobile && <Application />}
      <Technology />
      {/* <Information /> */}
      <Contacts />
    </ReactPageScroller>
  );
};

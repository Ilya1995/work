import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import { useMedia } from './hooks';
import { Home } from './components/Home';
import { Acquaintance } from './components/Acquaintance';
import { Application } from './components/Application';
import { Information } from './components/Information';
import { Technology } from './components/Technology';
import { Contacts } from './components/Contacts';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<number>();
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <ReactPageScroller
      customPageNumber={currentPage}
      pageOnChange={setCurrentPage}
    >
      <Home handleChangePage={setCurrentPage} />
      <Acquaintance />
      {isMobile && <Application isMobile page={1} />}
      {isMobile && <Application isMobile page={2} />}
      {!isMobile && <Application />}
      <Information />
      <Technology />
      <Contacts />
    </ReactPageScroller>
  );
};

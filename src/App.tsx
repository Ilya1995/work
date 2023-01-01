import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import { Home } from './components/Home';
import { Acquaintance } from './components/Acquaintance';
import { Application } from './components/Application';
import { Information } from './components/Information';
import { Technology } from './components/Technology';
import { Contacts } from './components/Contacts';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<number>();

  return (
    <ReactPageScroller
      customPageNumber={currentPage}
      pageOnChange={setCurrentPage}
    >
      <Home handleChangePage={setCurrentPage} />
      <Acquaintance />
      <Application />
      <Information />
      <Technology />
      <Contacts />
    </ReactPageScroller>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPageScroller from 'react-page-scroller';

import { Home } from './components/Home';
import { Acquaintance } from './components/Acquaintance';
import { Application } from './components/Application';
import { Information } from './components/Information';
import { Technology } from './components/Technology';
import { Contacts } from './components/Contacts';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactPageScroller>
      <Home />
      <Acquaintance />
      <Application />
      <Information />
      <Technology />
      <Contacts />
    </ReactPageScroller>
  </React.StrictMode>
);

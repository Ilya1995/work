import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactPageScroller from 'react-page-scroller';

import { Home } from './components/Home';
import { Info } from './components/Info';
import { Application } from './components/Application';
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
      <Info />
      <Application />
      <Technology />
      <Contacts />
    </ReactPageScroller>
  </React.StrictMode>
);

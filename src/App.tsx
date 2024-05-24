import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefiniteIntegrals from '@/~calc/DefiniteIntegrals';
import IndefiniteIntegrals from '@/~calc/IndefiniteIntegrals';
import DrawerWrapper from '@/~global/DrawerWrapper';
import Dashboard from '@/~home/Dashboard';
import Home from '@/~home/index';
import PageNotFound from '@/~others/PageNotFound';
import { directories, views } from '@/~routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DrawerWrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path={directories.home}>
            <Route index element={<Home />} />
            <Route caseSensitive path={views.dashboard} element={<Dashboard />} />
          </Route>
          <Route path={directories.calc}>
            <Route index element={<Dashboard />} />
            <Route caseSensitive path={views.definiteIntegrals} element={<DefiniteIntegrals />} />
            <Route caseSensitive path={views.indefiniteIntegrals} element={<IndefiniteIntegrals />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </DrawerWrapper>
    </BrowserRouter>
  );
};

export default App;

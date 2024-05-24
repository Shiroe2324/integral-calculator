import { useContext } from 'react';

import drawerContext from '@/~global/drawerContext';

export function useDrawer() {
  const context = useContext(drawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
}

export default useDrawer;

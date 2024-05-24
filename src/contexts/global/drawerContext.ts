import { createContext } from 'react';

interface DrawerContextType {
  visible: boolean;
  toggleVisible: () => void;
}

const drawerContext = createContext<DrawerContextType>({
  visible: false,
  toggleVisible: () => {},
});

export default drawerContext;

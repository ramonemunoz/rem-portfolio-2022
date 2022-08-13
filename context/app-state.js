import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  let sharedState = 'Test'
  let anotherTest = 'Another Test'

  const testFunction = data => {
    console.log('data', data)
  }

  return (
    <AppContext.Provider 
        value={{
            sharedState,
            anotherTest,
            testFunction,
            isAboutOpen,
            setIsAboutOpen
        }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}   
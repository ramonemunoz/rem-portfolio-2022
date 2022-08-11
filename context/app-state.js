import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
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
            testFunction
        }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}   
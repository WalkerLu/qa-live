import React from 'react';
import { AuthContext, useAuthProvider } from './hooks/useAuth';
import { I18nProvider } from './contexts/I18nContext';
import Home from './pages/Home';

function App() {
  const authProvider = useAuthProvider();

  return (
    <I18nProvider>
      <AuthContext.Provider value={authProvider}>
        <div className="App">
          <Home />
        </div>
      </AuthContext.Provider>
    </I18nProvider>
  );
}

export default App;
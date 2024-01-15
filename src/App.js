import Sidebar from './components/organisms/Sidebar'
import Content from './components/organisms/Content';
import AuthProvider from './context/auth-provider';
import RouterProvider from './context/router-provider';

import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider>
        <AuthProvider>
          <Sidebar />
          <Content />
        </AuthProvider>
      </RouterProvider>
    </div>
  );
}

export default App;

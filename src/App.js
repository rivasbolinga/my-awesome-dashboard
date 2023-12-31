import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, error } = useAuth0()

  return (
    <main className="column">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Login/>
          <Dashboard />
        </>
      )}
    </main>
  )
}

export default App

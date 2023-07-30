import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, error } = useAuth0()

  return (
    <main className="column">
      {error && <h1>Authentication Error</h1>}
      {!error && isLoading && <h1>Loading...</h1>}
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

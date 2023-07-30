import { useAuth0 } from '@auth0/auth0-react'
import '../styles/login.scss';
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <section className="login-page">
        <div className="login-container">
          <h1>Hi you 👋🏼,</h1>
          <h1>Welcome Back!</h1>
          <button className='login-btn' onClick={loginWithRedirect}>log in</button>
        </div>
      </section>
    )
  )
}

export default LoginButton

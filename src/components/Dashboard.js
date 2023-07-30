import { useAuth0 } from '@auth0/auth0-react'
import '../styles/dashboard.scss';
import LogoutButton from './LogoutButton';
const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <section className="dashboard-container">
        <h2>Welcome to your dashboard: {user?.name}</h2>
        <LogoutButton />
        {user?.picture && <img src={user.picture} alt={user?.name} />}
      </section>
    )
  )
}

export default Profile

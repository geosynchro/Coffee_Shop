import LoginPage from './LoginPage'
import UserProfile from './UserProfile'

function UserLoginProfile({user, setUser, setPassword, setEmail, handleUserSubmit, handleSignUpSubmit, loginError, updateUser, deleteUser}){
    return(
        <div>
           {user ? <UserProfile user={user} updateUser={updateUser} deleteUser={deleteUser}/> : <LoginPage setPassword={setPassword} setEmail={setEmail} handleSubmit={handleUserSubmit} setUser={setUser} signUpSubmit={handleSignUpSubmit} loginError={loginError}/>}
        </div>
    )
}
export default UserLoginProfile
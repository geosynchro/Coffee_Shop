import LoginPage from './LoginPage'

function UserLoginProfile({user, setUser, setPassword, setEmail, handleUserSubmit}){
    return(
        <div>
           {user ? <h1>hi user</h1> : <LoginPage setPassword={setPassword} setEmail={setEmail} handleSubmit={handleUserSubmit}/>}
        </div>
    )
}
export default UserLoginProfile
import {useState} from 'react'
import EditProfileForm from './EditProfileForm'

function UserProfile({user, updateUser, deleteUser}){
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked((prevIsClicked) => !prevIsClicked)
    }
    
    return(
        <div className='flex justify-center mt-4'>
          <div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg \">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username </dt>
              <dd className="mt-1 text-sm flex text-gray-900 sm:mt-0 sm:col-span-2">{user.username}
              {/* <button className="bg-amber-500 rounded p-2 m-auto flex justify-content-end">Edit</button> */}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email_address}
              {/* <button className="bg-amber-500 rounded p-2 m-auto flex justify-center">Edit</button> */}
            </dd>
            </div>
          </dl>
        </div>
     
        </div>
        <div>
            <button
                onClick={handleClick}
                type="button"
                className=" flex justify-center mx-auto mt-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                {isClicked ? <p className='w-24'>Hide form</p> : <p className='w-24'>Edit Profile</p>}

            </button> 
        </div>
        <div>
            {isClicked ? <EditProfileForm username={user.username} email_address={user.email_address} id={user.id} updateUser={updateUser} deleteUser={deleteUser}/> : null}
        </div>
      </div>
      </div>
            )
        }
        
        export default UserProfile
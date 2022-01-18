import {useState} from 'react'

function EditProfileForm({id, username, email_address, updateUser, deleteUser}){
    const [deleteClick, setDeleteClick] = useState(false)
    const [formData, setFormData] = useState({
        username,
        email_address
    })

    function handleSubmit(e){
        e.preventDefault()
        updateUser(formData, id)
    }

    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    function handleDeleteClick(){
        setDeleteClick((prev) => !prev)
    }




    return(
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>

            <h3 className=" text-center text-3xl font-extrabold text-gray-900">Edit your display info</h3>

          </div>
          <form className=" space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  placeholder={username}
                  value={formData.username}
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <input
                  name="email_address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                  placeholder={email_address}
                  value={formData.email_address}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-32 flex mx-auto justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Submit Edit
              </button>
            </div>
          </form>
            <div>
            <button
                onClick={handleDeleteClick}
                type="button"
                className="group relative w-40 flex mx-auto justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Account
              </button>
            </div>
            <div>
                {deleteClick ? 
                <div >
                    <p className='flex justify-center mb-2'>Are you sure you want to delete your account?</p>
                    <div className='flex justify-center'>
                    <button type="button" onClick={() => deleteUser(id)}className='bg-red-600 mx-auto rounded-md p-2 text-white'>Yes, delete my account</button>
                    <button type="button" onClick={() => setDeleteClick(!deleteClick)}className='bg-amber-500  rounded-md p-2 text-white'>No, I want to keep my account</button>
                    </div>
                </div>
                 : null}
            </div>
        </div>
    </div>            
    )
}

export default EditProfileForm
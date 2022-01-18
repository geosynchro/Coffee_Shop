import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'


function SignUp ({signUpSubmit}){
    const [formData, setFormData] = useState({
        username: "",
        email_address: "",
        password: "",
        password_confirmation: ""
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    //   const handleSignUpSubmit = (e) => {
    //     e.preventDefault();
    
    //     const configObj = {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     };
    
    //     fetch("/signup", configObj).then((resp) => {
    //       if (resp.ok) {
    //         resp.json().then((user) => {
    //           console.log(user);
    //           setUser(user);
    //         });
    //       } else {
    //         resp.json().then((errors) => {
    //           console.error(errors);
    //         });
    //       }
    //     });
    //   }

    return(
    <div className="min-h-full flex items-center justify-center py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <h2 className=" text-center text-3xl font-extrabold text-gray-900">New to the shop?</h2>
                <h2 className=" text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={(e) => signUpSubmit(e, formData)}>
                {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                       
                        name="email_address"
                        value={formData.email_address}
                        onChange={(e) => handleChange(e)}
                        type="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                        placeholder="Email address..."
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Username
                        </label>
                        <input  
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                        placeholder="Username..."
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                        placeholder="Password..."
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={(e) => handleChange(e)}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                        placeholder="Confirm Password..."
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-amber-300 group-hover:text-amber-400" aria-hidden="true" />
                        </span>
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignUp
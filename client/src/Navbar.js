
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  MenuIcon, UserIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import CoffeeLogo from './assets/coffeelogo.svg'
import { Link } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar({user, onLogout}) {

  

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <Disclosure as="nav" className="bg-amber-500 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    
                <div className="flex-shrink-0 flex items-center">
                    <img src={CoffeeLogo} width={40} height={40} alt="logo"/>
                    <h1 className=" ml-3 mb-1 text-3xl text-white font-lobster mt-1">The Coffee Supply</h1>
                    {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6 mt-1 ">
                  <div className="flex space-x-4 font-lobster">                       
                        <Link to='/'>
                            <p className={classNames(
                                'text-white hover:bg-amber-700 hover:text-white cursor-pointer',
                                'px-3 py-2 rounded-md text-md font-medium'
                                )}> Home</p>
                        </Link> 

                        <Link to="/products">
                            <p className={classNames(
                                'text-white hover:bg-amber-700 hover:text-white cursor-pointer',
                                'px-3 py-2 rounded-md text-md font-medium'
                                )}>Products</p>
                        </Link>

                        <Link to="/blogs">
                            <p className={classNames(
                                'text-white hover:bg-amber-700 hover:text-white cursor-pointer',
                                'px-3 py-2 rounded-md text-md font-medium'
                                )}>Blog</p>
                        </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  { user ? <p className='text-white mr-4 font-lobster'>Hello, {user.username}!</p> : null}
                </div>
                <Link to="/cart">
                <button
                  type="button"
                  className="bg-amber-500 p-1 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-800 focus:ring-white"
                  >
                  <span className="sr-only">View notifications</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </Link>

                {/* Profile dropdown */}

                <Menu as="div" className="ml-3 relative">

                  <div>
                    <Menu.Button className="flex p-1 text-md text-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      { user ? <Menu.Item>
                        {({ active }) => (
                          <Link to="/userprofile">
                           <span
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </span> 
                          </Link>)}
                          </Menu.Item> 
                            :
                        <Menu.Item>
                        {({ active }) => (
                           <Link to="/login"><span
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Log In
                          </span>
                          </Link>
                        )}
                      </Menu.Item>}
                      {user ? 
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/logout">
                            <span
                              onClick={handleLogout}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </span>
                            </Link>
                          )}
                        </Menu.Item> 
                       : 
                        null
                          }
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
    
                <Link to="/">
                    <Disclosure.Button className={classNames(
                        'text-gray-50 hover:bg-amber-500 hover:text-white cursor-pointer',
                        'px-3 py-2 rounded-md text-sm font-medium'
                        )}>
                            Home
                    </Disclosure.Button>
                </Link>
                <Link to="/products">
                    <Disclosure.Button className={classNames(
                        'text-gray-50 hover:bg-amber-500 hover:text-white cursor-pointer',
                        'px-3 py-2 rounded-md text-sm font-medium'
                        )}>
                            Products
                    </Disclosure.Button>
                </Link>
                <Link to="/blogs">
                <Disclosure.Button className={classNames('text-gray-50 hover:bg-amber-500 hover:text-white cursor-pointer',
                    'px-3 py-2 rounded-md text-sm font-medium'
                    )}>
                        Blog
                </Disclosure.Button>
                </Link>
                
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
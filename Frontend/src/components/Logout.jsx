import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

export default function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null
      })
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button className='px-3 py-2 bg-pink-600 text-white rounded-md cursor-pointer hover:bg-black duration-300'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

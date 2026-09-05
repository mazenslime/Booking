import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {userDummyData} from '../assets/assets/assets'
function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleLogin() {
    // Implement your login logic here
    console.log('Username:', username)
    console.log('Password:', password)
    let user=userDummyData.find((user)=>user.username===username && user.password===password)
    // Example: Check if the username and password match a predefined value
    if (user) {
      setMessage(['Login successful!'])
      // Perform further actions, such as redirecting to a dashboard
    } else {
      setMessage(['Invalid username or password.'])
      // Show an error message to the user
    }
  }
  const handleChange=(e)=>{
    if(e.target.id==='username'){
      setUsername(e.target.value)
    }
    if(e.target.id==='password'){
      setPassword(e.target.value)
    }
  }

  return (
    <div className='w-full min-h-lvh  px-10 py-10 bg-[#0F172A] '>
      <div className='w-1/3 rounded-xl border border-gray-400/35  space-y-8  min-h-6/10 mx-auto  py-2 bg-[#64748B]/30  '>
        <div className='w-full text-center'>
            <h2 className='px-2 py-2 font-bold text-2xl text-[#6D88FF]'>Zearo</h2>
            <p className='text-[#a4b0c1]'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        {/* inputs */}
        <div className='w-9/10 mx-auto flex flex-col space-y-4 '>
        {/* input one */}
          <div className='w-full bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#2E5BFF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
            <label className='text-gray-400 text-sm ' htmlFor="username">username</label>
            <input id='username' type="text" className='w-full pb-1 text-white outline-none focus:outline-none bg-transparent border-none text-sm font-sm' onChange={handleChange} />
          </div>
          {/* input two */}
          <div className='w-full bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#2E5BFF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
            <label className='text-gray-400 text-sm ' htmlFor='password'>Password</label>
            <div className='flex items-center'>
              <input id='password' type={showPassword ? 'text' : 'password'} className='w-full pb-1 text-white outline-none bg-transparent border-none font-medium' onChange={handleChange} />
              <button type='button' aria-label={showPassword ? 'Hide password' : 'Show password'} title={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className='pb-1 pl-2 text-gray-400 hover:text-white cursor-pointer'>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          {/* Remember me */}
          <div className='flex justify-between items-center'>
            <div className='flex gap-x-2 items-center'>
               <input type="checkbox" className='appearance-none w-4 h-4 border border-gray-400/35  rounded checked:bg-blue-500' />
               <span className='text-gray-400 '>Remember me</span>
            </div>
            {/* forget pass */}
            <div>
              <span className='text-gray-400'>Forget password?</span>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <button className='w-full cursor-pointer bg-[#6D88FF] text-white font-bold py-2 px-4 rounded-xl' onClick={handleLogin}>
              Sign in
            </button>
          </div>
          <div className='flex items-center gap-3 text-gray-500 text-xs'>
            <span className='h-px flex-1 bg-gray-400/25'></span>
            <span>or continue with</span>
            <span className='h-px flex-1 bg-gray-400/25'></span>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            <button type='button' className='flex-1 flex items-center justify-center gap-2 border border-gray-400/35 text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-white/10'>
              <FontAwesomeIcon icon={faGoogle} className='text-red-400' />
              Google
            </button>
            <button type='button' className='flex-1 flex items-center justify-center gap-2 border border-gray-400/35 text-white py-2 px-4 rounded-xl cursor-pointer hover:bg-white/10'>
              <FontAwesomeIcon icon={faFacebookF} className='text-blue-400' />
              Facebook
            </button>
          </div>
          <div className='w-full flex justify-center'>
            <span className='text-gray-400'>Don't have an account? <a href="/register" className='text-[#6D88FF]'>Sign up</a></span>
          </div>
          {message.length > 0 && (
            <div className='w-full flex justify-center'>
              <span className='text-red-500'>{message[0]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
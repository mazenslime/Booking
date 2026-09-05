import { useState } from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Rejester() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [message, setMessage] = useState([])
  const [Data, setData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  function handleRegister(e) {
    e.preventDefault();
    if (Data.password !== Data.confirmPassword) {
      setMessage(['Passwords do not match.'])
      // Show an error message to the user
    } else {
      setMessage(['Registration successful!'])
      localStorage.setItem('token', 'your_token_here');
      localStorage.setItem('user', JSON.stringify(Data));
      navigate('/') // Redirect to the home page after successful registration
    } 
  }
  const handleChange=(e)=>{
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  }
  return (
    <div className='w-full min-h-screen px-10 py-10 bg-[#0F172A]'>
      <div className='w-full max-w-xl rounded-xl border border-gray-400/35 space-y-6 mx-auto py-6 px-4 sm:px-8 bg-[#64748B]/30'>
        <div className='w-full text-center'>
          <h2 className='px-2 py-2 font-bold text-2xl text-[#6D88FF]'>Zearo</h2>
          <p className='text-[#a4b0c1]'>Create your account to get started.</p>
        </div>

        <form className='w-full mx-auto flex flex-col space-y-4'>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-1/2 bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#6D88FF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
              <label className='text-gray-400 text-sm' htmlFor='fullName'>Full name</label>
              <input id='fullName' name='fullName' type='text' required className='w-full pb-1 text-white outline-none focus:outline-none bg-transparent border-none text-sm' onChange={handleChange} />
            </div>

            <div className='w-full sm:w-1/2 bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#6D88FF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
              <label className='text-gray-400 text-sm' htmlFor='username'>Username</label>
              <input id='username' name='username' type='text' required className='w-full pb-1 text-white outline-none focus:outline-none bg-transparent border-none text-sm' onChange={handleChange} />
            </div>
          </div>

          <div className='w-full bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#6D88FF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
            <label className='text-gray-400 text-sm' htmlFor='email'>Email address</label>
            <input id='email' name='email' type='email' required className='w-full pb-1 text-white  outline-none focus:outline-none bg-transparent border-none text-sm' onChange={handleChange} />
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-1/2 bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#6D88FF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
              <label className='text-gray-400 text-sm' htmlFor='password'>Password</label>
              <div className='flex items-center'>
                <input id='password' name='password' type={showPassword ? 'text' : 'password'} required className='w-full pb-1 text-white outline-none focus:outline-none bg-transparent border-none text-sm' onChange={handleChange} />
                <button type='button' aria-label={showPassword ? 'Hide password' : 'Show password'} title={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className='pb-1 pl-2 text-gray-400 hover:text-white cursor-pointer'>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div className='w-full sm:w-1/2 bg-[#64748B]/10 border border-gray-400/35 focus-within:border-[#6D88FF]/70 focus-within:shadow-[0_0_12px_rgba(46,91,255,0.25)] px-4 rounded-xl'>
              <label className='text-gray-400 text-sm' htmlFor='confirmPassword'>Confirm password</label>
              <div className='flex items-center'>
                <input id='confirmPassword' name='confirmPassword' type={showConfirmPassword ? 'text' : 'password'} required className='w-full pb-1 text-white outline-none focus:outline-none bg-transparent border-none text-sm' onChange={handleChange} />
                <button type='button' aria-label={showConfirmPassword ? 'Hide password' : 'Show password'} title={showConfirmPassword ? 'Hide password' : 'Show password'} onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='pb-1 pl-2 text-gray-400 hover:text-white cursor-pointer'>
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
          </div>

          <label className='flex gap-x-2 items-center text-gray-400 text-sm'>
            <input type='checkbox' required className='appearance-none w-4 h-4 border border-gray-400/35 rounded checked:bg-blue-500' />
            <span>I agree to the terms and conditions</span>
          </label>

          <div className='w-full flex justify-center'>
            <button type='submit' className='w-full cursor-pointer bg-[#6D88FF] text-white font-bold py-2 px-4 rounded-xl' onClick={handleRegister}>
              Create account
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
        </form>

        <p className='text-center text-gray-400 text-sm'>
          Already have an account?{' '}
          <Link to='/login' className='text-[#6D88FF] font-semibold'>Sign in</Link>
        </p>
      {message.length > 0 && (
        <div className='w-full flex justify-center mt-4'>
          <span className={`${message[0].includes('success') ? 'text-green-500' : 'text-red-500'}`}>{message[0]}</span>
        </div>)}
      </div>
    </div>
  )
}

export default Rejester
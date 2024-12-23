import {Link} from 'react-router-dom';
import {TextInput , Label , Button} from 'flowbite-react';


export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* left */}
        <div className='flex-1'>
              <Link to='/'
              className='font-bold dark:text-white text-4xl'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                  Hershey's
                </span>{" "}
                Blog
              </Link>
              <p className='p-3'>This is a hobby project. You can sign in with your email and password or with Google.</p>
        </div>
        {/* right  */}
        <div className='flex-1'> 
            <form className='flex flex-col gap-4 '>
                  <div>
                      <Label value='Your username' />
                      <TextInput type='text' placeholder='Username' id='username' />     
                  </div>
                  <div>
                      <Label value='Your email' />
                      <TextInput type='text' placeholder='name@gmail.com' id='username' />     
                  </div>
                  <div>
                      <Label value='Your password' />
                      <TextInput type='text' placeholder='Password' id='username' />     
                  </div>
                  <Button gradientDuoTone='purpleToPink' type='submit'>
                    Sign Up!
                  </Button>
            </form>
            <div className='felx gap-2 text-sm mt-5'> 
              <span>Have an account?</span>{" "}
              <Link to='/sign-in' className='text-blue-600'>
                Sign-in
              </Link>

            </div>
        </div>

      </div>
    </div>
  )
};

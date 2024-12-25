import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className='border border-t-8 border-blue-600'>
      <div className='w-full max-w-7xl mx-auto px-4 mb-2'>
        {/* Logo and Navigation */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Hershey's
              </span>{" "}
              Blog
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className='mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
              <Footer.Link
                href='/'
                target='_blank'
                rel='noopener noreferrer'>
                Harshus projects
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

      {/* Divider */}
      <Footer.Divider />

{/* Footer Content */}
<div className="w-full sm:flex sm:items-center sm:justify-between">

  {/* Copyright Section */}
  <div className="m-1 mb-3 text-center md:text-left">
    <Footer.Copyright
      href="#"
      by="Hershey's Blog"
      year={new Date().getFullYear()}
      className="text-sm text-gray-500"
    />
  </div>

  {/* Social Icons Section */}
  <div className="flex justify-center gap-6 mt-4 md:mt-0">
    <Footer.Icon
      href="#"
      icon={BsFacebook}
      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
    />
    <Footer.Icon
      href="#"
      icon={BsInstagram}
      className="text-pink-600 hover:text-pink-800 transition-colors duration-200"
    />
    <Footer.Icon
      href="#"
      icon={BsTwitterX}
      className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
    />
  </div>

</div>

      </div>
    </Footer>
  );
}

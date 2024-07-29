import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub  } from 'react-icons/fa';
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full py-6 mb-2 mt-20 border-t">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left">
          <aside className="flex items-center justify-center sm:justify-start mb-0 md:-mb-3 mt-0 md:-mt-5 -ml-[1rem]">
            <Image
              src={'/logo.png'}
              width={60}
              height={60}
              alt="logo"
            />
            <h2 className="text-xl font-bold -ml-3">Data<span className='text-red'>Query</span> AI</h2>
          </aside>
          <p className='mt-4'>Contact us: info@dataqueryai.com</p>
        </div>
        <div>
          <div className="flex justify-center sm:justify-start space-x-6 py-2">
            <Link href="https://facebook.com"
              className="hover:text-blue-700">
                <FaFacebookF size={22}/>
            </Link>
            <Link href="https://x.com/Piyushs5321"
              className="hover:text-blue-300">
                <FaTwitter size={22}/>
            </Link>
            <Link href="https://www.instagram.com/piyushsharma5321/"
              className="hover:text-pink-500">
                <FaInstagram size={22}/>
            </Link>
            <Link href="https://www.linkedin.com/in/piyushsharmanova/"
              className="hover:text-blue-500">
              <FaLinkedinIn size={22}/>
            </Link>
            <Link href="https://github.com/Piyushsharma2004/"
              className="hover:text-gray-500">
              <FaGithub size={22}/>
            </Link>
          </div>
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} DataQueryAI All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

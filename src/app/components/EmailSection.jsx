"use client"
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import GithubIcon from '../../../public/github-icon.png';
import LinkedinIcon from '../../../public/linkedin-icon.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j59nq3p','template_ae9ubjl', form.current, '4iwdjwLIkQn_40rLX')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's talk!</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {""}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question ou just want to say hi, I'll try my best 
                to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/Fernandafogs' target="_blank">
                    <Image src={GithubIcon}  alt="Github Icon" className='w-12 h-12 mr-2' />
                </Link>
                <Link href='https://www.linkedin.com/in/fernanda-ramos-fogaca/' target="_blank">
                    <Image src={LinkedinIcon}  alt="Linkedin Icon" className='w-12 h-12' />
                </Link>
            </div>
        </div>
        <div>
          <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
          <div className='mb-6'>
              <label 
                htmlFor='name' 
                className='text-white block mb-2 text-sm font-medium'>
                  Name
              </label>
              <input 
                type="text" 
                id="text"
                required
                className='bg-[#18191E] border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Your name' 
                name='from_name'
              />
            </div>
            <div className='mb-6'>
              <label 
                htmlFor='email' 
                className='text-white block mb-2 text-sm font-medium'>
                  Your e-mail
              </label>
              <input 
                type="email" 
                id="email"
                required
                className='bg-[#18191E] border border-[#33353F] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='example@mmm.com' 
                name='from_email'
              />
            </div>
            <div className='mb-6'>
              <label 
                htmlFor="message"
                className='text-white block mb-2 text-sm font-medium'
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Type your message here!'
              />
            </div>
            <button
              type='submit'
              value='Send'
              className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  )
}

export default EmailSection
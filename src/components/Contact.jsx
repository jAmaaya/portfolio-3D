import React, {useRef, useState} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {

  }
  const handleSubmit = (e) => {

  }

  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <a href="mailto:jairoamayac@gmail.com">
        <p className={styles.sectionSubText
        }>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <p>
          Touch here.
        </p>
        </a>
        
        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </textarea>
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 shadow-md w-fit text-white outline-none font-bold shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}

          </button>

        </form> */}
      </motion.div>
      
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
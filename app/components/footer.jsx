import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-dark py-16'>
      <div className='md:max-w-[80%] mx-auto px-10 grid md:grid-cols-2 gap-5 h-full'>
        <div className='mx-auto md:mx-0'>
          <h1>Yufei Yang</h1>
          <p>Copyright &copy; 2023</p>
        </div>
        <nav>
          <div className='flex justify-center md:justify-end'>
            <a
              className='mx-3 hover:text-black'
              href='https://github.com/FrankYufeiYang'
              target='_blank'
            >
              <FaGithub size='3rem' />
            </a>
            <a
              className='mx-3 hover:text-blue-300'
              href='https://www.linkedin.com/in/yufeifrankyang/'
              target='_blank'
            >
              <FaLinkedin size='3rem' />
            </a>
            <a
              className='mx-3 hover:text-red-300'
              href='mailto:yufeiyang.frank@gmail.com'
            >
              <FaEnvelope size='3rem' />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

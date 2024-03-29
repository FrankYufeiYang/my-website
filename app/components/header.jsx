import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='text-white relative'>
        <nav className='container mx-auto flex justify-between items-center p-4'>
          <div className='text-3xl font-bold'>
            <Link href='/'>Yufei (Frank) Yang - United States</Link>
          </div>

          {/* Navigation Links */}
          <div className='flex'>
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

          {/* Mobile Menu Icon */}
          {/* Implement toggle functionality for mobile menu */}
          <div className='md:hidden'>
            <button>{/* Icon for mobile menu */}</button>
          </div>
        </nav>

        <div className=' md:h-[40vh] z-10 relative w-[100%] pt-10 pb-28 px-10 text-center flex flex-col justify-center'>
          <div className='text-left max-w-3xl m-auto'>
            <div className=' my-4 font-extrabold text-3xl l  slide-in-left'>
              Do you want to hire a software engineer who is
              <br />
              <span className='text-decoration-line: underline'>
                motivated and self-driven
              </span>
              ?
              <br />
            </div>
            <p className=' font-normal text-lg my-4 text-[#bfd8ff] slide-in-right'>
              As a detail-oriented software engineer with two years of
              professional experience in full-stack development, I specialize in
              web developement with React. My abilities and strength as a team
              player have led to the fostering of growth and enhanced
              productivity in past positions. I am dedicated to contributing my
              expertise to innovative and challenging projects.
            </p>

            <p className='font-semibold text-lg slide-in-left	'>
              <a
                href='https://docs.google.com/document/d/e/2PACX-1vSSyO6AQqub2CeiQXWNO9LXIqoHHE5db2bI4Ta7W51EkmfcY8rYZO9jlCvcDX4ZIfm-fX-eqZYwdocv/pub'
                target='_blank'
              >
                Interested in me? View my resume
                <span className='pl-4	'>➜</span>
              </a>
            </p>
          </div>
        </div>
      </header>
      <div className='cut my-20'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 3431 347'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          className='wave'
        >
          <path
            d='M0,347c455.317,-299.761 942.752,-432.753 1462.31,-259.881c862.781,236.634 1505.13,306.177 1968.69,-87.119l0,347l-3431,0Z'
            style={{ fill: '#fff', fillRule: 'nonzero' }}
          ></path>
        </svg>
      </div>
    </>
  );
}

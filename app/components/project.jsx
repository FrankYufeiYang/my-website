import Image from 'next/image';

export default function Project({ imgUrl, description, alt }) {
  return (
    <div className=' bg-white text-gray-800 rounded-lg shadow-md h-[100%]'>
      <div className='flex justify-center '>
        <Image
          src={imgUrl}
          width={2560}
          height={1329}
          alt={alt}
          className='rounded-xl'
        />
      </div>
      {description}
      <br />
    </div>
  );
}

import Image from 'next/image';

export default function Project({ imgUrl, description, alt }) {
  return (
      <div className=' bg-white text-gray-800 rounded-lg shadow-md h-[100%]'>
        <div className='flex justify-center '>
          <Image
            src={imgUrl}
            width={500}
            height={190}
            alt={alt}
            className='rounded-lg'
          />
        </div>
        {description}
        <br />
      </div>
  );
}

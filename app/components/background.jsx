export default function Background() {
  const timelineData = [
    {
      date: '2021-05',
      title: 'Student',
      description:
        'I graduated from The Pennsylvania State University with a degree in Computer Science. Although my interest in computers sparked at a young age, it was during my college years that I truly fell in love with programming. This passion has continually driven me to self-learn and develop ever since, constantly expanding my expertise and skills in the field.',
    },
    {
      date: '2022-03',
      title: 'Verizon Thingspace(IoT)',
      description:
        'I joined Verizon Thingspace as a frontend developer, where I had the chance to work with many brilliant backend developers and hardware engineers.  This experience significantly enriched my experience, and I was thrilled to make meaningful contributions by developing valuable tools and features.',
    },
    {
      date: '2023-03',
      title: 'Verizon Chatbot Team',
      description:
        "As a full-stack developer on Verizon's chatbot team, I collaborated with various teams to design and develop a comprehensive dashboard that could gather and process data from multiple sources, offering metric-monitoring, issue-alerting and user-friendly functionalities. This experience taught me how to work with different people and design intuitive apps for non-technical users.",
    },
    {
      date: '2024',
      title: 'TBD...',
      description: '',
    },
    // ... more events
  ];

  const TimelineItem = ({ data }) => {
    return (
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white'></div>
        <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
          {data.date}
        </time>
        <h3 className='text-lg font-semibold text-gray-900'>{data.title}</h3>
        <p className='mb-4 text-base font-normal text-gray-500'>
          {data.description}
        </p>
      </li>
    );
  };
  const Timeline = ({ data }) => {
    return (
      <ul className='relative border-l border-gray-200 max-w-[85%] md:max-w-[60%]'>
        {data.map((item, index) => (
          <TimelineItem key={index} data={item} />
        ))}
      </ul>
    );
  };
  return (
    <div className=' bg-slate-50 pb-10'>
      <div className='max-w-[1400px] mx-auto md:px-10 '>
        <div className='text-center max-w-lg m-auto'>
          <h2 className='text-4xl font-bold pt-10'>Background</h2>
        </div>
        <div className={'flex justify-center py-10'}>
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}

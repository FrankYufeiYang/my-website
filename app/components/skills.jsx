export default function Skills(){
    return (  <div className=' bg-slate-50 pb-10'>
        <div className='max-w-[1400px] mx-auto px-10 '>
          <div className='text-center max-w-lg m-auto'>
            <h2 className='text-4xl font-bold pt-10'>Skills</h2>
          </div>
          <div className='m-auto py-10 grid gap-4 grid-cols-2'>
            <div className='mx-20'>
              <div className=' text-blue-600'>Programming Languages</div>
              <div>Javascript, Typescript, Java, Python, SQL, C</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>Frontend</div>
              <div>HTML, CSS, XML, JSON, Fetch API, DOM, AJAX </div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>
                Frontend Frameworks/Libraries
              </div>
              <div>React, Next.js, Vite.js, React Router, Formik, Lodash</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>UI Frameworks</div>
              <div>Material UI, Ant Design, Tailwind CSS, Bootstrap</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>Backend Frameworks</div>
              <div>Python Flask, Java Spring boot, Node.js</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>Database </div>
              <div>PostgreSQL, MySQL, Redis, S3</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>Deploy Tools </div>
              <div>Nginx, Docker, Kubernetes, Jenkins</div>
            </div>
            <div className='mx-20'>
              <div className=' text-blue-600'>Dev Tools </div>
              <div>
                Browser Dev Tools, Git, Postman, NPM, Maven, VSCode, IDEA,
                Pycharm, Webstorm
              </div>
            </div>
          </div>
        </div>
      </div>)
}
import Background from './background';
import Project from './project';
import Skills from './skills';

export default function Main() {
  return (
    <main>
      <div className='max-w-[1400px] mx-auto px-10'>
        <div className='text-center max-w-lg m-auto'>
          <h2 className='text-4xl font-bold'>Previous Projects</h2>
        </div>
        <div className='my-12 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center h-[100%] '>
          <Project
            imgUrl={'/chatbot-portal.png'}
            description={
              <p className='p-5'>
                As a full-stack developer on Verizon&apos;s chatbot team, I
                built a cross-team performance tracking dashboard with
                <b> React</b>, <b>Python Flask</b>, and <b>PostgreSQL</b>. The
                dashboard could process and integrate data from more than three
                sources, offering real-time data presentation. I also automated
                the alert system workflow; this enhanced user efficiency and
                reduced development overhead by enabling customizable alerts for
                proactive notifications. This project has resulted in a 200%
                boost in operational efficiency for teams of up to 100
                developers and leadership.
              </p>
            }
            alt={'nextjs project picture'}
          />
          <Project
            imgUrl={'/chatbot-portal.png'}
            description={
              <p className='p-5'>
                As a frontend developer on Verizon&apos;s IoT team, I built a
                cross-team performance tracking dashboard with
                <b> React</b>. It enabled back-end developers and IoT engineers
                to manage and configure their devices wtih a user-friendly UI. I
                made device management processes seamless while reducing the
                operational complexity by two times. I also acted as the primary
                point of contact for the project and collaborated with different
                teams to collect requirements, translated them into technical
                functionalities, and integrated these features into the
                application. This web app has been selected to scale up to an
                enterprise-level IoT Platform.
              </p>
            }
            alt={'nextjs project picture'}
          />
          <Project
            imgUrl={'/nextjs-project-main.png'}
            projectUrl={
              'https://nextjs-dashboard-franks-projects-fa7aa0cb.vercel.app/login'
            }
            description={
              <p className='p-5'>
                I created a <b>Next.js</b> project with <b>Typescript</b> and
                <b>Tailwind</b> CSS. It utilizes features from Next.js and
                Vercel, such as App router, Sever Side Rendering, Client Side
                Rendering, server action. The project is equipped with an
                authentication system and a PostgreSQL database for securing and
                storing user data. Additionally, it incorporates pagination and
                search functionalities that integrate with URL parameters,
                enabling users to easily return to their previous action with a
                simple URL click
                <br />
                <br />
                <a
                  href={
                    'https://nextjs-dashboard-franks-projects-fa7aa0cb.vercel.app/login'
                  }
                  target='_blank'
                  className=' text-blue-600 underline'
                >
                  Live Demo
                </a>
              </p>
            }
            alt={'nextjs project picture'}
          />
        </div>
      </div>
      <Skills />
      <Background />
    </main>
  );
}

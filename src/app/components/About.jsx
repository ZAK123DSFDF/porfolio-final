const About = () => {
  const Info = [
    { text: "Years experience", count: "01" },
    { text: "projects completed", count: "03" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className=" text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold ">
        My introduction
      </p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto ">
          Hi, I&apos;m ZEKARIYAS, a passionate and skilled Full Stack Developer
          with one year of experience. I specialize in using cutting-edge
          technologies to build robust and efficient web applications. My
          journey into the world of web development began with a curiosity for
          creating digital solutions, and I haven&apos;t looked back since. My
          Journey I embarked on my coding journey with a goal to make an impact
          in the digital landscape. Over the past year, I&apos;ve had the
          privilege of working with React, Node.js, and Next.js, which have
          become my go-to tools for creating dynamic and responsive web
          applications. These technologies have allowed me to deliver seamless
          user experiences while optimizing performance and scalability. What I
          Bring - **Front-End Expertise**: I have a strong command of React,
          enabling me to craft captivating user interfaces and interactive
          components. I&apos;m experienced in building responsive web designs,
          ensuring that applications look great on any device. - **Back-End
          Prowess**: With Node.js, I&apos;ve developed efficient server-side
          logic and RESTful APIs to power the back end of applications. This
          includes handling data, authentication, and ensuring data security. -
          **Next.js Proficiency**: I&apos;ve leveraged Next.js to create
          fast-loading, server-rendered web applications, optimizing SEO and
          improving user experiences. - **Problem Solver**: I thrive on tackling
          complex challenges and turning them into elegant solutions. Debugging
          and troubleshooting are second nature to me. - **Constant Learner**:
          The tech world evolves rapidly, and I&apos;m committed to staying
          up-to-date with the latest trends and best practices. Learning is a
          continuous process, and I embrace it wholeheartedly.My Passion
          I&apos;m not just a developer; I&apos;m a creator. I&apos;m driven by
          a desire to build applications that leave a lasting impression on
          users. The thrill of turning an idea into a functional, user-friendly
          application is what fuels my passion for development.Let&apos;s
          Connect I&apos;m always open to new opportunities, collaborations, and
          interesting projects. If you have an exciting idea or need a developer
          to bring your vision to life, don&apos;t hesitate to get in touch with
          me. Let&apos;s work together to make the web a better place. Thank you
          for visiting my portfolio. I look forward to connecting with you!
          **ZEKARIYAS**
        </p>
        <ul className=" mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2 ">
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                  </h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>

                <h3 className="md:text-base text-xs">{content.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;

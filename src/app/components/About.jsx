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
          I'm a FullStack developer with 1 year of experience. I can work with
          different javascript frameworks. I can also use different backend
          technologies. I'm always eager to learn and always update my skillset.
          I'm drawn to scalable solution to any FullStack applications.
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

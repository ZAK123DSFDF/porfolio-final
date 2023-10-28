import { Swiper, SwiperSlide } from "swiper/react";
import projectFinal1 from "../assets/images/projectFinal1.png";
import projectFinal2 from "../assets/images/projectFinal2.png";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      img: projectFinal1,
      name: "Music Streaming App",
      github_link: "https://github.com/ZAK123DSFDF/spotify-final",
      live_link: "https://spotify-final-nine.vercel.app/",
      Video: "https://www.youtube.com/watch?v=V7PAR21P7L8",
    },
    {
      img: projectFinal2,
      name: "Learning Management System App",
      github_link: "https://github.com/ZAK123DSFDF/lms-project-final-SECOND",
      live_link: "https://lms-project-final-second.vercel.app/",
      Video: "https://www.youtube.com/watch?v=DhELKcVyQIc",
    },
  ];
  return (
    <section id="projects">
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Projects</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg flex justify-center">
        My awesome work
      </p>
      <br />

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="flex max-w-3xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {projects?.map((projects, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <Image src={projects.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-4">{projects.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={projects.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 bg-gray-800 rounded-full px-2 py-1 flex w-32 justify-center"
              >
                Github
              </a>
              <a
                href={projects.live_link}
                rel="noreferrer"
                target="_blank"
                className="text-cyan-600 flex rounded-full bg-gray-800 px-2 py-1 w-32 justify-center"
              >
                Live Demo
              </a>
              <a
                href={projects.Video}
                rel="noreferrer"
                target="_blank"
                className="text-cyan-600 flex rounded-full bg-gray-800 px-2 py-1 w-32 justify-center"
              >
                Video
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;

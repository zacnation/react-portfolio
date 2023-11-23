import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InterestsSlide from "./InterestsSlide";

export default function Interests({ darkMode }) {
  const swiperOptions = {
    loop: true,
  };

  return (
    <div
      className={`pb-10 md:pb-12 lg:pb-20 ${
        darkMode ? "bg-dark-II text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold py-4 md:pb-6 lg:pt-0 text-center lg:text-3xl">
        Interests and Hobbies
      </h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="Carousel"
        {...swiperOptions}
        style={{ "--swiper-navigation-color": darkMode ? "#fff" : "#000" }}
      >
        <SwiperSlide>
          <InterestsSlide
            title={"Reading"}
            description={
              "Reading is a passion of mine, and my book collection spans a wide range of genres and topics. From personal development works like 'How to Win Friends and Influence People', 'Atomic Habits', and 'Deep Work' to timeless classics like '1984', 'The Trial', and 'The Master and Margarita', I find inspiration in the diverse perspectives that literature offers. These books have not only fueled my creativity and problem-solving skills but have also enriched my understanding of human behavior and interaction."
            }
            img={`${darkMode ? "books-inverted.png" : "books.png"}`}
            darkMode={darkMode}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterestsSlide
            title={"British Sign Language (BSL)"}
            description={
              "British Sign Language (BSL): Learning BSL isn't just a personal interest; it's my way of embracing two critical aspects of web development: accessibility and diversity, equity, and inclusion (DEI). BSL is part of the bigger picture of making the digital world more inclusive for those who rely on sign language. This experience has given me valuable insights into the challenges faced by individuals with disabilities, inspiring me to design websites and applications that cater to their needs. It's also a reminder that diversity includes linguistic diversity, which I'm passionate about promoting in the tech industry."
            }
            img={"colt-certificate.jpeg"}
            darkMode={darkMode}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InterestsSlide
            title={"Tech skills"}
            description={
              "Gaining skills such as being able to work with the terminal, using git and GitHub, and deploying with Netlify / Cyclic has been great. Next, I want to learn more about the cloud and AWS, as well as how to work with Docker and Kubernetes, work with a Raspberry Pi for IoT projects, and continue to learn more about areas such as cybersecurity and data structures and algorithms. I feel even having a foundational understanding of these areas will help me become a better developer."
            }
            img={"version-control.jpg"}
            darkMode={darkMode}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import Slider from "react-slick";

const SuccessStories = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 4000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplaySpeed: 4000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
          autoplay: true,
          cssEase: "linear",
        },
      },
    ],
  };

  const stories = [
    {
      name: "Israt Jahan Eva",
      positionAndCompany: "Associate Software Engineer, Brain Station 23",
      batch: 1,
      program: "Full Stack Fellowship Program",
      message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
  ex ipsum, optio, corporis cumque exercitationem error beatae sed
  laboriosam deserunt quidem explicabo ea reprehenderit ut. Dolores
  incidunt quae, debitis mollitia architecto repudiandae hic a,
  placeat eos asperiores dicta porro iure nam vel sunt inventore
  dolor amet ipsum odio vero at`,
    },
    {
      name: "Nazmul Hossain Tushar",
      positionAndCompany: "Associate Software Engineer, Doin Tech",
      batch: 2,
      program: "Frontend Fellowship Program",
      message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
  ex ipsum, optio, corporis cumque exercitationem error beatae sed
  laboriosam deserunt quidem explicabo ea reprehenderit ut. Dolores
  incidunt quae, debitis mollitia architecto repudiandae hic a,
  placeat eos asperiores dicta porro iure nam vel sunt inventore
  dolor amet ipsum odio vero at`,
    },
    {
      name: "Robiul Islam Jubaer",
      positionAndCompany: "Jr. Software Engineer, Enosis",
      batch: 2,
      program: "Full Stack Fellowship Program",
      message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
  ex ipsum, optio, corporis cumque exercitationem error beatae sed
  laboriosam deserunt quidem explicabo ea reprehenderit ut. Dolores
  incidunt quae, debitis mollitia architecto repudiandae hic a,
  placeat eos asperiores dicta porro iure nam vel sunt inventore
  dolor amet ipsum odio vero at`,
    },
    {
      name: "Asadur Rahman Asif",
      positionAndCompany: "Software Engineer, Bkash Ltd",
      batch: 3,
      program: "Backend Fellowship Program",
      message: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
  ex ipsum, optio, corporis cumque exercitationem error beatae sed
  laboriosam deserunt quidem explicabo ea reprehenderit ut. Dolores
  incidunt quae, debitis mollitia architecto repudiandae hic a,
  placeat eos asperiores dicta porro iure nam vel sunt inventore
  dolor amet ipsum odio vero at`,
    },
  ];
  return (
    <section>
      <p className="text-2xl lg:text-3xl text-primary font-bold my-10">
        Successful Stories
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {stories.map((story, i) => (
            <div key={i}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div className="mx-2">
                  <p className="text-lg font-medium">{story?.name}</p>
                  <p className="text-xs">{story?.positionAndCompany}</p>
                  <p className="text-xs">
                    {story?.program}, Batch - {story?.batch}
                  </p>
                </div>
              </div>
              <div className="m-2 text-justify hyphens-auto ">
                {story?.message}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;

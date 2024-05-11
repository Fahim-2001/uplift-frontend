import OptimizelyLogo from "../../assets/images/Optimizely.png";
import BrainstationLogo from "../../assets/images/brainstation.png";
import TigeritLogo from "../../assets/images/tigerit.jpeg";
import VivasoftLogo from "../../assets/images/vivasoft.png";
import EnosisLogo from "../../assets/images/enosis.jpeg";
import Bjit from "../../assets/images/bjit.png";
import Slider from "react-slick";
const Companies = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const companies = [
    {
      imgSrc: OptimizelyLogo,
    },
    {
      imgSrc: BrainstationLogo,
    },
    {
      imgSrc: TigeritLogo,
    },
    {
      imgSrc: VivasoftLogo,
    },
    {
      imgSrc: EnosisLogo,
    },
    {
      imgSrc: Bjit,
    },
  ];
  return (
    <section>
      <p className="text-2xl lg:text-3xl text-primary font-bold my-10">
        Companies hire from us
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {companies.map((company, i) => (
            <div key={i}>
              <img src={company?.imgSrc} className="h-12 lg:h-24" alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Companies;

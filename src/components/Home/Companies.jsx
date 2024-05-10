import OptimizelyLogo from "../../assets/images/Optimizely.png";
import BrainstationLogo from "../../assets/images/brainstation.png";
import TigeritLogo from "../../assets/images/tigerit.jpeg";
import VivasoftLogo from "../../assets/images/vivasoft.png";
import EnosisLogo from "../../assets/images/enosis.jpeg";
const Companies = () => {
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
  ];
  return (
    <section>
      <p className="text-2xl lg:text-3xl text-primary font-bold my-10">
        Companies hire from us
      </p>
      <div className="flex justify-evenly my-5">
        {companies.map((company, i) => (
          <div key={i}>
            <img src={company?.imgSrc} className="h-12 lg:h-24" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;

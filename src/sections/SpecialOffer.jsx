import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, fugit prodesset his eu, meis civibus pri
          id, eros augue munere et cum. Paulo laudem bonorum vel at, eu fastidii
          ullamcorper vix, ut consul praesent pro.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Cu duo solum labore, vix et sonet errem efficiendi. Eu movet
          pertinacia nec. Sed quot copiosae phaedrum no, vix an quando doctus
          mediocrem.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" inconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

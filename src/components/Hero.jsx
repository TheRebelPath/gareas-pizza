import {heropizza} from '../assets';

const Hero = () => {
  return (
    <div className="w-full h-80 mx-auto bg-black">
      <video
        className="h-full w-full"
        src={heropizza}
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
};

export default Hero;

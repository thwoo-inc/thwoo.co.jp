const Hero = () => {
  return (
    <div className="relative bg-corporate-primary text-center">
      <div className="relative z-10">
        <p className="text-white pt-20 xl:pt-30 2xl:pt-36 text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl pb-2 tracking-wider">
          人は成りたい自分に成れる
        </p>
        <p className="text-white pb-16 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-54 text-sm">
          Be who you want to be.
        </p>
        {/* <h1 className="text-corporate-font text-md md:text-lg lg:text-2xl pb-4 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36">
          株式会社スオウ
        </h1> */}
        <h1 className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-36">
          <img
            className="w-28 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52 mx-auto"
            src="/about/corporate-name-jp.png"
            alt="株式会社スオウ"
          />
        </h1>
      </div>
      <svg
        className="w-full absolute bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366.001 266.33"
      >
        <path
          d="M-70,385.745h-2.652A2.7,2.7,0,0,0-70,383.018v2.726Zm-2.763,0H-1433.326a98.606,98.606,0,0,0,17.247-2.271,188.577,188.577,0,0,0,20.005-5.577c13.465-4.49,29.016-10.914,47.543-19.638,34.791-16.385,76.181-39.121,120-63.193l.016-.009.008,0c70.4-38.672,150.189-82.5,232.027-116.764,21.247-8.894,41.978-16.852,61.617-23.653,21.219-7.348,41.946-13.617,61.6-18.632A572.1,572.1,0,0,1-812.394,123.8c10.135-1.434,20.2-2.53,29.927-3.257,9.987-.746,19.9-1.124,29.468-1.124s19.479.378,29.466,1.124c9.723.727,19.792,1.822,29.925,3.257a572.127,572.127,0,0,1,60.862,12.209c19.658,5.016,40.384,11.285,61.6,18.633,19.644,6.8,40.375,14.761,61.617,23.654,81.844,34.263,161.638,78.1,232.039,116.773,43.821,24.073,85.212,46.811,120.006,63.2,18.524,8.724,34.073,15.147,47.536,19.636a188.51,188.51,0,0,0,20,5.576,98.716,98.716,0,0,0,17.18,2.269Zm-1360.715,0H-1436v-2.652a2.693,2.693,0,0,0,2.523,2.65Z"
          transform="translate(1436.001 -119.416)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default Hero;

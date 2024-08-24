const Home = () => {
  return (
    <div className="flex h-[100vh] w-[100%] items-center justify-center bg-[url('/starter-code/assets/home/background-home-mobile.jpg')] bg-cover sm:bg-[url('/starter-code/assets/home/background-home-tablet.jpg')] md:bg-[url('/starter-code/assets/home/background-home-desktop.jpg')]">
      <div className="h-[50%] w-[60%] flex ">
        <div className="flex flex-1 flex-col text-white ">
          <p style={{ fontSize: '28px' }} > SO, YOU WANT TO TRAVEL TO </p>
          <p style={{ fontSize: '145px' }} className="-mt-5 ">SPACE</p>
          <p className="w-[80%]">
            Lets face it; if you want to go to space, you might as well
            genuinely go to outer space and not-hover kind of on the edge of it.
            Well sit back, and relax because we`ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" relative flex-1">
            <div className="w-64 h-64 bg-white rounded-full flex justify-center items-center text-4xl absolute bottom-[80px] right-[100px] ">
              EXPLORE
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

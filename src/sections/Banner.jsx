import React from "react";
import ButtonPrimary from "../components/Button";
import play from "./../assets/images/play.png";
import share from "./../assets/images/share_white.png";
import globe from "./../assets/images/globe_white.png";
import BannerOverlay from "../features/BannerOverlay";

function Banner() {
  return (
    <div
      className="w-full h-[450px] max-w-screen-xl mx-auto overflow-y-auto mt-10 rounded-2xl mb-30"
      style={{
        background:
          "linear-gradient(90deg, #003E8B 0%, #016E8B 73.44%, rgba(0, 114, 148, 0) 100%)",
      }}
    >
      <div className="flex flex-wrap justify-between flex-row ">
        <div className=" w-2/4 flex flex-wrap flex-col bg-opacity-100">
          <div className="flex flex-col flex-wrap px-10 py-20">
            <h1 className="text-[32px] text-white">
              Full Stack MERN Developer
            </h1>
            <div className="flex flex-wrap flex-col pr-30 mr-15">
              <p className="text-white ">
                Full stack developer is someone who takes care of front-end and
                back-end systems. Full stack developers are
              </p>
              <div className="flex flex-  row pt-5 space-x-10">
                <ButtonPrimary label={"Get Started"} />
                <div className="flex flex-row space-x-3">
                  <button className="rounded-full shadow-lg">
                    <img
                      src={play}
                      alt="Button"
                      className="w-15 h-15 object-fit"
                    />
                  </button>
                  <div className="flex flex-col pt-2">
                    <h2 className="text-white">Watch</h2>
                    <div className="flex flex-row space-x-2">
                      <h2 className="text-white">Intro Video</h2>
                      <span className="text-[#FBB31A] text-[13px] pt-1">
                        (15 mins)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-5 space-x-3">
                <div className="flex flex-wrap flex-row space-x-2">
                  <img
                    src={share}
                    className="w-5 h-5 object-contain"
                    alt="share"
                  />
                  <h2 className="text-white">Share</h2>
                </div>
                <div className="flex flex-wrap flex-row space-x-2">
                  <img
                    src={globe}
                    className="w-5 h-5 object-contain"
                    alt="language"
                  />
                  <h2 className="text-white">English</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 flex flex-wrap flex-col overflow-visible">
          <div
            className="w-full h-[450px] inset-0 bg-[url(/src/assets/images/banner-img.png)] bg-opacity-100 bg-[length:100%_100%] bg-no-clip rounded-none bg-no-repeat"
            style={{ borderRadius: 0 }}
          ></div>
        </div>
      </div>

      <BannerOverlay />
    </div>
  );
}

export default Banner;

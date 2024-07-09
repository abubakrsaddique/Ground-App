import React from "react";
import Close from "../../images/close.png";

const ProfileImage = ({ onClose }) => {
  return (
    <div className="fixed right-0 top-0 h-full flex items-center justify-center z-50">
      <div className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-primary h-full p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100">
        <div className="mt-12 flex justify-between items-center">
          <p className=" text-xl  font-bold leading-6 text-darkbrown">
            Profile Image
          </p>
          <button
            type="button"
            className="inline-flex justify-center"
            onClick={onClose}
          >
            <img
              onClick={onClose}
              alt=""
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src={Close}
            />
          </button>
        </div>
        <div className="mt-6">
          <div>
            <div className="w-[350px] h-[40vh] bg-black flex justify-center items-center rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M10.7474 79.209L10.6641 79.2923C9.53906 76.834 8.83073 74.0423 8.53906 70.959C8.83073 74.0007 9.6224 76.7507 10.7474 79.209Z"
                  fill="#98A7C3"
                />
                <path
                  d="M37.5026 43.2493C42.9794 43.2493 47.4193 38.8095 47.4193 33.3327C47.4193 27.8559 42.9794 23.416 37.5026 23.416C32.0258 23.416 27.5859 27.8559 27.5859 33.3327C27.5859 38.8095 32.0258 43.2493 37.5026 43.2493Z"
                  fill="#98A7C3"
                />
                <path
                  d="M67.4609 8.33398H32.5443C17.3776 8.33398 8.33594 17.3757 8.33594 32.5423V67.459C8.33594 72.0007 9.1276 75.959 10.6693 79.2923C14.2526 87.209 21.9193 91.6673 32.5443 91.6673H67.4609C82.6276 91.6673 91.6693 82.6256 91.6693 67.459V57.9173V32.5423C91.6693 17.3757 82.6276 8.33398 67.4609 8.33398ZM84.8776 52.084C81.6276 49.2923 76.3776 49.2923 73.1276 52.084L55.7943 66.959C52.5443 69.7506 47.2943 69.7506 44.0443 66.959L42.6276 65.7923C39.6693 63.209 34.9609 62.959 31.6276 65.209L16.0443 75.6673C15.1276 73.334 14.5859 70.6257 14.5859 67.459V32.5423C14.5859 20.7923 20.7943 14.584 32.5443 14.584H67.4609C79.2109 14.584 85.4193 20.7923 85.4193 32.5423V52.5423L84.8776 52.084Z"
                  fill="#98A7C3"
                />
              </svg>
            </div>
            <br />
            <input
              accept="image/*"
              className="hidden"
              id="image-upload"
              type="file"
            />
            <div className="flex w-[100%] justify-between items-center">
              <label
                htmlFor="image-upload"
                className="bg-brown flex justify-center items-center rounded-full w-[47%] h-14 mb-3 mt-6 py-3 cursor-pointer text-primary font-semibold text-base leading-6  "
              >
                Select Image
              </label>
              <button
                className="bg-brown flex justify-center items-center rounded-full w-[47%] h-14 mb-3 mt-6 py-3 cursor-pointer text-primary font-semibold text-base leading-6 "
                disabled
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;

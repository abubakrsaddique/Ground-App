import React from "react";

const EditProfile = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 h-full overflow-y-auto max-w-md bg-darkgray rounded-t-3xl rounded-b-3xl z-50 p-5">
      <div className="w-full px-5 pb-5">
        <div className="h-full w-full flex items-center ">
          <form className="w-full">
            <div className="flex justify-end w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer border-2 border-lightbrown border-opacity-15"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={onClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-darkbrown mb-4 font-semibold flex text-2xl">
              Edit My Profile
            </p>
            <input
              required
              name="age"
              type="number"
              min="0"
              placeholder="Age"
              className="mb-3 w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black"
            />
            <div className="my-7 flex w-full items-center gap-2 rounded-2xl ">
              <input
                required
                name="feet"
                type="number"
                placeholder="Height"
                className="mb-3 w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black"
              />
              <input
                required
                name="inches"
                type="number"
                placeholder="Height"
                className="mb-3 w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black"
              />
              <div className="mr-1 flex h-12 w-32 items-center mb-[14px] rounded-3xl bg-primary">
                <div className="ml-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl bg-primary text-[#1E2534]">
                  Cm
                </div>
                <div className="mr-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl bg-[#1E2534] text-white">
                  Ft
                </div>
              </div>
            </div>
            <div className="my-7 flex w-full items-center gap-2 rounded-2xl bg-white">
              <input
                required
                name="weight"
                type="number"
                placeholder="Weight"
                className="mb-3 w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black"
              />
              <div className="mr-1 flex h-12 w-32 items-center mb-[14px] rounded-3xl bg-primary">
                <div className="ml-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl bg-[#1E2534] text-white">
                  kg
                </div>
                <div className="mr-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl bg-primary text-[#1E2534]">
                  Lbs
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-darkbrown font-semi mb-4 text-2xl">
                Goal
              </p>
              <label className="mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl bg-primary px-5 py-4">
                <span>Lose Weight</span>
                <div className="h-4 w-4 rounded-full border-2 border-caption"></div>
              </label>
              <label className="mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl bg-primary px-5 py-4">
                <span>Maintain Weight</span>
                <div className="h-4 w-4 rounded-full border-2 border-caption"></div>
              </label>
              <label className="mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl bg-primary px-5 py-4">
                <span>Gain Weight</span>
                <div className="h-4 w-4 rounded-full border-2 border-caption"></div>
              </label>
              <label className="mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl bg-primary px-5 py-4">
                <span>Just Exploring</span>
                <div className="h-4 w-4 rounded-full border-2 border-caption"></div>
              </label>
            </div>
            <div>
              <p className="font-semibold text-darkbrown font-semi text-2xl">
                Daily Meal Amount
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold  bg-primary">
                  3
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold bg-primary ">
                  4
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold bg-primary ">
                  5
                </div>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold bg-primary ">
                  6
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 flex h-14 w-full items-center justify-center rounded-3xl bg-darkbrown text-lg font-medium text-primary"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

import React from "react";

const MyAccount = ({ onClose }) => {
  return (
    <div className="bg-black w-screen top-0 fixed right-0 h-screen z-50 bg-opacity-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-darkgray rounded-tl-3xl rounded-bl-3xl flex flex-col items-center justify-center p-5 z-[999]  ">
        <div className="w-full flex justify-end ">
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

        <form className="flex w-full flex-col">
          <p className="text-darkbrown mb-4 font-semibold text-xl">
            Edit My Account
          </p>
          <input
            required
            type="password"
            placeholder="Enter Old Password"
            name="oldPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
          />
          <input
            required
            type="password"
            placeholder="Enter New Password"
            name="newPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
          />
          <input
            required
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
          />
          <button
            type="submit"
            className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-darkbrown text-base font-medium text-primary"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

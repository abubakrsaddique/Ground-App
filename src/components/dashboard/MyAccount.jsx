import React, { useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { FaSpinner } from "react-icons/fa";

const MyAccount = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        alert("Password updated successfully!");
        onClose(); // Close the modal after successful password change
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
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

        <form className="flex w-full flex-col" onSubmit={handleChangePassword}>
          <p className="text-darkbrown mb-4 font-semibold text-xl">
            Edit My Account
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            required
            type="password"
            placeholder="Enter Old Password"
            name="oldPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter New Password"
            name="newPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            className="mb-3 w-full rounded-3xl px-6 py-4 text-base font-medium leading-4 outline-black"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-darkbrown text-base font-medium text-primary"
            disabled={isLoading}
          >
            {isLoading ? <FaSpinner className="animate-spin mr-2" /> : null}
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;

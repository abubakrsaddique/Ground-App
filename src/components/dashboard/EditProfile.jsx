import React, { useState, useEffect } from "react";
import { firestore, auth } from "../../Firebase";
import { FaSpinner } from "react-icons/fa";

const EditProfile = ({ onClose, userUid, profileData }) => {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState("");
  const [lengthUnit, setLengthUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [feetInches, setFeetInches] = useState({ feet: "", inches: "" });
  const [cmValue, setCmValue] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [kgValue, setKgValue] = useState("");
  const [lbsValue, setLbsValue] = useState("");

  const handleLengthUnitChange = (unit) => {
    setLengthUnit(unit);

    if (unit === "ft" && cmValue !== "") {
      const feet = Math.floor(cmValue / 30.48);
      const inches = ((cmValue / 30.48) % 1) * 12;
      setFeetInches({ feet: feet, inches: inches.toFixed(2) });
      setCmValue("");
    } else if (
      unit === "cm" &&
      feetInches.feet !== "" &&
      feetInches.inches !== ""
    ) {
      const cm = feetInches.feet * 30.48 + feetInches.inches * 2.54;
      setCmValue(cm.toFixed(2));
      setFeetInches({ feet: "", inches: "" });
    }
  };
  const handleWeightUnitChange = (unit) => {
    setWeightUnit(unit);

    if (unit === "lbs" && kgValue !== "") {
      const lbs = kgValue * 2.20462;
      setLbsValue(lbs.toFixed(2));
      setKgValue("");
    } else if (unit === "kg" && lbsValue !== "") {
      const kg = lbsValue / 2.20462;
      setKgValue(kg.toFixed(2));
      setLbsValue("");
    }
  };
  const handleFeetInputChange = (e) => {
    const newFeet = e.target.value;
    setFeetInches({ ...feetInches, feet: newFeet });
  };

  const handleInchesInputChange = (e) => {
    const newInches = e.target.value;
    setFeetInches({ ...feetInches, inches: newInches });
  };
  const handleCmInputChange = (event) => {
    setCmValue(event.target.value);
  };

  const handleKgInputChange = (event) => {
    setKgValue(event.target.value);
  };

  const handleLbsInputChange = (event) => {
    setLbsValue(event.target.value);
  };

  const handleGoalChange = (goal) => {
    setSelectedGoal(goal);
  };

  const handleMealChange = (meal) => {
    setSelectedMeal(meal);
  };

  const user = auth.currentUser;
  if (!user) {
    console.error("User is not authenticated.");
    return;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const { feet, inches } = feetInches;
    const heightInFeetAndInches = `${feet}'${inches}"`;

    const updatedProfileData = {
      age,
      height: lengthUnit === "cm" ? cmValue : heightInFeetAndInches,
      weight: weightUnit === "kg" ? kgValue : lbsValue,
      selectedGoal,
      selectedMeal,
    };

    try {
      const userRef = firestore.collection("users").doc(userUid);

      await userRef.update({
        profileData: {
          ...updatedProfileData,
        },
      });

      setLoading(false);
      setSuccessMessage("Data saved successfully!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error saving profile data: ", error);
      setLoading(false);
      setErrorMessage("Error saving profile data.");
    }
  };

  useEffect(() => {
    setAge(profileData.age || "");
    setSelectedGoal(profileData.selectedGoal || "");
    setSelectedMeal(profileData.selectedMeal || "");
    setSelectedMeal(profileData.selectedMeal || "");
    if (profileData.height) {
      if (profileData.height.includes("'")) {
        const [feet, inches] = profileData.height.split("'");
        setFeetInches({ feet: feet, inches: inches });
        setLengthUnit("ft");
      } else {
        setCmValue(profileData.height);
        setLengthUnit("cm");
      }
    }

    if (profileData.weight) {
      if (profileData.weight.includes("kg")) {
        setKgValue(profileData.weight);
        setWeightUnit("kg");
      } else {
        setLbsValue(profileData.weight);
        setWeightUnit("lbs");
      }
    }
  }, [profileData]);

  return (
    <div className="bg-black w-screen top-0 fixed right-0 h-screen z-50 bg-opacity-50">
      <div className="fixed top-0 right-0 h-full overflow-y-auto no-scrollbar max-w-md bg-darkgray rounded-tl-3xl rounded-bl-3xl z-50 p-5">
        <div className="w-full px-5 pb-5 mob:pl-12 mob:pr-1">
          <div className="h-full w-full flex items-center ">
            <form className="w-full" onSubmit={handleSubmit}>
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mb-3 w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
              />

              <div className="my-7 flex w-full h-12 items-center justify-center gap-2 rounded-3xl bg-primary p-4">
                {lengthUnit === "ft" && (
                  <>
                    <input
                      required
                      name="feet"
                      type="number"
                      placeholder="Feet"
                      value={feetInches.feet}
                      onChange={handleFeetInputChange}
                      className="w-[90px] rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                    />
                    <input
                      required
                      name="inches"
                      type="number"
                      placeholder="Inches"
                      value={feetInches.inches}
                      onChange={handleInchesInputChange}
                      className="w-[90px] rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                    />
                  </>
                )}
                {lengthUnit === "cm" && (
                  <input
                    required
                    name="cm"
                    type="number"
                    placeholder="Height (cm)"
                    value={cmValue}
                    onChange={handleCmInputChange}
                    className="w-full -mx-4 rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                  />
                )}

                <div className="flex gap-2 ml-4">
                  <div
                    onClick={() => handleLengthUnitChange("ft")}
                    className={`flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl ${
                      lengthUnit === "cm"
                        ? "bg-primary text-darkbrown"
                        : "bg-[#1E2534] text-primary"
                    }`}
                  >
                    Ft
                  </div>
                  <div
                    onClick={() => handleLengthUnitChange("cm")}
                    className={`flex h-9 w-16 cursor-pointer items-center justify-center rounded-2xl ${
                      lengthUnit === "ft"
                        ? "bg-primary text-darkbrown"
                        : "bg-[#1E2534] text-primary"
                    }`}
                  >
                    Cm
                  </div>
                </div>
              </div>
              <div className="my-7 flex w-full h-12 justify-center items-center gap-2 rounded-3xl bg-primary">
                {weightUnit === "lbs" && (
                  <input
                    required
                    name="weightLbs"
                    type="number"
                    placeholder="Weight (lbs)"
                    value={lbsValue}
                    onChange={handleLbsInputChange}
                    className="w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                  />
                )}
                {weightUnit === "kg" && (
                  <input
                    required
                    name="weightKg"
                    type="number"
                    placeholder="Weight (kg)"
                    value={kgValue}
                    onChange={handleKgInputChange}
                    className="w-full rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                  />
                )}

                <div className="mr-1 flex h-12 w-32 items-center rounded-3xl bg-primary">
                  <div
                    onClick={() => handleWeightUnitChange("lbs")}
                    className={`ml-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-3xl ${
                      weightUnit === "kg"
                        ? "bg-primary text-darkbrown"
                        : "bg-[#1E2534] text-primary"
                    }`}
                  >
                    Lbs
                  </div>
                  <div
                    onClick={() => handleWeightUnitChange("kg")}
                    className={`mr-1 flex h-9 w-16 cursor-pointer items-center justify-center rounded-3xl ${
                      weightUnit === "lbs"
                        ? "bg-primary text-darkbrown"
                        : "bg-[#1E2534] text-primary"
                    }`}
                  >
                    Kg
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-darkbrown font-semi mb-4 text-2xl">
                  Goal
                </div>
                <label
                  className={`mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl ${
                    selectedGoal === "lose"
                      ? "bg-primary text-white"
                      : "bg-primary"
                  } px-5 py-4`}
                  onClick={() => handleGoalChange("lose")}
                >
                  <span>Lose Weight</span>
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-lightbrown ${
                      selectedGoal === "lose" ? "bg-lightgreen border-none" : ""
                    }`}
                  ></div>
                </label>
                <label
                  className={`mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl ${
                    selectedGoal === "maintain"
                      ? "bg-primary text-white"
                      : "bg-primary"
                  } px-5 py-4`}
                  onClick={() => handleGoalChange("maintain")}
                >
                  <span>Maintain Weight</span>
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-lightbrown ${
                      selectedGoal === "maintain"
                        ? "bg-lightgreen border-none"
                        : ""
                    }`}
                  ></div>
                </label>
                <label
                  className={`mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl ${
                    selectedGoal === "gain"
                      ? "bg-primary text-white"
                      : "bg-primary"
                  } px-5 py-4`}
                  onClick={() => handleGoalChange("gain")}
                >
                  <span>Gain Weight</span>
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-lightbrown ${
                      selectedGoal === "gain" ? "bg-lightgreen border-none" : ""
                    }`}
                  ></div>
                </label>
                <label
                  className={`mb-4 flex h-12 cursor-pointer items-center justify-between rounded-3xl ${
                    selectedGoal === "explore"
                      ? "bg-primary text-white"
                      : "bg-primary"
                  } px-5 py-4`}
                  onClick={() => handleGoalChange("explore")}
                >
                  <span>Just Exploring</span>
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-lightbrown ${
                      selectedGoal === "explore"
                        ? "bg-lightgreen border-none"
                        : ""
                    }`}
                  ></div>
                </label>
              </div>
              <div>
                <p className="font-semibold text-darkbrown font-semi text-2xl">
                  Daily Meal Amount
                </p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold ${
                      selectedMeal === "3"
                        ? "bg-[#1E2534] text-primary"
                        : "bg-primary"
                    }`}
                    onClick={() => handleMealChange("3")}
                  >
                    3
                  </div>
                  <div
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold ${
                      selectedMeal === "4"
                        ? "bg-[#1E2534] text-primary"
                        : "bg-primary"
                    }`}
                    onClick={() => handleMealChange("4")}
                  >
                    4
                  </div>
                  <div
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold ${
                      selectedMeal === "5"
                        ? "bg-[#1E2534] text-primary"
                        : "bg-primary"
                    }`}
                    onClick={() => handleMealChange("5")}
                  >
                    5
                  </div>
                  <div
                    className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold ${
                      selectedMeal === "6"
                        ? "bg-[#1E2534] text-primary"
                        : "bg-primary"
                    }`}
                    onClick={() => handleMealChange("6")}
                  >
                    6
                  </div>
                </div>
              </div>
              {successMessage && (
                <div className="text-darkbrown">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-lightbrown">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="mt-10 flex h-14 w-full items-center justify-center rounded-3xl bg-darkbrown text-lg font-medium text-primary"
                disabled={loading}
              >
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto" />
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

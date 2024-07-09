import React, { useState } from "react";

const EditProfile = ({ onClose }) => {
  const [lengthUnit, setLengthUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [feetValue, setFeetValue] = useState("");
  const [inchesValue, setInchesValue] = useState("");
  const [cmValue, setCmValue] = useState("");
  const [kgValue, setKgValue] = useState("");
  const [lbsValue, setLbsValue] = useState("");

  const handleLengthUnitChange = (unit) => {
    setLengthUnit(unit);

    if (unit === "ft" && cmValue !== "") {
      const feet = Math.floor(cmValue / 30.48);
      const inches = ((cmValue / 30.48) % 1) * 12;
      setFeetValue(feet);
      setInchesValue(inches.toFixed(2));
      setCmValue("");
    } else if (unit === "cm" && feetValue !== "" && inchesValue !== "") {
      const cm = feetValue * 30.48 + inchesValue * 2.54;
      setCmValue(cm.toFixed(2));
      setFeetValue("");
      setInchesValue("");
    }
  };

  const handleFeetInputChange = (event) => {
    setFeetValue(event.target.value);
  };

  const handleInchesInputChange = (event) => {
    setInchesValue(event.target.value);
  };

  const handleCmInputChange = (event) => {
    setCmValue(event.target.value);
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

  return (
    <div className="bg-black w-screen top-0 fixed right-0 h-screen z-50 bg-opacity-50">
      <div className="fixed top-0 right-0 h-full overflow-y-auto no-scrollbar max-w-md bg-darkgray rounded-tl-3xl rounded-bl-3xl z-50 p-5">
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
                      value={feetValue}
                      onChange={handleFeetInputChange}
                      className="w-[90px] rounded-3xl px-6 py-4 text-sm font-medium leading-4 outline-black remove-arrow"
                    />
                    <input
                      required
                      name="inches"
                      type="number"
                      placeholder="Inches"
                      value={inchesValue}
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
    </div>
  );
};

export default EditProfile;

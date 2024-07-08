import React, { useState } from "react";
import Image from "../../images/login.webp";
import Image1 from "../../images/image1.webp";
import Image2 from "../../images/image2.webp";
import Image3 from "../../images/image3.webp";
import Image4 from "../../images/image4.webp";
import Image5 from "../../images/image5.webp";
import Image6 from "../../images/image6.webp";
import Image7 from "../../images/image7.webp";
import Image8 from "../../images/image8.webp";
import Image9 from "../../images/image9.webp";
import Image10 from "../../images/image10.webp";
import Image11 from "../../images/image11.webp";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardNumber) => {
    if (selectedCard === cardNumber) {
      setSelectedCard(0);
    } else {
      setSelectedCard(cardNumber);
    }
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const handleTrainerSelect = (trainerName) => {
    setSelectedTrainer(trainerName);
    setIsOpen(false);
  };
  const handleChange = () => {
    setIsOpen(true);
  };
  return (
    <div className="min-h-screen w-full  bg-gray">
      <div className="flex flex-row mob:flex-col-reverse tab:flex-col-reverse">
        {/* Left Side */}
        <div className="no-scrollbar justify-center relative flex w-[40%]">
          <div className="w-full realtive">
            <div className="h-screen overflow-scroll mt-0 block">
              <div className="flex h-10 w-10 cursor-pointer items-center mt-8 ml-8 justify-center rounded-xl border-[3px] border-darkbrown border-opacity-[0.1]">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.54175 6.22868L14.0417 6.22868"
                    stroke="#302A25"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.58325 11.2488L1.54159 6.22884L6.58325 1.20801"
                    stroke="#302A25"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className=" text-[18px] font-normal leading-4 text-lightbrown mt-12 w-[70%] mx-auto">
                  Already have an account?
                  <span className="cursor-pointer  font-medium text-lightgreen underline">
                    Log In
                  </span>
                </p>
                <div className="relative pl-5 w-[70%] mx-auto">
                  <div className="absolute left-0 top-8 h-full border border-dashed border-lightgreen"></div>
                  <p className="text-darkbrown -ml-9 mt-10 flex items-center gap-2 text-2xl font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      className="text-2xl"
                    >
                      <circle cx="16" cy="16" r="16" fill="#8FB69F"></circle>
                      <path
                        fill="#fff"
                        d="M14.046 11.76v-1.328h3.008V22h-1.472V11.76h-1.537Z"
                      ></path>
                    </svg>
                    Select Subscription Plan
                  </p>
                  {/* Card 1 */}
                  <div className="mt-8 flex flex-col gap-4">
                    <div
                      className={`relative bg-primary pb-4 pt-5 rounded-3xl border-2 border-lightgreen cursor-pointer hover:border-2 hover:border-lightgreen ${
                        selectedCard === 1 ? "border-lightgreen" : ""
                      }`}
                      onClick={() => handleCardClick(1)}
                    >
                      <div className="absolute left-[31%] -top-4 flex h-6 items-center justify-center rounded-[6px] bg-lightgreen px-2 shadow-md">
                        <p className="text-[8px] font-bold tracking-[1px] text-primary">
                          BEST VALUE • 60% OFF
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between px-6">
                          <p className="text-sm font-semibold text-black">
                            <span className="font-medium text-lightgreen">
                              Annual •
                            </span>{" "}
                            Billed at $99.99 USD/yr
                          </p>
                          <div className="relative">
                            <input
                              type="checkbox"
                              className="h-7 w-7 appearance-none rounded-md border border-gray checked:bg-lightgreen"
                              checked={selectedCard === 1}
                              onChange={() => handleCardClick(1)}
                            />
                            {selectedCard === 1 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute left-[-7px] top-[-5px] m-2 h-6 w-6 text-white"
                              >
                                <path d="M6 10l2 2 6-6"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                        {selectedCard === 1 ? (
                          <>
                            <p className="px-6 text-xl font-bold leading-[32px] text-black">
                              $8.33 <span className=""> USD </span>{" "}
                              <span className="-ml-1"> /mo </span>
                            </p>
                            <p className="text-dark-brown mb-3 mt-[5px] px-6 text-xs font-bold">
                              All programs included in your subscription
                            </p>
                            {/* Images Section */}
                            <div className="no-scrollbar mb-5 flex items-center gap-1 overflow-scroll px-6">
                              {/* Image 1 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image1}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 2 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image2}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 3 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image3}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 4 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image4}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 5 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image5}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 6 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image6}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Sculpt Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 7 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image7}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Runway Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 8 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image8}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Juicy Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 9 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image9}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Burn Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 10 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image10}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  ForeverFit Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 11 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image11}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Fuego Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                            </div>
                            {/* Images Below Content */}
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Access To All Trainers Programs
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Log Or Scan Your Branded Foods
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Comprehensive Period Tracking
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Access To Our Grounds Community
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold">
                                Access To All Trainers Programs
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold">
                                Access To All Trainers Programs
                              </p>
                            </div>
                          </>
                        ) : (
                          <div>
                            <p className="px-6 text-xl font-bold leading-[32px] text-black">
                              $8.33 <span className=""> USD </span>{" "}
                              <span className="-ml-1"> /mo </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div
                      className={`relative bg-primary pb-4 pt-5 rounded-3xl border-2 cursor-pointer border-lightgreen hover:border-2 hover:border-lightgreen ${
                        selectedCard === 2 ? "border-lightgreen" : ""
                      }`}
                      onClick={() => handleCardClick(2)}
                    >
                      <div>
                        <div className="flex items-center justify-between px-6">
                          <p className="text-sm font-semibold text-black">
                            <span className="font-medium text-lightgreen">
                              Monthly
                            </span>
                          </p>
                          <div className="relative">
                            <input
                              type="checkbox"
                              className="h-7 w-7 appearance-none rounded-md border border-gray checked:bg-lightgreen"
                              checked={selectedCard === 2}
                              onChange={() => handleCardClick(2)}
                            />
                            {selectedCard === 2 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="absolute left-[-7px] top-[-5px] m-2 h-6 w-6 text-white"
                              >
                                <path d="M6 10l2 2 6-6"></path>
                              </svg>
                            )}
                          </div>
                        </div>
                        {selectedCard === 2 ? (
                          <>
                            <p className="px-6 text-xl font-bold leading-[32px] text-black">
                              $19.99 <span className=""> USD </span>{" "}
                              <span className="-ml-1"> /mo </span>
                            </p>
                            <p className="px-6 text-sm text-lightbrown">
                              Standard Pricing
                            </p>
                            <p className="text-dark-brown mb-3 mt-[5px] px-6 text-xs font-bold">
                              All programs included in your subscription
                            </p>
                            {/* Images Section */}
                            <div className="no-scrollbar mb-5 flex items-center gap-1 overflow-scroll px-6">
                              {/* Image 1 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image1}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 2 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image2}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 3 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image3}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 4 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image4}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 5 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image5}
                                />
                                <div className="absolute top-0 z-[1] h-full w-full rounded-2xl"></div>
                              </div>
                              {/* Image 6 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image6}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Sculpt Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 7 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image7}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Runway Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 8 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image8}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Juicy Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 9 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image9}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Burn Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 10 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image10}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  ForeverFit Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                              {/* Image 11 */}
                              <div className="planText relative h-20 w-20 flex-shrink-0 rounded-2xl">
                                <img
                                  alt="img"
                                  loading="lazy"
                                  width="800"
                                  height="522"
                                  decoding="async"
                                  data-nimg="1"
                                  className="h-full w-full rounded-[10px] object-cover"
                                  src={Image11}
                                />
                                <p className="absolute left-[50%] top-[50%] z-[10] translate-x-[-50%] translate-y-[-50%] text-center text-[10px] font-medium leading-[13px] text-primary">
                                  Fuego Challenge
                                </p>
                                <div className="absolute top-0 z-[1] h-full w-full rounded-[16px] checkout-imgbox-overlay"></div>
                              </div>
                            </div>
                            {/* Images Below Content */}
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Access To All Trainers Programs
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Log Or Scan Your Branded Foods
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Comprehensive Period Tracking
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6 ">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold ">
                                Access To Our Grounds Community
                              </p>
                            </div>
                            <div className="my-2 flex items-center gap-2 px-6">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.13029 0.532554C6.51349 -0.142704 7.48651 -0.142704 7.86971 0.532554L9.76013 3.86372C9.84925 4.02076 9.97923 4.15075 10.1363 4.23987L13.4674 6.13029C14.1427 6.51349 14.1427 7.48651 13.4674 7.86971L10.1363 9.76013C9.97923 9.84925 9.84925 9.97924 9.76013 10.1363L7.86971 13.4674C7.48651 14.1427 6.51349 14.1427 6.13029 13.4674L4.23987 10.1363C4.15075 9.97924 4.02076 9.84925 3.86372 9.76013L0.532554 7.86971C-0.142704 7.48651 -0.142704 6.51349 0.532553 6.13029L3.86372 4.23987C4.02076 4.15075 4.15075 4.02076 4.23987 3.86372L6.13029 0.532554Z"
                                  fill="#8FB69F"
                                />
                              </svg>
                              <p className="text-darkbrown left-4 text-sm font-semibold">
                                Access To All Trainers Programs
                              </p>
                            </div>
                          </>
                        ) : (
                          <div>
                            {" "}
                            <p className="px-6 text-xl font-bold leading-[32px] text-black">
                              $19.99 <span className=""> USD </span>{" "}
                              <span className="-ml-1"> /mo </span>
                            </p>
                            <p className="px-6 text-sm text-lightbrown">
                              Standard Pricing
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full mt-5">
                    <div className="rounded-2xl border-2 border-lightbrown bg-primary p-2 px-4">
                      <p className="flex cursor-pointer text-lightbrown items-center justify-between text-sm font-normal ">
                        {selectedTrainer ? (
                          <>
                            {selectedTrainer}
                            <span
                              className="text-sm font-semibold text-red"
                              onClick={toggleCard}
                            >
                              Change
                            </span>
                          </>
                        ) : (
                          <>
                            Trainer referred by
                            <span
                              className="text-sm font-semibold text-lightgreen"
                              onClick={toggleCard}
                            >
                              View
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  {/* View Card */}
                  <div
                    className={`absolute mt-2 z-[101] w-[94%] rounded-2xl border-2 border-lightbrown bg-primary py-2 pt-4 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect("Heidi Somers")}
                    >
                      Heidi Somers
                    </p>
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect("Bailey Stewart")}
                    >
                      Bailey Stewart
                    </p>
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect(" Brooklyn Moore")}
                    >
                      Brooklyn Moore
                    </p>
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect(" Kara Corey")}
                    >
                      Kara Corey
                    </p>
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect("Teresa Hurtado")}
                    >
                      Teresa Hurtado
                    </p>
                    <p
                      className="flex cursor-pointer text-lightbrown items-center justify-between px-4 py-2 text-sm font-normal  hover:bg-[#F8F8F8]"
                      onClick={() => handleTrainerSelect("None")}
                    >
                      None
                    </p>
                  </div>
                </div>
                <div className="px-[18%] relative">
                  <div className="relative z-[100] flex h-14 cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-lightgreen font-medium text-primary mt-11  w-full text-base hover:bg-brown ">
                    <span className="relative z-10">
                      Continue To Create Account
                    </span>
                    <span className="absolute left-0 top-0 z-0 h-[1px] w-[1px] translate-x-[-50%] translate-y-[-50%] rounded-[50%] bg-transparent"></span>
                  </div>
                  <p className="mt-5 text-center text-xs font-light leading-5">
                    At the end of your free trial your subscription will
                    automatically
                    <br />
                    rollover to a $99.99/year subscription billed annually
                    <br />
                    unless
                    <br />
                    cancelled.
                    <br />
                    <span>
                      <a className="underline cursor-pointer">Privacy Policy</a>{" "}
                      |{" "}
                      <a className="underline cursor-pointer">
                        Terms of service
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="relative block w-[60%]">
          <div className="absolute left-5 top-5 hidden tab:block mob:block">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-[3px] border-darkbrown border-opacity-[0.1]">
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.54175 6.22868L14.0417 6.22868"
                  stroke="#302A25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.58325 11.2488L1.54159 6.22884L6.58325 1.20801"
                  stroke="#302A25"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="absolute right-14 top-9 flex items-center  gap-4 mob:hidden">
            <div className="relative z-[100] text-primary cursor-pointer overflow-hidden flex h-11 w-24 items-center justify-center rounded-3xl text-base font-medium ">
              <span className="relative z-10">Home</span>
            </div>
            <div className="relative z-[100] cursor-pointer overflow-hidden flex h-11 w-24 items-center justify-center rounded-3xl bg-primary text-base font-medium hover:bg-darkbrown  hover:text-primary mob:hidden">
              <button className="relative z-10"> Login</button>
            </div>
          </div>
          <img
            fetchpriority="high"
            width="3392"
            height="4096"
            decoding="async"
            data-nimg="1"
            className="h-screen w-full object-cover rounded-tl-[40px] mob:h-[400px] tab:h-[82vh] mob:rounded-none tab:rounded-none"
            src={Image}
          />
          <div className="absolute left-[50%] top-[50%] -mt-14  w-full translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-center text-5xl font-extrabold leading-[64px] text-primary">
              Start Your 7-Day
              <br />
              <span className="relative flex flex-col items-center">
                FREE Trial
                <svg
                  width="274"
                  height="11"
                  viewBox="0 0 274 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9C11.123 5.34032 79.6952 -0.881146 273 3.51047"
                    stroke="white"
                    strokeWidth="3"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-center text-base font-light leading-6 text-primary">
              Register now for the Grounds app and get
              <span className="font-semibold"> INSTANT ACCESS!</span>
            </p>
          </div>
          <div className="absolute bottom-16 left-[50%] z-[10] translate-x-[-50%]  items-center gap-4 ">
            <div className="flex items-center gap-6 mob:hidden tab:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="139"
                height="48"
                viewBox="0 0 139 48"
                fill="none"
              >
                <mask
                  id="mask0_1837_2363"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="139"
                  height="48"
                >
                  <rect width="139" height="48" rx="16" fill="#1E2534" />
                </mask>
                <g mask="url(#mask0_1837_2363)">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="138"
                    height="47"
                    rx="15.5"
                    stroke="#302A25"
                  />
                  <path
                    d="M48.8253 14.2227L48.2948 12.561C48.1647 12.1506 48.0546 11.6927 47.9545 11.3023H47.9345C47.8369 11.6927 47.7343 12.1606 47.6166 12.561L47.0961 14.2227H48.8253ZM46.8959 15.1511L46.3153 17.063H45.0441L47.2062 10.3213H48.7753L50.965 17.063H49.6462L49.0356 15.1511"
                    fill="#302A25"
                  />
                  <path
                    d="M52.8042 12.1934L53.595 14.6608C53.7352 15.0913 53.8328 15.4816 53.9229 15.882H53.9529C54.043 15.4816 54.1531 15.1013 54.2832 14.6608L55.064 12.1934H56.3528L54.4934 17.0632H53.2847L51.4729 12.1934"
                    fill="#302A25"
                  />
                  <path
                    d="M60.0641 14.6806C59.1932 14.6706 58.3624 14.8508 58.3624 15.5915C58.3624 16.072 58.6727 16.2922 59.0631 16.2922C59.5611 16.2922 59.9139 15.9719 60.0316 15.6215C60.0641 15.5315 60.0641 15.4414 60.0641 15.3513V14.6806ZM61.2628 15.8918C61.2628 16.3323 61.2828 16.7627 61.3429 17.0605H60.2318L60.1442 16.5224H60.1116C59.8239 16.9003 59.3133 17.1706 58.6727 17.1706C57.6917 17.1706 57.1437 16.4624 57.1437 15.7216C57.1437 14.5004 58.2323 13.8723 60.0316 13.8823V13.8022C60.0316 13.4819 59.9039 12.9514 59.0431 12.9514C58.5626 12.9514 58.0621 13.1015 57.7318 13.3117L57.4915 12.5109C57.8519 12.2907 58.4825 12.083 59.2533 12.083C60.8123 12.083 61.2628 13.0715 61.2628 14.1426"
                    fill="#302A25"
                  />
                  <path
                    d="M63.002 12.1932H64.2307V17.063H63.002V12.1932ZM63.6101 11.4925C63.2022 11.4925 62.9319 11.1922 62.9319 10.8318C62.9319 10.4514 63.2097 10.1611 63.6226 10.1611C64.0405 10.1611 64.3008 10.4514 64.3108 10.8318C64.3108 11.1922 64.0405 11.4925 63.6226 11.4925"
                    fill="#302A25"
                  />
                  <path
                    d="M66 17.0633H67.2312V9.95117H66V17.0633Z"
                    fill="#302A25"
                  />
                  <path
                    d="M71.5906 14.6806C70.7197 14.6706 69.8889 14.8508 69.8889 15.5915C69.8889 16.072 70.1992 16.2922 70.5896 16.2922C71.0901 16.2922 71.4404 15.9719 71.5606 15.6215C71.5906 15.5315 71.5906 15.4414 71.5906 15.3513V14.6806ZM72.7893 15.8918C72.7893 16.3323 72.8093 16.7627 72.8694 17.0605H71.7608L71.6707 16.5224H71.6406C71.3503 16.9003 70.8398 17.1706 70.1992 17.1706C69.2207 17.1706 68.6702 16.4624 68.6702 15.7216C68.6702 14.5004 69.7613 13.8723 71.5606 13.8823V13.8022C71.5606 13.4819 71.4304 12.9514 70.5696 12.9514C70.0891 12.9514 69.5886 13.1015 69.2608 13.3117L69.0205 12.5109C69.3809 12.2907 70.009 12.083 70.7798 12.083C72.3388 12.083 72.7893 13.0715 72.7893 14.1426"
                    fill="#302A25"
                  />
                  <path
                    d="M75.7598 15.0513C75.7598 15.1514 75.7698 15.2515 75.7898 15.3416C75.92 15.8421 76.3504 16.2024 76.8784 16.2024C77.6492 16.2024 78.1197 15.5918 78.1197 14.6033C78.1197 13.7425 77.7092 13.0418 76.8884 13.0418C76.3879 13.0418 75.93 13.4021 75.7998 13.9427C75.7798 14.0328 75.7598 14.1429 75.7598 14.263V15.0513ZM74.5286 9.95117H75.7598V12.8616H75.7798C76.0801 12.3911 76.6081 12.0833 77.3389 12.0833C78.5301 12.0833 79.3784 13.0718 79.3684 14.5533C79.3684 16.3025 78.2598 17.1734 77.1587 17.1734C76.5281 17.1734 75.97 16.9332 75.6197 16.3326H75.5996L75.5396 17.0633H74.4885C74.5085 16.733 74.5286 16.1924 74.5286 15.7019"
                    fill="#302A25"
                  />
                  <path
                    d="M80.8174 17.0633H82.0461V9.95117H80.8174V17.0633Z"
                    fill="#302A25"
                  />
                  <path
                    d="M86.8358 14.1125C86.8458 13.6621 86.6456 12.9213 85.8273 12.9213C85.0666 12.9213 84.7462 13.612 84.6962 14.1125H86.8358ZM84.6962 14.9709C84.7262 15.8518 85.4169 16.2322 86.1977 16.2322C86.7658 16.2322 87.1662 16.1421 87.5465 16.0119L87.7267 16.8503C87.3063 17.033 86.7257 17.1606 86.0275 17.1606C84.4459 17.1606 83.515 16.1921 83.515 14.7031C83.515 13.3518 84.3358 12.083 85.8974 12.083C87.4765 12.083 87.997 13.3818 87.997 14.4529C87.997 14.6831 87.977 14.8633 87.957 14.9709"
                    fill="#302A25"
                  />
                  <path
                    d="M94.1056 16.2822C94.8038 16.2822 95.2943 15.6015 95.2943 14.613C95.2943 13.8523 94.9539 12.9714 94.1156 12.9714C93.2447 12.9714 92.8944 13.8222 92.8944 14.6331C92.8944 15.5715 93.3648 16.2822 94.0931 16.2822H94.1056ZM94.0656 17.1731C92.6942 17.1731 91.6256 16.2322 91.6256 14.6631C91.6256 13.0615 92.6742 12.083 94.1456 12.083C95.5946 12.083 96.5656 13.1015 96.5656 14.583C96.5656 16.3723 95.3043 17.1731 94.0756 17.1731"
                    fill="#302A25"
                  />
                  <path
                    d="M98.012 13.6421C98.012 13.0815 97.9945 12.611 97.9745 12.1906H99.0431L99.1031 12.9213H99.1331C99.3534 12.541 99.8839 12.083 100.695 12.083C101.543 12.083 102.424 12.6311 102.424 14.1726V17.0605H101.193V14.3127C101.193 13.612 100.932 13.0815 100.264 13.0815C99.7738 13.0815 99.4334 13.4319 99.3033 13.8022C99.2633 13.9023 99.2433 14.0525 99.2433 14.1926V17.0605H98.012"
                    fill="#302A25"
                  />
                  <path
                    d="M108.092 10.9414V12.1902H109.261V13.1111H108.092V15.2507C108.092 15.8513 108.252 16.1516 108.72 16.1516C108.94 16.1516 109.061 16.1416 109.201 16.1016L109.221 17.03C109.041 17.1026 108.71 17.1601 108.33 17.1601C107.872 17.1601 107.501 17.01 107.271 16.7622C107.001 16.4819 106.881 16.0315 106.881 15.3909V13.1111H106.19V12.1902H106.881V11.2817"
                    fill="#302A25"
                  />
                  <path
                    d="M110.63 9.95117H111.861V12.8516H111.881C112.031 12.6213 112.241 12.4312 112.492 12.301C112.742 12.1634 113.03 12.0833 113.34 12.0833C114.171 12.0833 115.039 12.6314 115.039 14.1929V17.0633H113.81V14.323C113.81 13.6223 113.55 13.0818 112.869 13.0818C112.391 13.0818 112.051 13.4021 111.911 13.7725C111.871 13.8826 111.861 14.0127 111.861 14.1429V17.0633H110.63"
                    fill="#302A25"
                  />
                  <path
                    d="M119.799 14.1125C119.809 13.6621 119.609 12.9213 118.788 12.9213C118.027 12.9213 117.709 13.612 117.659 14.1125H119.799ZM117.659 14.9709C117.689 15.8518 118.377 16.2322 119.158 16.2322C119.729 16.2322 120.129 16.1421 120.507 16.0119L120.69 16.8503C120.269 17.033 119.689 17.1606 118.988 17.1606C117.409 17.1606 116.478 16.1921 116.478 14.7031C116.478 13.3518 117.299 12.083 118.858 12.083C120.437 12.083 120.958 13.3818 120.958 14.4529C120.958 14.6831 120.937 14.8633 120.917 14.9709"
                    fill="#302A25"
                  />
                  <path
                    d="M31.5956 23.6C31.5631 20.2641 34.3258 18.64 34.4535 18.5649C32.8894 16.2826 30.4645 15.9723 29.6111 15.9473C27.5766 15.7346 25.6021 17.1685 24.5661 17.1685C23.5075 17.1685 21.9084 15.9698 20.1892 16.0049C17.972 16.0399 15.8999 17.3237 14.7638 19.3132C12.4214 23.3747 14.1682 29.3407 16.4154 32.624C17.5415 34.2306 18.8529 36.0274 20.5721 35.9623C22.2538 35.8923 22.8819 34.8912 24.9114 34.8912C26.9234 34.8912 27.514 35.9623 29.2683 35.9223C31.0726 35.8923 32.2087 34.3082 33.2923 32.684C34.5936 30.8422 35.1141 29.0279 35.1341 28.9353C35.0916 28.9203 31.6306 27.599 31.5956 23.6Z"
                    fill="#302A25"
                  />
                  <path
                    d="M28.2823 13.7899C29.1857 12.6588 29.8088 11.1172 29.6336 9.55566C28.3248 9.61572 26.6882 10.4616 25.7447 11.5677C24.9114 12.5437 24.1631 14.1428 24.3583 15.6443C25.8298 15.7544 27.3388 14.9035 28.2823 13.7899Z"
                    fill="#302A25"
                  />
                  <path
                    d="M51.8909 29.9684L50.7297 26.3823C50.6071 26.0169 50.3769 25.1536 50.0365 23.7972H49.9965C49.8613 24.3803 49.6411 25.2437 49.3433 26.3823L48.2022 29.9684H51.8909ZM55.9049 35.6966H53.56L52.2763 31.6626H47.8168L46.5931 35.6966H44.3108L48.7352 21.9629H51.4629"
                    fill="#302A25"
                  />
                  <path
                    d="M65.0341 30.704C65.0341 29.738 64.8163 28.9447 64.3809 28.3191C63.9054 27.6684 63.2673 27.3406 62.4665 27.3406C61.9234 27.3406 61.4279 27.5233 60.99 27.8812C60.5496 28.244 60.2593 28.7145 60.1216 29.3001C60.0541 29.5703 60.0215 29.7931 60.0215 29.9682V31.6199C60.0215 32.3406 60.2418 32.9487 60.6822 33.4442C61.1251 33.9422 61.6982 34.1875 62.4039 34.1875C63.2348 34.1875 63.8804 33.8696 64.3384 33.229C64.8038 32.5909 65.0341 31.75 65.0341 30.704ZM67.2763 30.6214C67.2763 32.3056 66.8208 33.6394 65.9099 34.6154C65.0941 35.4863 64.0806 35.9192 62.8744 35.9192C61.5681 35.9192 60.6322 35.4487 60.0616 34.5128H60.0215V39.7305H57.8193V29.0523C57.8193 27.9938 57.7943 26.9077 57.7393 25.7916H59.6737L59.7963 27.3631H59.8389C60.5721 26.1795 61.6857 25.5889 63.1797 25.5889C64.3459 25.5889 65.3243 26.0518 66.1026 26.9753C66.8834 27.9012 67.2763 29.1149 67.2763 30.6214Z"
                    fill="#302A25"
                  />
                  <path
                    d="M76.4229 30.704C76.4229 29.738 76.2052 28.9447 75.7698 28.3191C75.2943 27.6684 74.6561 27.3406 73.8553 27.3406C73.3123 27.3406 72.8193 27.5233 72.3789 27.8812C71.9359 28.244 71.6506 28.7145 71.5155 29.3001C71.4454 29.5703 71.4129 29.7931 71.4129 29.9682V31.6199C71.4129 32.3406 71.6306 32.9487 72.0711 33.4442C72.514 33.9422 73.0871 34.1875 73.7953 34.1875C74.6236 34.1875 75.2693 33.8696 75.7297 33.229C76.1902 32.5909 76.4229 31.75 76.4229 30.704ZM78.6626 30.6214C78.6626 32.3056 78.2097 33.6394 77.2988 34.6154C76.483 35.4863 75.472 35.9192 74.2632 35.9192C72.9594 35.9192 72.0235 35.4487 71.4504 34.5128H71.4129V39.7305H69.2107V29.0523C69.2107 27.9938 69.1832 26.9077 69.1306 25.7916H71.065L71.1877 27.3631H71.2302C71.9609 26.1795 73.0746 25.5889 74.5686 25.5889C75.7372 25.5889 76.7107 26.0518 77.494 26.9753C78.2748 27.9012 78.6626 29.1149 78.6626 30.6214Z"
                    fill="#302A25"
                  />
                  <path
                    d="M91.4005 31.8454C91.4005 33.0116 90.9951 33.9625 90.1793 34.6983C89.2834 35.4991 88.0396 35.8995 86.4405 35.8995C84.9615 35.8995 83.7754 35.6142 82.877 35.0436L83.3875 33.2118C84.3559 33.7948 85.4145 34.0851 86.5706 34.0851C87.399 34.0851 88.0446 33.9 88.5076 33.5271C88.968 33.1517 89.1983 32.6512 89.1983 32.0256C89.1983 31.47 89.0106 30.9971 88.6302 30.6167C88.2498 30.2363 87.6167 29.8834 86.7333 29.5556C84.3284 28.6572 83.1272 27.3434 83.1272 25.6167C83.1272 24.488 83.5476 23.5621 84.391 22.8414C85.2318 22.1207 86.3529 21.7578 87.7518 21.7578C89.0031 21.7578 90.0416 21.978 90.8699 22.411L90.3194 24.2053C89.5461 23.7848 88.6702 23.5721 87.6918 23.5721C86.916 23.5721 86.3129 23.7623 85.88 24.1427C85.5146 24.483 85.3294 24.8985 85.3294 25.3864C85.3294 25.9295 85.5371 26.3774 85.96 26.7303C86.3254 27.0556 86.9911 27.4085 87.957 27.7913C89.1382 28.2668 90.0066 28.8224 90.5646 29.4605C91.1202 30.0987 91.4005 30.8944 91.4005 31.8454Z"
                    fill="#302A25"
                  />
                  <path
                    d="M98.6726 27.4428H96.2477V32.2501C96.2477 33.4738 96.6756 34.0844 97.534 34.0844C97.9244 34.0844 98.2522 34.0519 98.51 33.9843L98.57 35.6535C98.1396 35.8187 97.5665 35.8987 96.8608 35.8987C95.9925 35.8987 95.3118 35.6335 94.8213 35.1055C94.3333 34.5749 94.088 33.684 94.088 32.4353V27.4428H92.6416V25.7911H94.088V23.9793L96.2477 23.3262V25.7911H98.6726"
                    fill="#302A25"
                  />
                  <path
                    d="M107.334 30.734C107.334 29.8206 107.136 29.0398 106.741 28.3842C106.283 27.5934 105.622 27.198 104.766 27.198C103.883 27.198 103.21 27.5934 102.749 28.3842C102.354 29.0398 102.161 29.8356 102.161 30.7766C102.161 31.69 102.354 32.4707 102.749 33.1239C103.225 33.9147 103.89 34.3101 104.749 34.3101C105.587 34.3101 106.248 33.9097 106.723 33.1039C107.131 32.4382 107.334 31.6474 107.334 30.734ZM109.616 30.6639C109.616 32.1855 109.183 33.4342 108.312 34.4127C107.401 35.4187 106.193 35.9192 104.686 35.9192C103.23 35.9192 102.074 35.4362 101.21 34.4728C100.349 33.5093 99.9189 32.2931 99.9189 30.8266C99.9189 29.2901 100.362 28.0338 101.253 27.0578C102.141 26.0769 103.34 25.5889 104.846 25.5889C106.3 25.5889 107.471 26.0719 108.352 27.0353C109.196 27.9763 109.616 29.1825 109.616 30.6639Z"
                    fill="#302A25"
                  />
                  <path
                    d="M116.768 27.7285C116.551 27.6885 116.32 27.6684 116.075 27.6684C115.302 27.6684 114.701 27.9612 114.281 28.5443C113.915 29.0623 113.733 29.713 113.733 30.4988V35.6965H111.533L111.551 28.9122C111.551 27.7685 111.523 26.73 111.47 25.7916H113.387L113.467 27.6885H113.525C113.758 27.0378 114.126 26.5123 114.626 26.1194C115.117 25.7665 115.647 25.5889 116.218 25.5889C116.42 25.5889 116.606 25.6039 116.768 25.6289"
                    fill="#302A25"
                  />
                  <path
                    d="M124.509 29.705C124.524 29.0543 124.381 28.4888 124.083 28.0133C123.703 27.4027 123.115 27.0949 122.329 27.0949C121.611 27.0949 121.025 27.3952 120.577 27.9933C120.212 28.4688 119.992 29.0393 119.929 29.705H124.509ZM126.606 30.2756C126.606 30.671 126.581 31.0013 126.528 31.2741H119.929C119.952 32.2525 120.272 33.0008 120.885 33.5163C121.441 33.9793 122.161 34.207 123.045 34.207C124.021 34.207 124.911 34.0518 125.715 33.739L126.06 35.2681C125.122 35.6735 124.016 35.8812 122.737 35.8812C121.203 35.8812 119.997 35.4282 119.121 34.5223C118.247 33.6214 117.807 32.4077 117.807 30.8862C117.807 29.3922 118.212 28.1484 119.031 27.1574C119.884 26.0964 121.04 25.5684 122.492 25.5684C123.918 25.5684 125.002 26.0964 125.735 27.1574C126.318 27.9983 126.606 29.0393 126.606 30.2756Z"
                    fill="#302A25"
                  />
                </g>
              </svg>
              <svg
                width="139"
                height="48"
                viewBox="0 0 139 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1837_2391"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="139"
                  height="48"
                >
                  <rect width="139" height="48" rx="16" fill="#1E2534" />
                </mask>
                <g mask="url(#mask0_1837_2391)">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="138"
                    height="47"
                    rx="15.5"
                    stroke="#302A25"
                  />
                  <path
                    d="M71.7896 17.232C70.8844 17.232 70.1213 16.9153 69.5178 16.2918C68.9193 15.6858 68.5851 14.8504 68.6001 13.9975C68.6001 13.0873 68.9093 12.3167 69.5178 11.7058C70.1188 11.0823 70.8819 10.7656 71.7871 10.7656C72.6824 10.7656 73.4455 11.0823 74.0589 11.7058C74.6674 12.3367 74.9766 13.1073 74.9766 13.9975C74.9666 14.9103 74.6574 15.6808 74.0589 16.2893C73.4579 16.9177 72.6948 17.232 71.7896 17.232ZM44.8546 17.232C43.9693 17.232 43.2013 16.9202 42.5728 16.3043C41.9494 15.6908 41.6327 14.9153 41.6327 14C41.6327 13.0848 41.9494 12.3093 42.5728 11.6958C43.1888 11.0798 43.9569 10.7681 44.8546 10.7681C45.2935 10.7681 45.7199 10.8554 46.1289 11.0325C46.5304 11.2045 46.8571 11.4389 47.099 11.7257L47.1588 11.798L46.483 12.4614L46.4132 12.3791C46.0317 11.9252 45.5204 11.7033 44.8446 11.7033C44.2412 11.7033 43.715 11.9177 43.2811 12.3417C42.8447 12.7681 42.6227 13.3267 42.6227 14.0025C42.6227 14.6783 42.8447 15.2369 43.2811 15.6634C43.715 16.0873 44.2412 16.3018 44.8446 16.3018C45.488 16.3018 46.0292 16.0873 46.4506 15.6634C46.7 15.414 46.8546 15.0649 46.9095 14.6235H44.7424V13.6908H47.8396L47.8521 13.7756C47.8745 13.9327 47.897 14.0948 47.897 14.2444C47.897 15.1048 47.6376 15.8005 47.1239 16.3143C46.5404 16.9227 45.7773 17.232 44.8546 17.232ZM80.6674 17.0998H79.7123L76.7871 12.419L76.812 13.2619V17.0973H75.8569V10.9003H76.9467L76.9766 10.9477L79.7272 15.3566L79.7023 14.5162V10.9003H80.6674V17.0998ZM64.6126 17.0998H63.645V11.833H61.9667V10.9003H66.2884V11.833H64.6101V17.0998H64.6126ZM61.1787 17.0998H60.2136V10.9003H61.1787V17.0998ZM55.7548 17.0998H54.7897V11.833H53.1114V10.9003H57.4331V11.833H55.7548V17.0998ZM52.5005 17.0898H48.7997V10.9003H52.5005V11.833H49.7673V13.5337H52.2336V14.4564H49.7673V16.1571H52.5005V17.0898ZM70.226 15.6509C70.6574 16.0823 71.1811 16.2993 71.7896 16.2993C72.4155 16.2993 72.9268 16.0873 73.3532 15.6509C73.7771 15.227 73.9916 14.6709 73.9916 14C73.9916 13.3292 73.7771 12.7706 73.3557 12.3492C72.9243 11.9177 72.3981 11.7008 71.7921 11.7008C71.1662 11.7008 70.655 11.9128 70.231 12.3492C69.8071 12.7731 69.5926 13.3292 69.5926 14C69.5926 14.6709 69.8046 15.2295 70.226 15.6509Z"
                    fill="#302A25"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M68.5105 25.7554C66.1539 25.7554 64.2436 27.5434 64.2436 30.0098C64.2436 32.4537 66.1663 34.2641 68.5105 34.2641C70.8671 34.2641 72.7773 32.4636 72.7773 30.0098C72.7773 27.5434 70.8671 25.7554 68.5105 25.7554ZM68.5105 32.5784C67.2212 32.5784 66.1115 31.511 66.1115 29.9998C66.1115 28.4661 67.2237 27.4213 68.5105 27.4213C69.7998 27.4213 70.9095 28.4661 70.9095 29.9998C70.912 31.521 69.7998 32.5784 68.5105 32.5784ZM59.2012 25.7554C56.8446 25.7554 54.9344 27.5434 54.9344 30.0098C54.9344 32.4537 56.8571 34.2641 59.2012 34.2641C61.5579 34.2641 63.4681 32.4636 63.4681 30.0098C63.4681 27.5434 61.5554 25.7554 59.2012 25.7554ZM59.2012 32.5784C57.912 32.5784 56.8022 31.511 56.8022 29.9998C56.8022 28.4661 57.9145 27.4213 59.2012 27.4213C60.4905 27.4213 61.6003 28.4661 61.6003 29.9998C61.6003 31.521 60.4905 32.5784 59.2012 32.5784ZM48.1239 27.0547V28.8552H52.4456C52.3135 29.8651 51.9793 30.6108 51.4681 31.122C50.8347 31.7554 49.8571 32.4437 48.1339 32.4437C45.478 32.4437 43.4007 30.2991 43.4007 27.6432C43.4007 24.9873 45.478 22.8427 48.1339 22.8427C49.5678 22.8427 50.6127 23.4088 51.3883 24.132L52.6651 22.8552C51.5878 21.8227 50.1539 21.0322 48.1439 21.0322C44.5005 21.0322 41.4431 23.9998 41.4431 27.6332C41.4431 31.2766 44.498 34.2342 48.1439 34.2342C50.1115 34.2342 51.5878 33.5908 52.7549 32.3789C53.9444 31.1893 54.3209 29.511 54.3209 28.1569C54.3209 27.7355 54.2885 27.3564 54.2212 27.0347H48.1214C48.1239 27.0322 48.1239 27.0547 48.1239 27.0547ZM93.4332 28.4562C93.0766 27.5011 91.9993 25.7454 89.7898 25.7454C87.6003 25.7454 85.7798 27.4686 85.7798 29.9998C85.7798 32.3888 87.5803 34.2542 90.0018 34.2542C91.9469 34.2542 93.0791 33.0646 93.5454 32.3664L92.1015 31.3988C91.6227 32.1095 90.9569 32.5759 90.0118 32.5759C89.0567 32.5759 88.3883 32.142 87.9444 31.2866L93.6327 28.93C93.6327 28.9325 93.4332 28.4562 93.4332 28.4562ZM87.6327 29.8776C87.5878 28.2342 88.9095 27.3988 89.8547 27.3988C90.6003 27.3988 91.2212 27.7654 91.4332 28.2991L87.6327 29.8776ZM83.0118 33.9998H84.8796V21.5011H83.0118V33.9998ZM79.9444 26.7006H79.8771C79.4556 26.1993 78.6551 25.7454 77.6327 25.7454C75.5105 25.7454 73.5554 27.6133 73.5554 30.0123C73.5554 32.4013 75.5005 34.2467 77.6327 34.2467C78.6427 34.2467 79.4556 33.7903 79.8771 33.2791H79.9444V33.8901C79.9444 35.5135 79.0766 36.3888 77.6776 36.3888C76.5329 36.3888 75.8222 35.5659 75.5329 34.8776L73.9095 35.5559C74.3758 36.6781 75.6202 38.0671 77.6751 38.0671C79.8646 38.0671 81.72 36.7779 81.72 33.6332V25.9998H79.9544V26.7006C79.9569 26.7006 79.9444 26.7006 79.9444 26.7006ZM77.7998 32.5784C76.5105 32.5784 75.4332 31.5011 75.4332 30.0123C75.4332 28.511 76.5105 27.4237 77.7998 27.4237C79.0766 27.4237 80.0666 28.5235 80.0666 30.0123C80.0791 31.5011 79.0791 32.5784 77.7998 32.5784ZM102.179 21.5011H97.7125V33.9998H99.5804V29.2666H102.181C104.249 29.2666 106.281 27.7679 106.281 25.3888C106.281 23.0098 104.256 21.5011 102.179 21.5011ZM102.234 27.521H99.5779V23.2317H102.234C103.633 23.2317 104.423 24.3863 104.423 25.3764C104.423 26.3564 103.623 27.521 102.234 27.521ZM113.767 25.733C112.411 25.733 111.012 26.334 110.433 27.6432L112.089 28.3315C112.446 27.6432 113.099 27.4088 113.79 27.4088C114.757 27.4088 115.735 27.9873 115.757 29.0198V29.1519C115.423 28.9624 114.69 28.6731 113.812 28.6731C112.024 28.6731 110.211 29.6507 110.211 31.4836C110.211 33.1619 111.678 34.2392 113.311 34.2392C114.565 34.2392 115.256 33.6731 115.688 33.0173H115.755V33.9848H117.555V29.1968C117.555 26.9674 115.9 25.733 113.767 25.733ZM113.533 32.5784C112.922 32.5784 112.067 32.2791 112.067 31.511C112.067 30.5434 113.134 30.1769 114.044 30.1769C114.867 30.1769 115.256 30.3539 115.745 30.5983C115.61 31.7205 114.663 32.5684 113.533 32.5784ZM124.124 25.9998L121.979 31.4213H121.912L119.69 25.9998H117.68L121.014 33.5784L119.114 37.7903H121.059L126.189 25.9998H124.124ZM107.311 33.9998H109.179V21.5011H107.311V33.9998Z"
                    fill="#302A25"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8122 11.5341C10.5229 11.8458 10.3558 12.3222 10.3558 12.9456V35.0578C10.3558 35.6812 10.5229 36.1575 10.8222 36.4568L10.8995 36.5241L23.2885 24.1351V23.8583L10.8895 11.4668L10.8122 11.5341Z"
                    fill="#302A25"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.4106 28.2772L23.2784 24.1451V23.8558L27.4106 19.7236L27.5004 19.7785L32.3882 22.5566C33.7872 23.3446 33.7872 24.6463 32.3882 25.4443L27.5004 28.2224L27.4106 28.2772Z"
                    fill="#CCB7B7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.5007 28.2219L23.2787 24L10.8124 36.4663C11.2687 36.9551 12.0343 37.01 12.8897 36.5337L27.5007 28.2219Z"
                    fill="#E3DBDB"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.5007 19.7784L12.8897 11.4792C12.0343 10.9904 11.2662 11.0577 10.8124 11.5465L23.2787 24.0004L27.5007 19.7784Z"
                    fill="#E3DBDB"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-b from-custom-hsla1 via-custom-hsla2 to-custom-f2eee6 absolute bottom-0 z-[1] h-[350px] w-full opacity-90 "></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

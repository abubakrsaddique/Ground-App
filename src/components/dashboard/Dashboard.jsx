import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddImage from "../../images/addimage.webp";
import MyAccount from "./MyAccount";
import ProfileImage from "./ProfileImage";
import EditProfile from "./EditProfile";

const Testing = () => {
  const [isProfileImageOpen, setIsProfileImageOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useContext(AuthContext);

  const handleGroundClick = () => {
    if (isLoggedIn) {
      navigate("/", { state: { isLoggedIn } });
    } else {
      navigate("/");
    }
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  const toggleProfileImage = () => {
    setIsProfileImageOpen(!isProfileImageOpen);
  };

  const toggleEditProfile = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="min-h-screen bg-gray w-full mob:no-scrollbar">
      {/* Navbar */}
      <div className="flex items-center justify-between  px-40 py-11 mob:px-4 mob:py-8 tab:px-4 tab:py-8  ">
        <p
          className="text-darkbrown font-bold leading-10 text-[38px] cursor-pointer"
          onClick={handleGroundClick}
        >
          Grounds
        </p>
        <p
          className="cursor-pointer text-base font-semibold leading-5 text-black"
          onClick={handleLogoutClick}
        >
          Log out
        </p>
      </div>
      {/* Main Conatainer */}
      <div className="mx-auto max-w-[60rem] px-5 ">
        {/* Profile Picture */}
        <div className="mb-20 mt-5">
          <div className="flex items-center justify-between flex-row mob:flex-col tab:flex-col">
            <div className="flex  items-center gap-6 flex-row mob:flex-col tab:flex-col">
              <div className="relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full ">
                <img
                  alt="ProfileImage"
                  loading="lazy"
                  width="96"
                  height="96"
                  decoding="async"
                  className="h-24 w-24 rounded-full object-cover"
                  src={AddImage}
                  onClick={toggleProfileImage}
                />
              </div>
              <svg
                className="ml-[-49px] mt-[68px] cursor-pointer mob:ml-[69px] mob:mt-[-48px] tab:ml-[70px] tab:mt-[-48px]"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                onClick={toggleProfileImage}
              >
                <path
                  d="M12.0469 2C6.53687 2 2.04688 6.49 2.04688 12C2.04688 17.51 6.53687 22 12.0469 22C17.5569 22 22.0469 17.51 22.0469 12C22.0469 6.49 17.5569 2 12.0469 2ZM16.0469 12.75H12.7969V16C12.7969 16.41 12.4569 16.75 12.0469 16.75C11.6369 16.75 11.2969 16.41 11.2969 16V12.75H8.04688C7.63688 12.75 7.29688 12.41 7.29688 12C7.29688 11.59 7.63688 11.25 8.04688 11.25H11.2969V8C11.2969 7.59 11.6369 7.25 12.0469 7.25C12.4569 7.25 12.7969 7.59 12.7969 8V11.25H16.0469C16.4569 11.25 16.7969 11.59 16.7969 12C16.7969 12.41 16.4569 12.75 16.0469 12.75Z"
                  fill="#FF7565"
                />
              </svg>
              {isProfileImageOpen && (
                <ProfileImage onClose={toggleProfileImage} />
              )}
              <p className="text-xl font-semibold leading-7 text-brown">
                Welcome
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className=" text-center text-base font-normal leading-5 mt-0 w-[400px] text-lightbrown">
                Download the app below and login in with the same credentials
                you just used to create your account
              </p>
              <div className="mt-5 flex items-center justify-center gap-5 cursor-pointe">
                <svg
                  width="158"
                  height="48"
                  viewBox="0 0 158 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5994_47454"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="158"
                    height="48"
                  >
                    <rect
                      x="0.5"
                      width="157"
                      height="48"
                      rx="16"
                      fill="#FD605B"
                    />
                  </mask>
                  <g mask="url(#mask0_5994_47454)">
                    <rect
                      x="0.5"
                      width="157"
                      height="48"
                      rx="16"
                      fill="#161616"
                    />
                    <path
                      d="M60.3288 15.51L59.8638 14.0536C59.7498 13.6939 59.6532 13.2925 59.5655 12.9504H59.548C59.4624 13.2925 59.3725 13.7027 59.2694 14.0536L58.8132 15.51H60.3288ZM58.6377 16.3237L58.1289 17.9995H57.0146L58.9097 12.0906H60.2849L62.2041 17.9995H61.0482L60.513 16.3237"
                      fill="white"
                    />
                    <path
                      d="M63.8163 13.7312L64.5094 15.8938C64.6322 16.2711 64.7177 16.6133 64.7967 16.9642H64.823C64.902 16.6133 64.9985 16.2799 65.1125 15.8938L65.7969 13.7312H66.9264L65.2968 17.9995H64.2374L62.6494 13.7312"
                      fill="white"
                    />
                    <path
                      d="M70.1788 15.9115C69.4155 15.9027 68.6873 16.0606 68.6873 16.7098C68.6873 17.131 68.9593 17.324 69.3014 17.324C69.7379 17.324 70.0472 17.0432 70.1503 16.7362C70.1788 16.6572 70.1788 16.5782 70.1788 16.4993V15.9115ZM71.2294 16.973C71.2294 17.3591 71.2469 17.7363 71.2996 17.9973H70.3257L70.249 17.5258H70.2205C69.9682 17.857 69.5208 18.0938 68.9593 18.0938C68.0995 18.0938 67.6191 17.4731 67.6191 16.8239C67.6191 15.7535 68.5732 15.203 70.1503 15.2118V15.1416C70.1503 14.8608 70.0384 14.3959 69.2839 14.3959C68.8628 14.3959 68.4241 14.5275 68.1346 14.7117L67.924 14.0098C68.2399 13.8168 68.7926 13.6348 69.4681 13.6348C70.8346 13.6348 71.2294 14.5011 71.2294 15.4399"
                      fill="white"
                    />
                    <path
                      d="M72.7538 13.7312H73.8307V17.9994H72.7538V13.7312ZM73.2868 13.1171C72.9293 13.1171 72.6924 12.8539 72.6924 12.538C72.6924 12.2046 72.9358 11.9502 73.2977 11.9502C73.664 11.9502 73.8921 12.2046 73.9009 12.538C73.9009 12.8539 73.664 13.1171 73.2977 13.1171"
                      fill="white"
                    />
                    <path
                      d="M75.3818 17.9996H76.461V11.7661H75.3818V17.9996Z"
                      fill="white"
                    />
                    <path
                      d="M80.2813 15.9115C79.518 15.9027 78.7898 16.0606 78.7898 16.7098C78.7898 17.131 79.0618 17.324 79.404 17.324C79.8426 17.324 80.1497 17.0432 80.255 16.7362C80.2813 16.6572 80.2813 16.5782 80.2813 16.4993V15.9115ZM81.3319 16.973C81.3319 17.3591 81.3495 17.7363 81.4021 17.9973H80.4305L80.3515 17.5258H80.3252C80.0708 17.857 79.6233 18.0938 79.0618 18.0938C78.2042 18.0938 77.7217 17.4731 77.7217 16.8239C77.7217 15.7535 78.678 15.203 80.255 15.2118V15.1416C80.255 14.8608 80.1409 14.3959 79.3864 14.3959C78.9653 14.3959 78.5266 14.5275 78.2393 14.7117L78.0287 14.0098C78.3446 13.8168 78.8951 13.6348 79.5707 13.6348C80.9371 13.6348 81.3319 14.5011 81.3319 15.4399"
                      fill="white"
                    />
                    <path
                      d="M83.9355 16.2362C83.9355 16.3239 83.9443 16.4116 83.9618 16.4906C84.0759 16.9293 84.4531 17.2451 84.9159 17.2451C85.5915 17.2451 86.0038 16.7099 86.0038 15.8435C86.0038 15.089 85.6441 14.4749 84.9247 14.4749C84.486 14.4749 84.0847 14.7907 83.9706 15.2645C83.9531 15.3435 83.9355 15.44 83.9355 15.5453V16.2362ZM82.8564 11.7661H83.9355V14.317H83.9531C84.2163 13.9046 84.6791 13.6348 85.3195 13.6348C86.3635 13.6348 87.1071 14.5012 87.0983 15.7997C87.0983 17.3328 86.1267 18.0961 85.1616 18.0961C84.6089 18.0961 84.1198 17.8856 83.8127 17.3592H83.7951L83.7425 17.9996H82.8213C82.8388 17.7101 82.8564 17.2363 82.8564 16.8064"
                      fill="white"
                    />
                    <path
                      d="M88.3682 17.9996H89.4451V11.7661H88.3682V17.9996Z"
                      fill="white"
                    />
                    <path
                      d="M93.643 15.4136C93.6518 15.0188 93.4763 14.3695 92.7591 14.3695C92.0923 14.3695 91.8115 14.9749 91.7677 15.4136H93.643ZM91.7677 16.1659C91.794 16.9379 92.3994 17.2713 93.0837 17.2713C93.5816 17.2713 93.9325 17.1924 94.2659 17.0783L94.4238 17.8131C94.0553 17.9732 93.5465 18.0851 92.9345 18.0851C91.5483 18.0851 90.7324 17.2362 90.7324 15.9312C90.7324 14.7468 91.4518 13.6348 92.8205 13.6348C94.2045 13.6348 94.6607 14.7731 94.6607 15.7119C94.6607 15.9137 94.6432 16.0716 94.6256 16.1659"
                      fill="white"
                    />
                    <path
                      d="M100.015 17.3152C100.627 17.3152 101.057 16.7186 101.057 15.8522C101.057 15.1855 100.759 14.4134 100.024 14.4134C99.2609 14.4134 98.9538 15.1591 98.9538 15.8698C98.9538 16.6923 99.3662 17.3152 100.004 17.3152H100.015ZM99.9803 18.096C98.7784 18.096 97.8418 17.2713 97.8418 15.8961C97.8418 14.4924 98.7608 13.6348 100.05 13.6348C101.32 13.6348 102.171 14.5275 102.171 15.8259C102.171 17.3942 101.066 18.096 99.9891 18.096"
                      fill="white"
                    />
                    <path
                      d="M103.439 15.0012C103.439 14.5099 103.424 14.0976 103.406 13.7291H104.343L104.395 14.3695H104.422C104.615 14.0361 105.08 13.6348 105.79 13.6348C106.534 13.6348 107.306 14.1151 107.306 15.4662V17.9973H106.227V15.589C106.227 14.9749 105.999 14.5099 105.413 14.5099C104.983 14.5099 104.685 14.817 104.571 15.1416C104.536 15.2293 104.518 15.3609 104.518 15.4838V17.9973H103.439"
                      fill="white"
                    />
                    <path
                      d="M112.273 12.6345V13.729H113.298V14.5362H112.273V16.4115C112.273 16.9379 112.414 17.2011 112.824 17.2011C113.017 17.2011 113.122 17.1923 113.245 17.1572L113.263 17.9709C113.105 18.0345 112.815 18.085 112.482 18.085C112.08 18.085 111.756 17.9534 111.554 17.7362C111.317 17.4906 111.212 17.0958 111.212 16.5343V14.5362H110.606V13.729H111.212V12.9328"
                      fill="white"
                    />
                    <path
                      d="M114.498 11.7661H115.577V14.3082H115.595C115.726 14.1064 115.911 13.9397 116.13 13.8257C116.349 13.705 116.601 13.6348 116.873 13.6348C117.602 13.6348 118.363 14.1152 118.363 15.4838V17.9996H117.286V15.5979C117.286 14.9838 117.058 14.51 116.461 14.51C116.042 14.51 115.744 14.7907 115.621 15.1154C115.586 15.2119 115.577 15.3259 115.577 15.44V17.9996H114.498"
                      fill="white"
                    />
                    <path
                      d="M122.534 15.4136C122.542 15.0188 122.367 14.3695 121.648 14.3695C120.981 14.3695 120.702 14.9749 120.658 15.4136H122.534ZM120.658 16.1659C120.685 16.9379 121.288 17.2713 121.972 17.2713C122.472 17.2713 122.823 17.1924 123.154 17.0783L123.314 17.8131C122.946 17.9732 122.437 18.0851 121.823 18.0851C120.439 18.0851 119.623 17.2362 119.623 15.9312C119.623 14.7468 120.342 13.6348 121.709 13.6348C123.093 13.6348 123.549 14.7731 123.549 15.7119C123.549 15.9137 123.532 16.0716 123.514 16.1659"
                      fill="white"
                    />
                    <path
                      d="M45.2273 23.7286C45.1988 20.8048 47.6203 19.3813 47.7321 19.3155C46.3613 17.3152 44.2359 17.0432 43.488 17.0213C41.7048 16.8349 39.9743 18.0917 39.0662 18.0917C38.1384 18.0917 36.7369 17.041 35.2301 17.0718C33.2867 17.1025 31.4707 18.2276 30.4749 19.9714C28.4219 23.5312 29.9529 28.7601 31.9225 31.6378C32.9095 33.0459 34.0588 34.6207 35.5656 34.5637C37.0396 34.5023 37.5901 33.625 39.3689 33.625C41.1324 33.625 41.65 34.5637 43.1875 34.5286C44.7689 34.5023 45.7647 33.1139 46.7144 31.6904C47.855 30.0761 48.3112 28.4859 48.3287 28.4048C48.2914 28.3916 45.258 27.2335 45.2273 23.7286Z"
                      fill="white"
                    />
                    <path
                      d="M42.3231 15.1306C43.1149 14.1392 43.661 12.7881 43.5075 11.4194C42.3603 11.4721 40.9259 12.2134 40.099 13.1829C39.3686 14.0383 38.7128 15.4398 38.8839 16.7558C40.1736 16.8524 41.4962 16.1066 42.3231 15.1306Z"
                      fill="white"
                    />
                    <path
                      d="M63.0157 29.3105L61.998 26.1674C61.8905 25.8472 61.6887 25.0905 61.3905 23.9017H61.3554C61.2369 24.4127 61.0439 25.1694 60.7829 26.1674L59.7827 29.3105H63.0157ZM66.5339 34.331H64.4787L63.3535 30.7954H59.445L58.3724 34.331H56.3721L60.2499 22.2939H62.6407"
                      fill="white"
                    />
                    <path
                      d="M74.5352 29.9554C74.5352 29.1087 74.3444 28.4134 73.9627 27.8651C73.546 27.2948 72.9867 27.0075 72.2848 27.0075C71.8089 27.0075 71.3746 27.1676 70.9908 27.4813C70.6047 27.7993 70.3503 28.2117 70.2297 28.7249C70.1704 28.9618 70.1419 29.157 70.1419 29.3105V30.7581C70.1419 31.3898 70.3349 31.9228 70.721 32.3571C71.1092 32.7936 71.6115 33.0085 72.23 33.0085C72.9582 33.0085 73.5241 32.73 73.9255 32.1685C74.3334 31.6092 74.5352 30.8722 74.5352 29.9554ZM76.5005 29.883C76.5005 31.3591 76.1013 32.5282 75.3029 33.3836C74.5879 34.1469 73.6995 34.5263 72.6424 34.5263C71.4974 34.5263 70.6771 34.114 70.177 33.2936H70.1419V37.8668H68.2118V28.5078C68.2118 27.58 68.1899 26.6281 68.1416 25.6498H69.8371L69.9445 27.0273H69.9818C70.6245 25.9898 71.6005 25.4722 72.9099 25.4722C73.932 25.4722 74.7896 25.8779 75.4718 26.6873C76.1561 27.4988 76.5005 28.5626 76.5005 29.883Z"
                      fill="white"
                    />
                    <path
                      d="M84.5164 29.9554C84.5164 29.1087 84.3256 28.4134 83.944 27.8651C83.5272 27.2948 82.9679 27.0075 82.266 27.0075C81.7901 27.0075 81.358 27.1676 80.972 27.4813C80.5837 27.7993 80.3337 28.2117 80.2153 28.7249C80.1538 28.9618 80.1253 29.157 80.1253 29.3105V30.7581C80.1253 31.3898 80.3162 31.9228 80.7022 32.3571C81.0904 32.7936 81.5927 33.0085 82.2134 33.0085C82.9394 33.0085 83.5053 32.73 83.9089 32.1685C84.3124 31.6092 84.5164 30.8722 84.5164 29.9554ZM86.4795 29.883C86.4795 31.3591 86.0825 32.5282 85.2841 33.3836C84.5691 34.1469 83.6829 34.5263 82.6236 34.5263C81.4808 34.5263 80.6605 34.114 80.1582 33.2936H80.1253V37.8668H78.1952V28.5078C78.1952 27.58 78.1711 26.6281 78.125 25.6498H79.8205L79.9279 27.0273H79.9652C80.6057 25.9898 81.5817 25.4722 82.8911 25.4722C83.9154 25.4722 84.7687 25.8779 85.4552 26.6873C86.1395 27.4988 86.4795 28.5626 86.4795 29.883Z"
                      fill="white"
                    />
                    <path
                      d="M97.6444 30.9556C97.6444 31.9777 97.289 32.8112 96.574 33.4561C95.7888 34.1579 94.6987 34.5089 93.2972 34.5089C92.0009 34.5089 90.9612 34.2588 90.1738 33.7587L90.6213 32.1532C91.4701 32.6643 92.3979 32.9187 93.4112 32.9187C94.1372 32.9187 94.7031 32.7564 95.1089 32.4296C95.5124 32.1006 95.7142 31.6619 95.7142 31.1136C95.7142 30.6266 95.5497 30.2121 95.2163 29.8787C94.8829 29.5453 94.328 29.2361 93.5538 28.9487C91.446 28.1613 90.3932 27.0098 90.3932 25.4964C90.3932 24.5072 90.7616 23.6957 91.5008 23.064C92.2378 22.4323 93.2204 22.1143 94.4465 22.1143C95.5431 22.1143 96.4534 22.3073 97.1794 22.6867L96.6968 24.2594C96.0191 23.8909 95.2514 23.7044 94.3938 23.7044C93.7139 23.7044 93.1853 23.8711 92.8058 24.2045C92.4856 24.5028 92.3233 24.8669 92.3233 25.2946C92.3233 25.7706 92.5054 26.1632 92.876 26.4724C93.1963 26.7576 93.7797 27.0668 94.6263 27.4024C95.6616 27.8192 96.4227 28.3061 96.9118 28.8654C97.3987 29.4247 97.6444 30.1222 97.6444 30.9556Z"
                      fill="white"
                    />
                    <path
                      d="M104.017 27.0973H101.892V31.3107C101.892 32.3833 102.267 32.9185 103.019 32.9185C103.362 32.9185 103.649 32.8899 103.875 32.8307L103.927 34.2937C103.55 34.4385 103.048 34.5086 102.429 34.5086C101.668 34.5086 101.072 34.2761 100.642 33.8133C100.214 33.3484 99.9992 32.5675 99.9992 31.473V27.0973H98.7314V25.6497H99.9992V24.0617L101.892 23.4893V25.6497H104.017"
                      fill="white"
                    />
                    <path
                      d="M111.609 29.9817C111.609 29.1811 111.436 28.4968 111.089 27.9221C110.688 27.229 110.109 26.8825 109.359 26.8825C108.585 26.8825 107.995 27.229 107.591 27.9221C107.244 28.4968 107.076 29.1943 107.076 30.019C107.076 30.8196 107.244 31.5039 107.591 32.0763C108.008 32.7694 108.591 33.116 109.344 33.116C110.078 33.116 110.657 32.7651 111.074 32.0588C111.432 31.4754 111.609 30.7823 111.609 29.9817ZM113.61 29.9203C113.61 31.2538 113.23 32.3483 112.467 33.2059C111.668 34.0876 110.609 34.5263 109.289 34.5263C108.012 34.5263 106.999 34.103 106.242 33.2586C105.488 32.4141 105.11 31.3481 105.11 30.0628C105.11 28.7161 105.499 27.6151 106.279 26.7597C107.058 25.8999 108.109 25.4722 109.429 25.4722C110.703 25.4722 111.73 25.8955 112.502 26.7399C113.241 27.5646 113.61 28.6218 113.61 29.9203Z"
                      fill="white"
                    />
                    <path
                      d="M119.878 27.3475C119.687 27.3124 119.485 27.2948 119.27 27.2948C118.592 27.2948 118.066 27.5515 117.698 28.0625C117.377 28.5165 117.217 29.0868 117.217 29.7755V34.3311H115.289L115.305 28.3849C115.305 27.3826 115.28 26.4723 115.234 25.6498H116.914L116.985 27.3124H117.035C117.239 26.7421 117.562 26.2815 118 25.9372C118.43 25.6279 118.895 25.4722 119.395 25.4722C119.573 25.4722 119.735 25.4853 119.878 25.5073"
                      fill="white"
                    />
                    <path
                      d="M126.662 29.0804C126.675 28.5102 126.55 28.0145 126.289 27.5977C125.956 27.0626 125.44 26.7928 124.751 26.7928C124.122 26.7928 123.609 27.056 123.216 27.5802C122.896 27.9969 122.703 28.497 122.648 29.0804H126.662ZM128.5 29.5805C128.5 29.9271 128.478 30.2166 128.432 30.4557H122.648C122.668 31.3133 122.949 31.9691 123.486 32.4209C123.973 32.8267 124.605 33.0263 125.379 33.0263C126.234 33.0263 127.015 32.8903 127.719 32.6161L128.022 33.9563C127.199 34.3116 126.23 34.4936 125.109 34.4936C123.764 34.4936 122.707 34.0966 121.94 33.3026C121.174 32.513 120.788 31.4493 120.788 30.1157C120.788 28.8063 121.143 27.7162 121.861 26.8476C122.609 25.9176 123.622 25.4548 124.894 25.4548C126.144 25.4548 127.094 25.9176 127.737 26.8476C128.248 27.5846 128.5 28.497 128.5 29.5805Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <svg
                  width="158"
                  height="48"
                  viewBox="0 0 158 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5994_47483"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="158"
                    height="48"
                  >
                    <rect
                      x="0.5"
                      width="157"
                      height="48"
                      rx="16"
                      fill="#1E2534"
                    />
                  </mask>
                  <g mask="url(#mask0_5994_47483)">
                    <rect
                      x="0.5"
                      width="157"
                      height="48"
                      rx="16"
                      fill="#161616"
                    />
                    <path
                      d="M82.0059 18.2759C81.2322 18.2759 80.58 18.0052 80.0643 17.4724C79.5527 16.9545 79.2671 16.2404 79.2799 15.5115C79.2799 14.7336 79.5442 14.075 80.0643 13.5528C80.5779 13.02 81.2301 12.7493 82.0038 12.7493C82.7689 12.7493 83.4211 13.02 83.9455 13.5528C84.4655 14.092 84.7298 14.7506 84.7298 15.5115C84.7213 16.2916 84.457 16.9502 83.9455 17.4702C83.4318 18.0074 82.7796 18.2759 82.0059 18.2759ZM58.9852 18.2759C58.2285 18.2759 57.5721 18.0095 57.035 17.483C56.5021 16.9587 56.2314 16.2959 56.2314 15.5137C56.2314 14.7314 56.5021 14.0686 57.035 13.5443C57.5614 13.0178 58.2179 12.7514 58.9852 12.7514C59.3603 12.7514 59.7247 12.826 60.0743 12.9773C60.4174 13.1244 60.6966 13.3247 60.9034 13.5698L60.9545 13.6317L60.3769 14.1986L60.3173 14.1283C59.9912 13.7404 59.5542 13.5507 58.9766 13.5507C58.4608 13.5507 58.0111 13.734 57.6403 14.0963C57.2673 14.4608 57.0776 14.9382 57.0776 15.5158C57.0776 16.0934 57.2673 16.5708 57.6403 16.9353C58.0111 17.2976 58.4608 17.4809 58.9766 17.4809C59.5265 17.4809 59.989 17.2976 60.3492 16.9353C60.5624 16.7221 60.6945 16.4237 60.7414 16.0465H58.8892V15.2494H61.5364L61.547 15.3218C61.5662 15.4561 61.5854 15.5946 61.5854 15.7225C61.5854 16.4578 61.3637 17.0525 60.9247 17.4916C60.426 18.0116 59.7738 18.2759 58.9852 18.2759ZM89.5935 18.1629H88.7772L86.2772 14.1624L86.2985 14.8828V18.1608H85.4822V12.8644H86.4136L86.4391 12.9049L88.79 16.6731L88.7687 15.9548V12.8644H89.5935V18.1629ZM75.8719 18.1629H75.0449V13.6615H73.6105V12.8644H77.3041V13.6615H75.8697V18.1629H75.8719ZM72.937 18.1629H72.1122V12.8644H72.937V18.1629ZM68.3013 18.1629H67.4765V13.6615H66.0421V12.8644H69.7357V13.6615H68.3013V18.1629ZM65.5199 18.1544H62.357V12.8644H65.5199V13.6615H63.1839V15.1151H65.2918V15.9037H63.1839V17.3573H65.5199V18.1544ZM80.6696 16.9246C81.0383 17.2933 81.4859 17.4788 82.0059 17.4788C82.5409 17.4788 82.9778 17.2976 83.3423 16.9246C83.7046 16.5623 83.8879 16.087 83.8879 15.5137C83.8879 14.9403 83.7046 14.4629 83.3444 14.1027C82.9757 13.734 82.526 13.5485 82.008 13.5485C81.4731 13.5485 81.0362 13.7297 80.6738 14.1027C80.3115 14.465 80.1282 14.9403 80.1282 15.5137C80.1282 16.087 80.3094 16.5644 80.6696 16.9246Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M79.2032 25.561C77.1891 25.561 75.5565 27.0892 75.5565 29.1971C75.5565 31.2858 77.1998 32.8332 79.2032 32.8332C81.2174 32.8332 82.85 31.2944 82.85 29.1971C82.85 27.0892 81.2174 25.561 79.2032 25.561ZM79.2032 31.3924C78.1013 31.3924 77.1529 30.4802 77.1529 29.1886C77.1529 27.8778 78.1035 26.9847 79.2032 26.9847C80.3052 26.9847 81.2536 27.8778 81.2536 29.1886C81.2558 30.4887 80.3052 31.3924 79.2032 31.3924ZM71.2468 25.561C69.2327 25.561 67.6001 27.0892 67.6001 29.1971C67.6001 31.2858 69.2433 32.8332 71.2468 32.8332C73.261 32.8332 74.8936 31.2944 74.8936 29.1971C74.8936 27.0892 73.2588 25.561 71.2468 25.561ZM71.2468 31.3924C70.1449 31.3924 69.1965 30.4802 69.1965 29.1886C69.1965 27.8778 70.147 26.9847 71.2468 26.9847C72.3488 26.9847 73.2972 27.8778 73.2972 29.1886C73.2972 30.4887 72.3488 31.3924 71.2468 31.3924ZM61.7793 26.6714V28.2103H65.4729C65.36 29.0735 65.0744 29.7108 64.6374 30.1477C64.0961 30.6891 63.2606 31.2773 61.7878 31.2773C59.5179 31.2773 57.7425 29.4443 57.7425 27.1744C57.7425 24.9045 59.5179 23.0715 61.7878 23.0715C63.0133 23.0715 63.9064 23.5554 64.5692 24.1735L65.6605 23.0822C64.7398 22.1998 63.5142 21.5242 61.7963 21.5242C58.6824 21.5242 56.0693 24.0605 56.0693 27.1659C56.0693 30.2798 58.6803 32.8076 61.7963 32.8076C63.478 32.8076 64.7398 32.2577 65.7372 31.2219C66.7539 30.2052 67.0757 28.7708 67.0757 27.6135C67.0757 27.2533 67.048 26.9293 66.9905 26.6544H61.7771C61.7793 26.6522 61.7793 26.6714 61.7793 26.6714ZM100.504 27.8693C100.199 27.0529 99.2786 25.5525 97.3902 25.5525C95.5189 25.5525 93.963 27.0252 93.963 29.1886C93.963 31.2304 95.5018 32.8247 97.5714 32.8247C99.2339 32.8247 100.202 31.808 100.6 31.2112L99.366 30.3843C98.9568 30.9917 98.3877 31.3903 97.5799 31.3903C96.7636 31.3903 96.1924 31.0194 95.813 30.2884L100.675 28.2742C100.675 28.2763 100.504 27.8693 100.504 27.8693ZM95.5466 29.0841C95.5082 27.6796 96.6379 26.9656 97.4456 26.9656C98.0829 26.9656 98.6136 27.2789 98.7948 27.735L95.5466 29.0841ZM91.5972 32.6073H93.1936V21.9249H91.5972V32.6073ZM88.9756 26.3688H88.918C88.5578 25.9404 87.8737 25.5525 86.9998 25.5525C85.186 25.5525 83.515 27.1488 83.515 29.1992C83.515 31.2411 85.1775 32.8183 86.9998 32.8183C87.863 32.8183 88.5578 32.4282 88.918 31.9913H88.9756V32.5135C88.9756 33.901 88.2339 34.6491 87.0382 34.6491C86.0599 34.6491 85.4524 33.9458 85.2052 33.3575L83.8177 33.9373C84.2162 34.8964 85.2798 36.0835 87.036 36.0835C88.9074 36.0835 90.4931 34.9816 90.4931 32.294V25.7699H88.9841V26.3688C88.9862 26.3688 88.9756 26.3688 88.9756 26.3688ZM87.1426 31.3924C86.0407 31.3924 85.1199 30.4717 85.1199 29.1992C85.1199 27.9161 86.0407 26.9869 87.1426 26.9869C88.2339 26.9869 89.08 27.9268 89.08 29.1992C89.0907 30.4717 88.236 31.3924 87.1426 31.3924ZM107.979 21.9249H104.162V32.6073H105.758V28.5619H107.981C109.748 28.5619 111.485 27.281 111.485 25.2477C111.485 23.2143 109.754 21.9249 107.979 21.9249ZM108.026 27.07H105.756V23.404H108.026C109.221 23.404 109.897 24.3909 109.897 25.237C109.897 26.0746 109.213 27.07 108.026 27.07ZM117.883 25.5418C116.724 25.5418 115.528 26.0555 115.034 27.1744L116.449 27.7627C116.754 27.1744 117.312 26.9741 117.903 26.9741C118.73 26.9741 119.565 27.4686 119.584 28.3509V28.4639C119.299 28.3019 118.672 28.0547 117.922 28.0547C116.394 28.0547 114.844 28.8902 114.844 30.4567C114.844 31.8911 116.097 32.8119 117.493 32.8119C118.565 32.8119 119.156 32.3281 119.525 31.7675H119.582V32.5945H121.121V28.5023C121.121 26.5968 119.706 25.5418 117.883 25.5418ZM117.683 31.3924C117.161 31.3924 116.43 31.1366 116.43 30.4802C116.43 29.6532 117.342 29.3399 118.12 29.3399C118.823 29.3399 119.156 29.4912 119.574 29.7001C119.458 30.6592 118.649 31.3839 117.683 31.3924ZM126.735 25.7699L124.902 30.4034H124.844L122.945 25.7699H121.227L124.077 32.2471L122.453 35.847H124.115L128.5 25.7699H126.735ZM112.365 32.6073H113.962V21.9249H112.365V32.6073Z"
                      fill="white"
                    />
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M29.89 13.4057C29.6428 13.6721 29.5 14.0792 29.5 14.612V33.5109C29.5 34.0437 29.6428 34.4508 29.8986 34.7066L29.9646 34.7641L40.5533 24.1755V23.9389L29.9561 13.3481L29.89 13.4057Z"
                      fill="white"
                    />
                    <path
                      opacity="0.2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M44.0766 27.7156L40.5449 24.1839V23.9367L44.0766 20.405L44.1533 20.4519L48.3309 22.8263C49.5266 23.4998 49.5266 24.6124 48.3309 25.2944L44.1533 27.6687L44.0766 27.7156Z"
                      fill="white"
                    />
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M44.1537 27.669L40.5453 24.0605L29.8906 34.7153C30.2807 35.133 30.935 35.1799 31.6661 34.7728L44.1537 27.669Z"
                      fill="white"
                    />
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M44.1537 20.452L31.6661 13.3588C30.935 12.941 30.2785 12.9986 29.8906 13.4163L40.5453 24.0604L44.1537 20.452Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Account Detail  */}
        <div className="flex flex-row gap-8 w-full mob:flex-col tab:flex-col ">
          {/* Left Side */}
          <div className="w-[50%] flex flex-shrink-0 flex-col mob:w-full tab:w-full">
            {/* Email $ Password */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="pl-1 text-2xl font-semibold leading-6">
                  My Account
                </h2>
                <svg
                  onClick={handleToggle}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <circle cx="12" cy="12" r="12" fill="#8FB69F" />
                  <path
                    d="M10.88 8.86293L14.415 12.3984L10.8285 15.9854C10.6625 16.1514 10.4434 16.2537 10.2095 16.2744L10.1215 16.2779H7.505C7.38059 16.2779 7.26055 16.232 7.16791 16.149C7.07527 16.0659 7.01655 15.9516 7.003 15.8279L7 15.7729V13.1564C7.00006 12.9217 7.08272 12.6944 7.2335 12.5144L7.2935 12.4494L10.88 8.86293ZM12.45 7.29293C12.627 7.11596 12.8638 7.01177 13.1139 7.00094C13.3639 6.99011 13.6089 7.07342 13.8005 7.23443L13.864 7.29293L15.9855 9.41443C16.1623 9.59136 16.2664 9.82814 16.2773 10.0781C16.2881 10.328 16.2049 10.5729 16.044 10.7644L15.9855 10.8284L15.1225 11.6914L11.5875 8.15593L12.45 7.29293Z"
                    fill="white"
                  />
                </svg>
                {isOpen && <MyAccount onClose={handleClose} />}
              </div>

              <div className="mt-4 bg-primary rounded-3xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base font-semibold">Email</p>
                  <p className="text-base font-semibold text-lightbrown">
                    abubakar@gmail.com
                  </p>
                </div>
                <div className="border-t border-gray my-4"></div>
                <div className="flex items-center justify-between ">
                  <p className="text-base font-semibold">Password</p>
                  <p className="text-base font-semibold text-lightbrown">
                    •••••••••••••••
                  </p>
                </div>
              </div>
            </div>
            {/* Profile Detail */}
            <div className="mt-8"></div>
            <div className="pb-12">
              <div className="flex items-center justify-between">
                <h2 className="pl-1.5 text-2xl font-semibold leading-6">
                  My Profile
                </h2>
                <svg
                  onClick={toggleEditProfile}
                  className="cursor-pointer
                  "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#8FB69F" />
                  <path
                    d="M10.88 8.86293L14.415 12.3984L10.8285 15.9854C10.6625 16.1514 10.4434 16.2537 10.2095 16.2744L10.1215 16.2779H7.505C7.38059 16.2779 7.26055 16.232 7.16791 16.149C7.07527 16.0659 7.01655 15.9516 7.003 15.8279L7 15.7729V13.1564C7.00006 12.9217 7.08272 12.6944 7.2335 12.5144L7.2935 12.4494L10.88 8.86293ZM12.45 7.29293C12.627 7.11596 12.8638 7.01177 13.1139 7.00094C13.3639 6.99011 13.6089 7.07342 13.8005 7.23443L13.864 7.29293L15.9855 9.41443C16.1623 9.59136 16.2664 9.82814 16.2773 10.0781C16.2881 10.328 16.2049 10.5729 16.044 10.7644L15.9855 10.8284L15.1225 11.6914L11.5875 8.15593L12.45 7.29293Z"
                    fill="white"
                  />
                </svg>
                {isEditProfileOpen && (
                  <EditProfile onClose={toggleEditProfile} />
                )}
              </div>
              <div className="mt-4 w-full rounded-3xl bg-primary p-6">
                <div className="flex flex-wrap items-center justify-between">
                  <p className="font-semibold leading-4 text-black text-base">
                    Age
                  </p>
                  <p className="font-semibold leading-4 text-lightbrown text-base">
                    22
                  </p>
                </div>
                <div className="my-5 w-full border-t border-gray opacity-50"></div>
                <div className="flex flex-wrap items-center justify-between">
                  <p className=" font-semibold leading-4 text-black text-base">
                    Height
                  </p>
                  <p className="font-semibold leading-4 text-lightbrown text-base">
                    5ft 9in
                  </p>
                </div>
                <div className="my-5 w-full border-t border-gray opacity-50"></div>
                <div className="flex flex-wrap items-center justify-between">
                  <p className="font-semibold leading-4 text-black text-base">
                    Weight
                  </p>
                  <p className="font-semibold leading-4 text-lightbrown text-base">
                    74kg
                  </p>
                </div>
                <div className="my-5 w-full border-t border-gray opacity-50"></div>
                <div className="flex flex-wrap items-center justify-between">
                  <p className="break-all font-semibold leading-4 text-black text-base">
                    Goals
                  </p>
                  <p className="font-semibold leading-4 text-lightbrown text-base">
                    Lose Weight
                  </p>
                </div>
                <div className="my-5 w-full border-t border-gray opacity-50"></div>
                <div className="flex flex-wrap items-center justify-between">
                  <p className="font-semibold leading-4 text-black text-base">
                    Daily Meal Amount
                  </p>
                  <p className="font-semibold leading-4 text-lightbrown text-base">
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-[50%] flex-shrink-0 flex flex-col mob:w-full mob:pb-10 mob:-mt-10 tab:w-full tab:pb-10 tab:-mt-10">
            {/* My plan */}
            <div>
              <div class="flex items-center justify-between">
                <h2 class="pl-[6px] text-xl font-semibold leading-6">
                  My Plan
                </h2>
              </div>
              <div class="mt-4 w-full rounded-3xl bg-primary p-6">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-darkbrown font-semibold leading-5 text-base">
                      12 Month • <span class="text-lightgreen"> Best deal</span>
                    </p>
                    <p class="leading-4 mt-[6px] font-medium text-sm text-lightbrown">
                      Term expires 5th Aug 24
                    </p>
                  </div>
                  <p class="text-base font-semibold leading-5 text-lightgreen ">
                    $
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8"></div>
            <div class="flex items-center justify-between">
              <h2 class="pl-[6px] text-xl font-semibold leading-6">
                My Payment Method
              </h2>
            </div>
            <div className="mt-4 w-full rounded-3xl bg-primary p-6">
              <div className="flex flex-wrap items-center justify-between">
                <p className="font-semibold leading-4 text-black text-base">
                  Payment Method
                </p>
                <p className="font-semibold leading-4 text-base">promotional</p>
              </div>
              <div className="my-5 w-full border-t border-caption border-lightbrown opacity-50"></div>
              <div className="flex items-center">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[116px] h-[64px]"
                >
                  <rect width="48" height="48" rx="20" fill="#E68B85" />
                  <path
                    d="M24 14C29.523 14 34 18.477 34 24C34.0021 26.6255 32.9715 29.1464 31.1309 31.0186C29.2902 32.8908 26.7872 33.9641 24.162 34.0066C21.5369 34.0491 19.0003 33.0576 17.1 31.246C15.1997 29.4344 14.088 26.9482 14.005 24.324L14 24L14.004 23.72C14.152 18.327 18.57 14 24 14Z"
                    fill="white"
                  />
                  <path
                    d="M24.0165 28.3911H24.0275"
                    stroke="#E68B85"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.0216 25.4804V25.2247C24.0216 24.3965 24.5331 23.9581 25.0446 23.6049C25.544 23.2639 26.0432 22.8255 26.0432 22.0217C26.0432 20.9013 25.142 20 24.0216 20C22.9012 20 22 20.9013 22 22.0217"
                    stroke="#E68B85"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-2 text-base font-medium leading-6 text-black">
                  All In-App purchases must be managed within your Apple
                  Subscriptions.
                </p>
              </div>
              <ol className="mt-6 list-decimal pl-4 text-lightbrown">
                <li className="text-base font-medium">
                  Go to Settings &gt; [your name] &gt; iTunes &amp; App Store
                </li>
                <li className="text-base font-medium text-caption">
                  Tap your Apple ID at the top of the screen, then select View
                  Apple ID. You might need to sign in with your Apple ID
                </li>
                <li className="text-base font-medium ">
                  Scroll down and tap 'Subscriptions'
                </li>
                <li className="text-base font-medium ">
                  Choose 'Grounds' as the subscription that you want to manage
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testing;

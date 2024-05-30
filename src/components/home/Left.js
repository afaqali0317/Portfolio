import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/DummyResume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Student","Web Developer", "Full Stack Developer", "UI Designer","Entrepreneur"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">AFAQ ALI</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="https://www.github.com/afaqali0317/" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span></a>
            <a href="https://www.linkedin.com/in/afaq-ali-0a9894260/" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span></a>
            <a href="https://www.youtube.com/channel/UCySM3bOA4a4D4ORHFpJSfDw" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutube />
            </span></a>
            <a href="https://facebook.com/" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span></a>
            <a href="https://www.instagram.com/afaqali000/" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span></a>
            <a href="https://x.com/AfaqAli317" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span></a>
            <a href="mailto:afaqali03179525639@gmail.com" target="_blank"><span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span></a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;

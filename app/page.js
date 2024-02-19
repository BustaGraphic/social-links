import Image from "next/image";
import Avatar from "../public/avatar-jessica.jpeg"

export default function Home() {
  return (
    <main className="bg-offBlack h-screen flex items-center justify-center">
      <div className="flex-col justify-center items-center rounded-lg p-5 bg-darkGrey space-y-2.5 ">
        <div className="pb-2 flex justify-center">
          <Image src={Avatar} alt="avatar" className="rounded-full h-20 w-20" />
        </div>

        <div className="text-white flex justify-center font-semibold text-xl">
          Jessica Rondall
        </div>
        <div className="flex justify-center text-green  text-xs pb-3">
          London, United Kingdom

        </div>
        <div className="flex justify-center text-xs text-gray-300 pb-3">
          "Front-end developer and avid reader."
        </div>

        <a href="https://github.com/" className="flex justify-center items-center bg-grey text-white text-xs rounded-md py-2 w-64  font-medium hover:font-semibold hover:bg-green hover:text-black cursor-pointer">
          GitHub
        </a>
        <a href="https://frontendmentor.io/" className="flex justify-center items-center bg-grey text-white text-xs rounded-md py-2 w-64 font-medium hover:font-semibold hover:bg-green hover:text-black cursor-pointer">
          Frontend Mentor
        </a>
        <a href="https://linkedin.com/" className="flex justify-center items-center bg-grey text-white text-xs rounded-md py-2 w-64 font-medium hover:font-semibold hover:bg-green hover:text-black cursor-pointer">
          LinkedIn
        </a>

        <a href="https://x.com/" className="flex justify-center items-center bg-grey text-white text-xs rounded-md py-2 w-64 font-medium hover:font-semibold hover:bg-green hover:text-black cursor-pointer">
          Twitter
        </a>

        <a href="https://instagram.com/" className="flex justify-center items-center bg-grey text-white text-xs rounded-md py-2 w-64 font-medium hover:font-semibold hover:bg-green hover:text-black cursor-pointer">
          Instagram
        </a>




      </div>
    </main>
  );
}

import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter
} from "react-icons/fa"

export default function FollowUs() {
  return (
    <footer
      id="follow"
      className="
        relative
        bg-[#0b1020]
        border-t border-white/10
        py-16
        px-6
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-3xl font-bold mb-4">
          Follow <span className="text-indigo-500">IEEE VIT</span>
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Stay updated with our latest events, hackathons,
          workshops, and technical initiatives.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-2xl">

          <a
            href="https://www.instagram.com/ieeevitvellore/"
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-400
              hover:text-pink-500
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/IEEE-VIT"
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-400
              hover:text-white
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/ieeevitvellore"
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-400
              hover:text-blue-500
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com/ieeevit"
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-400
              hover:text-sky-400
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <FaTwitter />
          </a>

        </div>

        {/* Bottom text */}
        <div className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} IEEE VIT • All rights reserved
        </div>

      </div>
    </footer>
  )
}

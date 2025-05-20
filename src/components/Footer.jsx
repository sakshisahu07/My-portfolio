import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 text-center relative">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
        You can <span className="text-cyan-400">connect</span> with me via{" "}
        <span className="text-red-400">mail</span>,{" "}
        <span className="text-yellow-300">Instagram</span>,{" "}
        <span className="text-cyan-400">LinkedIn</span> or{" "}
        <span className="text-red-400">GitHub</span>.
      </h2>

      <div className="flex justify-center gap-6 mt-10 flex-wrap text-xl sm:text-2xl md:text-3xl font-medium">
        <a
          href="mailto:yourmail@example.com"
          className="text-red-400 hover:underline"
        >
          Mail
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:underline"
        >
          GitHub
        </a>
      </div>

      <p className="mt-12 text-sm sm:text-base text-gray-400">
        created with <span className="text-red-500">❤️</span> by <span className="font-semibold">Sakshi</span>
      </p>

      {/* Scroll to top button */}
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xl p-3 rounded-full hover:scale-110 transition shadow-lg"
  title="Scroll to top"
>
  ↑
</button>

    </footer>
  );
};

export default Footer;

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:px-14 md:py-20 max-w-5xl mx-auto">
      <div className="md:w-2/3 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-black text-dark leading-snug">
          Pahrin Hadi Fikri<br /> Fullstack Developer
        </h1>
        <p className="text-dark mt-6 mb-8 text-lg md:pr-20">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-sm font-bold shadow-md hover:bg-red-500 transition">
          Download Resume
        </button>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden border-b-8 border-r-8 border-light-bg shadow-lg">
          <img 
            src="/Ellipse1.png" 
            alt="Pahrin Hadi Fikri" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
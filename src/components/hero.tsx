import '../index.css';

function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative px-4 md:px-8 pt-24 overflow-hidden ">

      <div className="relative z-10 space-y-4 md:space-y-6 max-w-4xl mx-auto animate-fade-in">
        <div className="space-y-2">
          <h1 className="animate-slide-in-up bg-linear-to-r bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] font-black leading-none tracking-tight drop-shadow-2xl">
            Kevin Jeff
          </h1>
          <h2 className="animate-slide-in-up animation-delay-300 bg-linear-to-r text-blue-500 bg-clip-text text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] font-black leading-none tracking-tight drop-shadow-lg">
            Ouano
          </h2>
        </div>
        
        <div className="flex justify-center items-center animate-slide-in-up animation-delay-600">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-mono text-blue-300 animate-typewriter-hold whitespace-nowrap overflow-hidden">
                Software Engineer
            </span>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] -z-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50] h-50 bg-cyan-400/30 rounded-full blur-[60px] mix-blend-screen animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 rounded-full blur-[100px]"></div>
          </div>
      </div>
    </section>
  );
}

export default Hero
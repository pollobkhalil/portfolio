import Button from "../components/Button.jsx"
import { words } from "../constants/index.js"




const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>

        <div className='absolute top-0 left-0 z-10'>

        
            <img src="/images/bg.png" alt="background" />

        </div>
        <div className='hero-layout'>

      {/*   left: Hero content */}

      <header className='flex flex-col justify-center md:w-full w-screen
      md:px-20 px-5'>

        <div className='flex flex-col gap-7'>
          <div className='hero-text'>

        <h1>shaping
          <span className="slide">
            <span className="wrapper">
              {words.map((word) => (
                <span key={word.text} className="flex items-center
                md:gap-3 gap-1 pb-2">
                  <img 
                  src={word.imagPath} alt={word.text}
                  className="xl:size-12 md:size-10 size-7 md:p-2 p-1
                  rounded-full bg-white-50" />
                  <span>{word.text}</span>
                </span>
                
              ))}
            </span>
          </span>
        </h1>
          
         
        
        <h1>into real projects</h1>
        <h1>that deliver results</h1>

          </div>
           <p className="text-white-50 md:text-xl realtive z-50 pointer-events-none">Hi, I'm Pollob Khalil, a developer based in Bangladesh with a passion for code.</p>

            <Button 
            className="md:w-10 md:h-16 w-60 h-12"
            id="button"
            text="See My Work" />

        </div>

      </header>



      {/*   right: Hero content */}


        </div>
      


    </section>
  )
}

export default Hero
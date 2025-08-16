import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Professional background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-30"></div>
            
            {/* Main image container with professional design */}
            <div className="relative z-10">
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-20"></div>
                
                {/* Main professional border */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 rounded-full flex items-center justify-center p-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Inner container with professional styling */}
                  <div className="w-68 h-68 sm:w-92 sm:h-92 bg-white rounded-full overflow-hidden shadow-md border border-gray-100 relative">
                    {/* Professional overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 pointer-events-none"></div>
                    
                    <img 
                      src="/shreyas-photo.jpeg.jpg" 
                      alt="Shreyas Paimode" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-300 ease-out"
                      loading="eager"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </div>
                
                {/* Professional accent elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
              </div>
            </div>
            
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl opacity-40"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Software Developer & Robotics Enthusiast
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm Shreyas Paimode, a Software Developer with hands-on experience in Java, Spring Boot, React.js, 
              REST APIs, and MySQL. I'm currently pursuing my Bachelors of Engineering in Electronics and Telecommunication 
              at PES Modern College of Engineering, Pune.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in both frontend and backend development, with expertise in building responsive, scalable web applications. 
              My passion extends beyond software development to embedded systems and robotics, where I've achieved significant 
              success in national-level competitions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8">
                             <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                 <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                 <div className="text-gray-600 font-medium">Months Experience</div>
               </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-600 font-medium">Internships</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">AIR 5</div>
                <div className="text-gray-600 font-medium">DD Robocon 2025</div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/Shreyas_Paimode_Resume.pdf"
                download="Shreyas_Paimode_Resume.pdf"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

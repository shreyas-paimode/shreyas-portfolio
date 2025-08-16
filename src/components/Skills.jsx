import React, { useState, useEffect } from 'react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React.js', level: 85, icon: 'fab fa-react', color: 'from-blue-400 to-cyan-400' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js-square', color: 'from-yellow-400 to-orange-400' },
        { name: 'HTML5', level: 90, icon: 'fab fa-html5', color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt', color: 'from-blue-500 to-indigo-500' },
        { name: 'Tailwind CSS', level: 80, icon: 'fas fa-palette', color: 'from-cyan-400 to-blue-500' },
        { name: 'Bootstrap', level: 75, icon: 'fab fa-bootstrap', color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      category: 'Backend & Integration',
      technologies: [
        { name: 'Java', level: 85, icon: 'fab fa-java', color: 'from-red-500 to-orange-500' },
        { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf', color: 'from-green-500 to-emerald-500' },
        { name: 'Hibernate', level: 75, icon: 'fas fa-database', color: 'from-blue-600 to-indigo-600' },
        { name: 'RESTful APIs', level: 85, icon: 'fas fa-server', color: 'from-gray-600 to-gray-700' },
        { name: 'JWT Authentication', level: 80, icon: 'fas fa-shield-alt', color: 'from-green-600 to-teal-600' }
      ]
    },
    {
      category: 'Database & Tools',
      technologies: [
        { name: 'MySQL', level: 85, icon: 'fas fa-database', color: 'from-blue-600 to-indigo-600' },
        { name: 'Git', level: 80, icon: 'fab fa-git-alt', color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', level: 85, icon: 'fab fa-github', color: 'from-gray-700 to-gray-900' },
        { name: 'Postman', level: 80, icon: 'fas fa-paper-plane', color: 'from-orange-400 to-red-400' },
        { name: 'VS Code', level: 90, icon: 'fas fa-code', color: 'from-blue-500 to-indigo-500' },
        { name: 'Vite', level: 75, icon: 'fas fa-bolt', color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      category: 'Embedded Systems & Robotics',
      technologies: [
        { name: 'Arduino', level: 85, icon: 'fas fa-microchip', color: 'from-blue-600 to-indigo-600' },
        { name: 'ESP32', level: 80, icon: 'fas fa-wifi', color: 'from-green-500 to-emerald-500' },
        { name: 'Python', level: 75, icon: 'fab fa-python', color: 'from-blue-500 to-indigo-500' },
        { name: 'OpenCV', level: 70, icon: 'fas fa-eye', color: 'from-green-600 to-teal-600' },
        { name: 'MediaPipe', level: 70, icon: 'fas fa-hand-paper', color: 'from-purple-500 to-pink-500' }
      ]
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with delay
          skills.forEach((category, categoryIndex) => {
            category.technologies.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, `${categoryIndex}-${skillIndex}`])
              }, (categoryIndex * 200) + (skillIndex * 100))
            })
          })
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            I work with a variety of technologies across software development and embedded systems. 
            Here are the tools and technologies I use in my projects.
          </p>
        </div>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((skill, skillIndex) => {
                  const isAnimated = animatedSkills.includes(`${categoryIndex}-${skillIndex}`)
                  return (
                    <div 
                      key={skillIndex} 
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <i className={`${skill.icon} text-xl text-white`}></i>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                          <p className="text-sm text-gray-500">Proficiency</p>
                        </div>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left ${
                              isAnimated ? 'scale-x-100' : 'scale-x-0'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">Beginner</span>
                          <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                          <span className="text-xs text-gray-500">Expert</span>
                        </div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="mt-3 flex justify-center">
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                star <= Math.ceil(skill.level / 20) 
                                  ? `bg-gradient-to-r ${skill.color}` 
                                  : 'bg-gray-300'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Skills */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 animate-fade-in-up animation-delay-800">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Skills & Interests
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Digital Marketing', 'Project Management', 'Team Leadership', 'Public Speaking',
              'Innovation & Problem-Solving', 'Bluetooth Communication', 'Sensor Integration', 'Database Design',
              'API Integration', 'Performance Optimization', 'Debugging', 'Responsive Design'
            ].map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
                <span className="text-gray-700 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Summary */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-1000">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full shadow-lg">
            <i className="fas fa-rocket text-2xl"></i>
            <span className="text-lg font-semibold">Always Learning & Growing</span>
            <i className="fas fa-arrow-right text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

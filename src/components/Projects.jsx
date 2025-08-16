import React, { useState, useEffect } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'OpenCV-based Gesture Controlled Robot',
      description: 'Developed a gesture-controlled robot that interprets and responds to human hand gestures in real-time. Used computer vision for hand tracking and wireless communication for controlling robotic movements.',
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Gesture+Robot',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'ESP32', 'Bluetooth'],
      category: 'robotics',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'HRMS (HR Management System)',
      description: 'Developed a modular and responsive Human Resource Management System with React fundamentals. Built the Career Module allowing admins to post and manage job openings with form validation and dynamic data rendering.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=HRMS',
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'REST APIs'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'MailMind – AI-Powered Smart Email Assistant',
      description: 'Developed a Gmail-style UI using React.js with components, hooks, and responsive design. Integrated mock APIs and Gemini AI API for intelligent email reply generation.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=MailMind',
      technologies: ['React.js', 'JavaScript', 'REST APIs', 'Spring Boot', 'Gemini AI'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'robotics', label: 'Robotics' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  // Animate projects on filter change
  useEffect(() => {
    setVisibleProjects([])
    const timer = setTimeout(() => {
      setVisibleProjects(filteredProjects)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeFilter])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up animation-delay-200"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my technical skills.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Floating Tech Badges */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full shadow-sm"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Enhanced Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Category Badge */}
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                    project.category === 'frontend' ? 'bg-green-100 text-green-700' :
                    project.category === 'fullstack' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {project.category}
                  </span>
                  
                  {/* Enhanced Action Icons */}
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110">
                      <i className="fas fa-external-link-alt text-xs"></i>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110">
                      <i className="fab fa-github text-xs"></i>
                    </button>
                </div>
              </div>
              </div>

              {/* Enhanced Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category to see more projects.</p>
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects

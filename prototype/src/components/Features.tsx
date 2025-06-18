import React from 'react'
import { Lightbulb, Zap, Brain, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Drive Innovation",
      description: "Unlock creative solutions and breakthrough thinking with AI-powered insights and automation.",
      gradient: "from-amber-400 to-orange-500",
      shadowColor: "shadow-amber-500/10",
      hoverShadow: "hover:shadow-amber-500/20",
      textColor: "text-amber-400 hover:text-amber-300",
      link: "/drive-innovation"
    },
    {
      icon: Zap,
      title: "Remove Tedium",
      description: "Eliminate repetitive tasks and bureaucratic bottlenecks that slow down meaningful work.",
      gradient: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-500/10",
      hoverShadow: "hover:shadow-emerald-500/20",
      textColor: "text-emerald-400 hover:text-emerald-300",
      link: "/remove-tedium"
    },
    {
      icon: Brain,
      title: "Work Smarter",
      description: "Enhance human capabilities with intelligent tools that amplify decision-making and productivity.",
      gradient: "from-violet-400 to-purple-500",
      shadowColor: "shadow-violet-500/10",
      hoverShadow: "hover:shadow-violet-500/20",
      textColor: "text-violet-400 hover:text-violet-300",
      link: "/work-smarter"
    }
  ]

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform the Future of Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI-volution empowers teams to achieve more with intelligent automation and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-gray-900 rounded-2xl shadow-lg ${feature.shadowColor} ${feature.hoverShadow} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-800`}
            >
              {/* Icon Section */}
              <div className="flex justify-center pt-8 pb-4">
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-center">
                  {feature.description}
                </p>
                
                <div className="flex justify-center">
                  <Link 
                    to={feature.link}
                    className={`group/btn flex items-center space-x-2 ${feature.textColor} font-semibold transition-colors`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

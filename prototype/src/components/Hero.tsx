import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 h-6 w-6 text-blue-400/30 animate-bounce delay-1000" />
        <Zap className="absolute top-1/3 right-1/4 h-8 w-8 text-purple-400/30 animate-bounce delay-2000" />
        <Brain className="absolute bottom-1/3 left-1/3 h-7 w-7 text-cyan-400/30 animate-bounce delay-3000" />
        <Sparkles className="absolute bottom-1/4 right-1/3 h-5 w-5 text-pink-400/30 animate-bounce" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              ACCELERATE
            </span>
            <span className="block text-white mt-2">
              WITH AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-blue-400 font-semibold">Drive innovation</span> • <span className="text-purple-400 font-semibold">Remove tedium</span> • <span className="text-cyan-400 font-semibold">Work smarter</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              to="/submit-use-case"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-3"
            >
              <span>Submit Your Use Case</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              Explore Features
            </button>
          </div>

          {/* Stats or Social Proof */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400">Faster Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-gray-400">Less Tedium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-400">Smarter Decisions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

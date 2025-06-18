import React from 'react'
import { Users, Handshake, Target } from 'lucide-react'

const Partnership = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Human-AI Partnership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The future belongs to those who combine human creativity with AI capabilities. 
            Join the evolution of intelligent collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Collaborative Intelligence</h3>
            <p className="text-gray-300">
              Humans and AI working together to solve complex challenges and unlock new possibilities.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Augmented Capabilities</h3>
            <p className="text-gray-300">
              Enhance human strengths while AI handles routine tasks, creating unprecedented productivity.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Focused Innovation</h3>
            <p className="text-gray-300">
              Direct energy toward creative problem-solving while AI manages operational complexity.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how AI-volution can help your team achieve breakthrough results through intelligent automation and human-AI collaboration.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Start Your AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership

import React from 'react'
import { Gift, Award, Star } from 'lucide-react'

const Prizes = () => {
  return (
    <section className="py-20 bg-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Prizes
          </h2>
          
          {/* For Shortlisted Teams */}
          <div className="mb-12">
            <p className="text-2xl text-white mb-6 font-medium">
              For shortlisted teams:
            </p>
            <div className="inline-block bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-2 border-gray-600 rounded-3xl px-8 py-6 shadow-2xl">
              <div className="flex items-center justify-center space-x-4">
                <Gift className="h-8 w-8 text-white" />
                <span className="text-3xl md:text-4xl font-bold text-white">
                  $200
                </span>
                <span className="text-xl md:text-2xl text-white font-medium">
                  GovWallet credits and
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">2</span>
                  <span className="text-xl md:text-2xl text-white font-medium">days off</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl">
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

export default Prizes
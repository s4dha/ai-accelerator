import React from 'react'
import { Play, Target, Building2, Shield } from 'lucide-react'

const VideoIntro = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              AI-volution
            </span>
            <span className="block text-white mt-2">Initiative</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Accelerating AI transformation across <span className="text-blue-400 font-semibold">Strategy</span>, <span className="text-purple-400 font-semibold">Corporate</span>, and <span className="text-cyan-400 font-semibold">Governance</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="AI Strategy Meeting"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                  <Play className="h-12 w-12 text-white ml-1 group-hover:text-blue-400 transition-colors" fill="currentColor" />
                </button>
              </div>

              {/* Video Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium">
                3:42
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>


          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Transforming SCG Through 
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Strategic AI Integration
                </span>
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover how the AI-volution initiative is reshaping the future of business through intelligent automation, strategic decision-making, and governance excellence.
              </p>
            </div>
                    
            {/* Key Focus Areas */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl border border-blue-500/20">
                <div className="bg-blue-500/20 p-3 rounded-xl">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Strategic AI</h4>
                  <p className="text-gray-400">Long-term planning and competitive advantage</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl border border-purple-500/20">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <Building2 className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Corporate Integration</h4>
                  <p className="text-gray-400">Seamless AI adoption across all departments</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-2xl border border-cyan-500/20">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">AI Governance</h4>
                  <p className="text-gray-400">Ethical, compliant, and responsible AI practices</p>
                </div>
              </div>
            </div>

            
            
            {/* CTA */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
                <span>Watch Full Presentation</span>
                <Play className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoIntro

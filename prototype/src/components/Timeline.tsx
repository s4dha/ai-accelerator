import { Brain, Users, Target } from 'lucide-react'

const timeline = [
    {
        phase: 'Workshops & Introduction',
        period: 'First 2 weeks of July',
        description: 'Introduction to AI-volution initiative and capability building',
        icon: Users,
        status: 'upcoming'
    },
    {
        phase: 'Team Formation & Brainstorming',
        period: 'Last 2 weeks of July',
        description: 'Form teams and brainstorm innovative use cases',
        icon: Brain,
        status: 'upcoming'
    },
    {
        phase: 'Hackathon & Awards',
        period: '1st week of August',
        description: 'Implementation hackathon with top 3 teams receiving rewards',
        icon: Target,
        status: 'upcoming'
    }
]

const Timeline = () => {
    {/* Timeline Section */}
    return (
        <section id="timeline" className="px-6 py-20 bg-gray-900 bg-opacity-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Implementation Timeline</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our structured approach to launching the AI-volution initiative
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

                    <div className="space-y-12">
                        {timeline.map((phase, index) => {
                            const IconComponent = phase.icon
                            return (
                                <div key={index} className="relative flex items-start space-x-6">
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 items-center justify-center relative z-10">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-gray-800 bg-opacity-50 rounded-xl p-8">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="md:hidden w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                                                <p className="text-sm" style={{ color: '#dd8948' }}>{phase.period}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300">{phase.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;
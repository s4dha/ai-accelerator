import React from 'react'
import { ArrowLeft, Brain, Zap, Target, Users, DollarSign, Building2, Scale, Eye, Clock, TrendingUp, CheckCircle, Sparkles, Network, Shuffle } from 'lucide-react'
import { Link } from 'react-router-dom'

const WorkSmarterPage = () => {
  const hrExamples = [
    {
      title: "Smart Recruitment Decisions",
      traditional: "Can't remember details about hundreds of candidates or objectively compare complex profiles",
      breakthrough: "AI maintains perfect memory of all candidate interactions, highlights relevant patterns, suggests interview questions based on role requirements and candidate background",
      outcome: "Recruiters make more informed hiring decisions by focusing on cultural fit and potential while AI handles data synthesis"
    },
    {
      title: "Intelligent Performance Management", 
      traditional: "Managers can't track all employee interactions, projects, and development opportunities across time",
      breakthrough: "AI aggregates performance data from multiple sources, identifies skill gaps, suggests personalized development paths, predicts career trajectory matches",
      outcome: "Managers have data-driven insights for meaningful career conversations, making development decisions based on comprehensive patterns rather than recent memory"
    },
    {
      title: "Strategic Workforce Planning",
      traditional: "Difficulty visualizing complex workforce scenarios and their long-term implications", 
      breakthrough: "AI models different hiring, training, and restructuring scenarios, shows projected outcomes with confidence intervals",
      outcome: "HR leaders make strategic decisions with clear understanding of trade-offs and likely consequences"
    }
  ]

  const financeExamples = [
    {
      title: "Enhanced Investment Analysis",
      traditional: "Can't simultaneously track thousands of market variables and their historical relationships",
      breakthrough: "AI continuously monitors market conditions, analyzes risk factors, provides real-time portfolio recommendations with supporting rationale",
      outcome: "Investment managers focus on strategic asset allocation while AI handles market surveillance and tactical adjustments"
    },
    {
      title: "Intelligent Budget Planning",
      traditional: "Difficulty accurately predicting how multiple variables will interact to affect budget outcomes",
      breakthrough: "AI analyzes spending patterns, market conditions, and business drivers to provide dynamic budget forecasts with scenario planning", 
      outcome: "CFOs make budget decisions with clear visibility into potential outcomes and contingency needs"
    },
    {
      title: "Smart Risk Assessment",
      traditional: "Can't simultaneously evaluate all risk factors and their interconnections across complex business operations",
      breakthrough: "AI continuously assesses risk exposure across all business areas, provides early warning alerts with recommended actions",
      outcome: "Risk managers proactively address emerging threats while maintaining strategic focus on major risk decisions"
    }
  ]

  const corporateExamples = [
    {
      title: "Strategic Decision Enhancement",
      traditional: "Executive decisions often rely on incomplete information and can't consider all possible scenarios",
      breakthrough: "AI provides comprehensive market analysis, competitor intelligence, and scenario modeling with probability assessments",
      outcome: "Executives make strategic choices with unprecedented clarity about likely outcomes and alternative paths"
    },
    {
      title: "Intelligent Project Management",
      traditional: "Project managers can't track all interdependencies and predict cascading effects of delays across complex projects",
      breakthrough: "AI monitors project health in real-time, predicts potential bottlenecks, suggests resource reallocation strategies",
      outcome: "Project managers focus on stakeholder management and creative problem-solving while AI handles scheduling optimization"
    },
    {
      title: "Enhanced Customer Relationship Management",
      traditional: "Sales teams can't remember every customer interaction detail or identify optimal engagement timing",
      breakthrough: "AI analyzes customer behavior patterns, suggests personalized outreach strategies, predicts purchase likelihood",
      outcome: "Sales professionals focus on relationship building and negotiation while AI provides perfect customer intelligence"
    },
    {
      title: "Smart Legal Decision Support",
      traditional: "Lawyers can't instantly recall all relevant case precedents and regulatory changes",
      breakthrough: "AI provides comprehensive legal research, identifies relevant precedents, flags potential compliance issues",
      outcome: "Legal professionals focus on strategy and advocacy while AI handles comprehensive research and analysis"
    }
  ]

  const amplificationMechanisms = [
    {
      icon: Network,
      title: "Information Synthesis",
      example: "AI processes thousands of market reports, customer interactions, and performance metrics simultaneously",
      result: "Executives make decisions with complete information rather than partial snapshots",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Eye,
      title: "Pattern Recognition at Scale",
      example: "AI identifies subtle performance indicators across entire organizations that humans would miss",
      result: "Early detection of opportunities and risks with unprecedented accuracy",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Target,
      title: "Scenario Simulation",
      example: "AI models hundreds of 'what if' scenarios for strategic decisions in real-time",
      result: "Leaders understand consequences before acting, choosing optimal paths confidently",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Cognitive Augmentation",
      example: "AI provides perfect memory + instant context for every meeting, decision, and interaction",
      result: "Professionals operate with superhuman recall and analytical capabilities",
      color: "from-indigo-400 to-purple-500"
    }
  ]

  const coreMechanisms = [
    {
      icon: Brain,
      title: "Perfect Memory + Instant Recall",
      description: "AI remembers every customer interaction, project detail, and market condition",
      color: "from-cyan-500/10 to-cyan-600/5",
      borderColor: "border-cyan-500/20",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Eye,
      title: "Pattern Recognition at Scale",
      description: "AI identifies subtle trends across millions of data points that humans would miss",
      color: "from-teal-500/10 to-teal-600/5",
      borderColor: "border-teal-500/20",
      iconBg: "bg-teal-500/20",
      iconColor: "text-teal-400"
    },
    {
      icon: Target,
      title: "Scenario Simulation",
      description: "AI models hundreds of 'what if' scenarios instantly",
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Real-time Intelligence",
      description: "AI provides relevant context for any meeting or decision instantly",
      color: "from-indigo-500/10 to-indigo-600/5",
      borderColor: "border-indigo-500/20",
      iconBg: "bg-indigo-500/20",
      iconColor: "text-indigo-400"
    }
  ]

  const ExampleCard = ({ example, index }: { example: any, index: number }) => (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <h4 className="text-xl font-bold text-white mb-4">{example.title}</h4>
      
      <div className="space-y-4">
        <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4">
          <h5 className="text-gray-400 font-semibold mb-2 flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            Traditional Approach
          </h5>
          <p className="text-gray-300 text-sm leading-relaxed">{example.traditional}</p>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
          <h5 className="text-cyan-400 font-semibold mb-2 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            AI-Powered Enhancement
          </h5>
          <p className="text-gray-300 text-sm leading-relaxed">{example.breakthrough}</p>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <h5 className="text-emerald-400 font-semibold mb-2 flex items-center">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
            Smarter Outcome
          </h5>
          <p className="text-gray-300 text-sm leading-relaxed">{example.outcome}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black via-cyan-900/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">Smarter</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AI helps us work smarter by acting as an "intelligence multiplier" - it doesn't replace human judgment but enhances our cognitive abilities, giving us superhuman memory, pattern recognition, and analytical speed while preserving human wisdom and intuition.
          </p>
        </div>
      </section>

      {/* Core Mechanism */}
      <section className="py-16 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How AI Amplifies Human Intelligence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Think of AI like having a brilliant research assistant with perfect memory who can instantly analyze massive amounts of information and present you with the most relevant insights exactly when you need them to make decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreMechanisms.map((mechanism, index) => (
              <div key={index} className={`bg-gradient-to-br ${mechanism.color} rounded-2xl p-6 border ${mechanism.borderColor}`}>
                <div className={`${mechanism.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <mechanism.icon className={`h-8 w-8 ${mechanism.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{mechanism.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{mechanism.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-cyan-500/20 p-4 rounded-2xl mr-4">
              <Users className="h-8 w-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Human Resources Examples</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {hrExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Finance Examples */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-teal-500/20 p-4 rounded-2xl mr-4">
              <DollarSign className="h-8 w-8 text-teal-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Finance Examples</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {financeExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-blue-500/20 p-4 rounded-2xl mr-4">
              <Building2 className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Corporate Functions Examples</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {corporateExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Amplification Mechanisms */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligence Amplification Mechanisms</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI enables smarter work by fundamentally enhancing how we process information and make decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {amplificationMechanisms.map((mechanism, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${mechanism.color} w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                    <mechanism.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{mechanism.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                    <h5 className="text-cyan-400 font-semibold mb-2">Example</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{mechanism.example}</p>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <h5 className="text-emerald-400 font-semibold mb-2">Result</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{mechanism.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Smarter?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Amplify your intelligence with AI-powered cognitive enhancement.
          </p>
          <Link 
            to="/submit-use-case"
            className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit Your Use Case
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WorkSmarterPage
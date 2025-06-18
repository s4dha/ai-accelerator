import React from 'react'
import { ArrowLeft, Brain, Zap, Target, Users, DollarSign, Building2, Scale, Eye, Clock, TrendingUp, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const WorkSmarterPage = () => {
  const cognitiveAugmentations = [
    {
      icon: Brain,
      title: "Perfect Memory + Instant Recall",
      description: "AI remembers every customer interaction, project detail, and market condition",
      benefit: "Make decisions based on complete information rather than partial memory"
    },
    {
      icon: Eye,
      title: "Pattern Recognition at Scale", 
      description: "AI identifies subtle trends across millions of data points that humans would miss",
      benefit: "Spot opportunities and risks earlier with greater confidence"
    },
    {
      icon: Target,
      title: "Scenario Simulation",
      description: "AI models hundreds of 'what if' scenarios instantly",
      benefit: "Understand consequences before making decisions, choose optimal paths"
    },
    {
      icon: Zap,
      title: "Real-time Context Switching",
      description: "AI provides relevant background for any meeting or decision instantly", 
      benefit: "Stay fully informed across multiple complex projects simultaneously"
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI forecasts likely outcomes based on historical patterns and current conditions",
      benefit: "Make proactive decisions rather than reactive ones"
    }
  ]

  const hrExamples = [
    {
      title: "Smart Recruitment Decisions",
      limitation: "Can't remember details about hundreds of candidates or objectively compare complex profiles",
      enhancement: "AI maintains perfect memory of all candidate interactions, highlights relevant patterns, suggests interview questions based on role requirements and candidate background",
      outcome: "Recruiters make more informed hiring decisions by focusing on cultural fit and potential while AI handles data synthesis"
    },
    {
      title: "Intelligent Performance Management", 
      limitation: "Managers can't track all employee interactions, projects, and development opportunities across time",
      enhancement: "AI aggregates performance data from multiple sources, identifies skill gaps, suggests personalized development paths, predicts career trajectory matches",
      outcome: "Managers have data-driven insights for meaningful career conversations, making development decisions based on comprehensive patterns rather than recent memory"
    },
    {
      title: "Strategic Workforce Planning",
      limitation: "Difficulty visualizing complex workforce scenarios and their long-term implications", 
      enhancement: "AI models different hiring, training, and restructuring scenarios, shows projected outcomes with confidence intervals",
      outcome: "HR leaders make strategic decisions with clear understanding of trade-offs and likely consequences"
    }
  ]

  const financeExamples = [
    {
      title: "Enhanced Investment Analysis",
      limitation: "Can't simultaneously track thousands of market variables and their historical relationships",
      enhancement: "AI continuously monitors market conditions, analyzes risk factors, provides real-time portfolio recommendations with supporting rationale",
      outcome: "Investment managers focus on strategic asset allocation while AI handles market surveillance and tactical adjustments"
    },
    {
      title: "Intelligent Budget Planning",
      limitation: "Difficulty accurately predicting how multiple variables will interact to affect budget outcomes",
      enhancement: "AI analyzes spending patterns, market conditions, and business drivers to provide dynamic budget forecasts with scenario planning", 
      outcome: "CFOs make budget decisions with clear visibility into potential outcomes and contingency needs"
    },
    {
      title: "Smart Risk Assessment",
      limitation: "Can't simultaneously evaluate all risk factors and their interconnections across complex business operations",
      enhancement: "AI continuously assesses risk exposure across all business areas, provides early warning alerts with recommended actions",
      outcome: "Risk managers proactively address emerging threats while maintaining strategic focus on major risk decisions"
    }
  ]

  const corporateExamples = [
    {
      title: "Strategic Decision Enhancement",
      limitation: "Executive decisions often rely on incomplete information and can't consider all possible scenarios",
      enhancement: "AI provides comprehensive market analysis, competitor intelligence, and scenario modeling with probability assessments",
      outcome: "Executives make strategic choices with unprecedented clarity about likely outcomes and alternative paths"
    },
    {
      title: "Intelligent Project Management",
      limitation: "Project managers can't track all interdependencies and predict cascading effects of delays across complex projects",
      enhancement: "AI monitors project health in real-time, predicts potential bottlenecks, suggests resource reallocation strategies",
      outcome: "Project managers focus on stakeholder management and creative problem-solving while AI handles scheduling optimization"
    },
    {
      title: "Enhanced Customer Relationship Management",
      limitation: "Sales teams can't remember every customer interaction detail or identify optimal engagement timing",
      enhancement: "AI analyzes customer behavior patterns, suggests personalized outreach strategies, predicts purchase likelihood",
      outcome: "Sales professionals focus on relationship building and negotiation while AI provides perfect customer intelligence"
    },
    {
      title: "Smart Legal Decision Support",
      limitation: "Lawyers can't instantly recall all relevant case precedents and regulatory changes",
      enhancement: "AI provides comprehensive legal research, identifies relevant precedents, flags potential compliance issues",
      outcome: "Legal professionals focus on strategy and advocacy while AI handles comprehensive research and analysis"
    }
  ]

  const amplificationBenefits = [
    {
      icon: Clock,
      title: "Enhanced Speed Without Sacrificing Quality",
      description: "Make complex decisions faster because AI handles information gathering and analysis. Focus human time on high-value judgment calls rather than data processing."
    },
    {
      icon: Target,
      title: "Improved Accuracy Through Collaboration", 
      description: "Combine AI's computational power with human intuition and experience. Reduce decision errors by having comprehensive data support."
    },
    {
      icon: TrendingUp,
      title: "Expanded Capability Range",
      description: "Handle more complex problems by leveraging AI's analytical capabilities. Take on challenges that would be impossible with human cognition alone."
    },
    {
      icon: Brain,
      title: "Continuous Learning Loop",
      description: "AI learns from your decisions and gets better at supporting your specific style. Your decision-making improves over time as the AI-human partnership evolves."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/20">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
            Work Smarter
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AI helps us work smarter by acting as an <span className="text-cyan-400 font-semibold">"intelligence multiplier"</span> - it doesn't replace human judgment but enhances our cognitive abilities, giving us superhuman memory, pattern recognition, and analytical speed while preserving human wisdom and intuition.
          </p>
        </div>
      </section>

      {/* Core Mechanism */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How AI Amplifies Human Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Think of AI like having a brilliant research assistant with perfect memory who can instantly analyze massive amounts of information and present you with the most relevant insights exactly when you need them to make decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Information Synthesis",
                description: "AI processes vast data streams and distills key insights"
              },
              {
                title: "Decision Support", 
                description: "AI provides context, predictions, and recommendations while humans make final choices"
              },
              {
                title: "Real-time Optimization",
                description: "AI continuously learns from decisions and suggests improvements"
              },
              {
                title: "Cognitive Augmentation",
                description: "AI handles information processing so humans focus on judgment and strategy"
              }
            ].map((mechanism, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{mechanism.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{mechanism.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Amplification Mechanisms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligence Amplification Mechanisms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cognitiveAugmentations.map((augmentation, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500">
                    <augmentation.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{augmentation.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{augmentation.description}</p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-cyan-400 font-medium text-sm">Human Benefit:</p>
                  <p className="text-gray-300 text-sm mt-1">{augmentation.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Examples */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Users className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Human Resources Examples</h2>
          </div>

          <div className="space-y-8">
            {hrExamples.map((example, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{example.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Human Limitation:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.limitation}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">AI Enhancement:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.enhancement}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Smarter Outcome:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Examples */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <DollarSign className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Finance Examples</h2>
          </div>

          <div className="space-y-8">
            {financeExamples.map((example, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{example.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Human Limitation:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.limitation}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">AI Enhancement:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.enhancement}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Smarter Outcome:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Examples */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Building2 className="h-8 w-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Corporate Functions Examples</h2>
          </div>

          <div className="space-y-8">
            {corporateExamples.map((example, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{example.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Human Limitation:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.limitation}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">AI Enhancement:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.enhancement}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Smarter Outcome:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{example.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Amplification Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Amplification Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {amplificationBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 via-gray-900 to-teal-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Amplify Your Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how AI can multiply your cognitive capabilities and transform your decision-making process.
          </p>
          <Link
            to="/submit-use-case"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Brain className="h-5 w-5 mr-2" />
            Submit Your Intelligence Amplification Use Case
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WorkSmarterPage

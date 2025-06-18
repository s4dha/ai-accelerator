export default function FAQPage() {
    const faqs = [
      {
        question: 'Is it okay if I’m unavailable for a few days in July to September?',
        answer: 'Yes, flexibility is built into the program. You can still join even if you’re away for a few days—just communicate with your team early.'
      },
      {
        question: 'Can I join as an individual or do I need a team?',
        answer: 'Both are welcome! You can sign up solo and form a team later, or register as a full team if you already have one.'
      },
      {
        question: 'How do I form a team during the program?',
        answer: 'We facilitate team formation through mixers and networking activities, so you’ll have many chances to find people to work with.'
      },
      {
        question: 'Do I need to be physically in office every day?',
        answer: 'No. While there are key events that are in-person, most collaboration can happen remotely unless otherwise specified.'
      },
      {
        question: 'Where can I explore problem statements to work on?',
        answer: 'Problem statements are shared during onboarding. You’ll get guidance on how to choose one that matches your interests and skills.'
      },
      {
        question: 'What’s required for the final submission?',
        answer: 'Finale submissions usually include a demo, a brief pitch, and supporting documentation like slides or a GitHub link.'
      },
      {
        question: 'What makes this different from other GovTech hackathons?',
        answer: 'This program is longer-term, more team-based, and gives you direct access to public sector mentors and real-world problems.'
      },
      {
        question: 'Who is behind the AI-Accelerator program?',
        answer: '{build} is run by GovTech, supported by mentors, problem sponsors, and tech enablers from the public sector.'
      },
      {
        question: 'How do I get help if I’m stuck?',
        answer: 'Mentors and community leads are available throughout the program to guide you—just reach out on Slack or during office hours.'
      },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 md:p-12">
        <div className="max-w-4xl mx-auto bg-purple-950 bg-opacity-60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">FAQs</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-purple-800/30 rounded-lg px-6 py-4 hover:bg-purple-700/40 transition-all"
              >
                <summary className="cursor-pointer text-lg font-semibold hover:text-purple-200">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-purple-100">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
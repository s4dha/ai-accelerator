import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterDropdown from '../components/ui/FilterDropdown';
import { Search } from 'lucide-react';

const mockProjects = [
    { id: 1, title: 'Automated Reporting Dashboard', description: 'An AI-powered dashboard that automatically generates and distributes weekly performance reports.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+A', category: 'Automation', division: 'Finance' },
    { id: 2, title: 'Customer Support Chatbot', description: 'A smart chatbot to handle common customer inquiries, freeing up human agents for complex issues.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+B', category: 'Innovation', division: 'Customer Service' },
    { id: 3, title: 'Predictive Maintenance System', description: 'Utilizes machine learning to predict equipment failures before they happen, reducing downtime.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+C', category: 'Efficiency', division: 'Operations' },
    { id: 4, title: 'Smart Document Analyzer', description: 'Extracts and categorizes key information from unstructured documents and contracts.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+D', category: 'Automation', division: 'Legal' },
    { id: 5, title: 'HR Onboarding Assistant', description: 'An AI assistant to guide new hires through the onboarding process and answer their questions.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+E', category: 'Efficiency', division: 'Human Resources' },
    { id: 6, title: 'Market Trend Forecaster', description: 'A tool that analyzes market data to forecast emerging trends and inform business strategy.', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Project+F', category: 'Innovation', division: 'Marketing' },
];

const ProjectsSubmittedPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDivision, setSelectedDivision] = useState('all');

    const categories = ['all', ...Array.from(new Set(mockProjects.map(p => p.category)))];
    const divisions = ['all', ...Array.from(new Set(mockProjects.map(p => p.division)))];

    const filteredProjects = useMemo(() => {
        return mockProjects.filter(project => {
            const searchMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
            const divisionMatch = selectedDivision === 'all' || project.division === selectedDivision;
            return searchMatch && categoryMatch && divisionMatch;
        });
    }, [searchTerm, selectedCategory, selectedDivision]);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold mb-4 text-center">Submitted Projects</h1>
                    <p className="text-lg text-gray-400 mb-12 text-center">Browse and filter through the innovative ideas from our colleagues.</p>

                    {/* Filter Controls */}
                    <div className="p-4 bg-gray-900/50 rounded-lg mb-12">
                        {/* Search Bar Row */}
                        <div className="relative mb-4">
                            <input
                                type="search"
                                placeholder="Search by title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-md p-2 pl-10 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>

                        {/* Dropdown Filters Row */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <FilterDropdown title="Category" options={categories} selectedValue={selectedCategory} onSelect={setSelectedCategory} />
                            <FilterDropdown title="Division" options={divisions} selectedValue={selectedDivision} onSelect={setSelectedDivision} />
                        </div>
                    </div>

                    {/* Projects Grid */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="bg-gray-800/50 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-blue-500/20">
                                    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-500">No projects match your search or filters.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsSubmittedPage;
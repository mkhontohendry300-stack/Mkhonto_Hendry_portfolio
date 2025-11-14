import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm Mkhonto Hendry's virtual assistant. Ask me anything about his experience, skills, projects, education, or how to get in touch!", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const getDetailedResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Experience related questions
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job') || lowerQuestion.includes('capaciti') || lowerQuestion.includes('stats') || lowerQuestion.includes('statistics')) {
      return "Mkhonto Hendry is currently working as a Digital Associate at CAPACITI, where he excels in data visualization and digital transformation projects. Previously, he worked as an intern specializing in Data Analysis at Statistics South Africa (StatsSA), where he analyzed statistical data, created insightful visualizations, and developed interactive dashboards to support data-driven decision making. He has 2+ years of professional experience.";
    }
    
    // Skills and technologies
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('tech') || lowerQuestion.includes('programming') || lowerQuestion.includes('python') || lowerQuestion.includes('sql') || lowerQuestion.includes('data')) {
      return "Mkhonto Hendry has strong technical skills in Python, R, SQL, and modern data visualization tools. He specializes in data analysis, transforming raw data into actionable insights with advanced analytics. His expertise includes data visualization, statistical analysis, dashboard development, and digital transformation. He has mastered 15+ tools and combines analytical precision with modern technology. His soft skills include collaboration, innovation, problem-solving, and driving data-driven decision making across teams.";
    }
    
    // Education questions
    if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('diploma') || lowerQuestion.includes('university') || lowerQuestion.includes('cput') || lowerQuestion.includes('mathematical')) {
      return "Mkhonto Hendry holds a Diploma in Mathematical Sciences from Cape Peninsula University of Technology (CPUT). His mathematical and analytical foundation enables him to excel in data analysis, statistical modeling, and transforming complex data into actionable insights.";
    }
    
    // Projects
    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('dashboard') || lowerQuestion.includes('visualization') || lowerQuestion.includes('github')) {
      return "Mkhonto Hendry has completed 10+ projects throughout his career, specializing in data visualization and interactive dashboards. His work focuses on transforming raw data into actionable insights, creating insightful visualizations, and developing analytics solutions that support data-driven decision making. You can explore his portfolio to see examples of his data analysis and visualization projects.";
    }
    
    // Certificates
    if (lowerQuestion.includes('certificate') || lowerQuestion.includes('certification') || lowerQuestion.includes('course') || lowerQuestion.includes('learning') || lowerQuestion.includes('ai')) {
      return "Mkhonto Hendry has earned multiple professional certificates including AI For Everyone by Andrew Ng (covering AI applications, business strategy, and ethics), Active Listening: Enhancing Communication Skills, Emotional Intelligence, Introduction to Generative AI, Prompt Engineering, and several other certifications in professional communication and AI technologies. These certifications complement his mathematical sciences background and demonstrate his commitment to continuous learning.";
    }
    
    // Contact information
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('hire') || lowerQuestion.includes('reach')) {
      return "You can contact Mkhonto Hendry via the contact form on this portfolio website. He's based in South Africa. You can also connect with him on LinkedIn or check out his projects on GitHub. He's available for data analyst positions, software development roles, and data visualization projects.";
    }
    
    // Location
    if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('south africa')) {
      return "Mkhonto Hendry is based in South Africa. He completed his studies at Cape Peninsula University of Technology and is currently working at CAPACITI. He's open to both local and remote opportunities.";
    }
    
    // About/Background
    if (lowerQuestion.includes('about') || lowerQuestion.includes('background') || lowerQuestion.includes('who') || lowerQuestion.includes('journey')) {
      return "Mkhonto Hendry Mike is a detail-oriented and analytical professional passionate about data-driven insights and innovation. He discovered his passion for data analysis during his Mathematical Sciences studies at Cape Peninsula University of Technology. He combines analytical precision with modern technology to solve real-world challenges. Currently working as a Digital Associate at CAPACITI, he previously interned at Statistics South Africa specializing in Data Analysis.";
    }
    
    // CV/Resume
    if (lowerQuestion.includes('cv') || lowerQuestion.includes('resume') || lowerQuestion.includes('download')) {
      return "You can download Mkhonto Hendry's CV directly from the homepage by clicking the 'Download CV' button. It contains detailed information about his experience, education, skills, and projects.";
    }
    
    // AI/Technology interests
    if (lowerQuestion.includes('ai') || lowerQuestion.includes('artificial intelligence') || lowerQuestion.includes('machine learning') || lowerQuestion.includes('ml')) {
      return "Mkhonto Hendry has a strong interest in AI and its applications in data analysis. He has completed courses on AI including 'AI For Everyone' by Andrew Ng, Generative AI, and Prompt Engineering. He combines his analytical skills with modern AI technologies to create innovative data-driven solutions.";
    }
    
    // Default response for unmatched questions
    return "That's an interesting question! Based on the information available on this portfolio, I can tell you about Mkhonto Hendry's experience (CAPACITI & StatsSA), skills (Python, R, SQL, data visualization), education (CPUT diploma), projects (10+ data projects), certificates, or how to contact him. Feel free to ask about any specific aspect you'd like to know more about!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Enhanced bot response
    setTimeout(() => {
      const botResponse = getDetailedResponse(inputValue);
      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-sage-dark hover:bg-sage-dark/90 shadow-elegant"
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-background/95 backdrop-blur-md border-border/50 shadow-elegant">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-foreground">Chat with Mkhonto's AI</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex flex-col h-full pb-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-sage-dark text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 text-sm"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-sage-dark hover:bg-sage-dark/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
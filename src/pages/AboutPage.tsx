import { motion } from 'motion/react';
import { FileText, Linkedin, ExternalLink } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const externalLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shanshan-lai',
      description: 'Professional network'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      url: 'https://shaneportfolio.webflow.io',
      description: 'View full portfolio'
    },
    {
      icon: FileText,
      label: 'Resume',
      url: '#',
      description: 'Download CV'
    }
  ];

  const expertise = [
    'Figma',
    'Adobe Creative Suite',
    'Prototyping',
    'User Research',
    'HTML/CSS/JavaScript',
    'Python',
    'Design Systems',
    'AI/ML Product Design',
    'Interaction Design',
    'Visual Design',
    'Usability Testing',
    'Cross-functional Collaboration'
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />

      <section className="pt-40 pb-32 px-8 md:px-16 relative">
        {/* Decorative Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-56 right-[10%] w-4 h-4 rounded-full bg-black"
        />

        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            UX Designer.<br />Product Designer.<br />Code-Driven Thinker.
          </motion.h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[3/4] bg-[#e5e5e5] overflow-hidden mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706824258534-c3740a1ae96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjE4MzA5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Shane Lai"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>
                  Shane Lai
                </h2>
                <p style={{ color: '#666666', fontSize: '14px', fontWeight: 400, lineHeight: '1.6', marginBottom: '8px' }}>
                  Shanshan Lai
                </p>
                <p style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                  UX Designer / Product Designer
                  <br />New York City, NY
                  <br />English / Mandarin
                  <br />shanshan.lai@pratt.edu
                </p>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-7 space-y-12"
            >
              <div>
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000', 
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  Background
                </h3>
                <div 
                  className="space-y-6"
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}
                >
                  <p>
                    A UX Designer who turns complex ideas into intuitive, human-centered 
                    experiences. My design approach balances system thinking and emotion—bridging 
                    technology and human needs through clarity, elegance, and a touch of 
                    code-driven precision.
                  </p>
                  <p>
                    Currently pursuing my Master's at Pratt Institute while exploring how 
                    thoughtful design can make AI and emerging technologies more accessible 
                    and meaningful in everyday life.
                  </p>
                </div>
              </div>

              <div>
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000', 
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  Education
                </h3>
                <div 
                  className="space-y-4"
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}
                >
                  <div>
                    <p style={{ color: '#000000', fontWeight: 500 }}>
                      Pratt Institute
                    </p>
                    <p>Master of Science in Information Experience Design</p>
                    <p style={{ fontSize: '14px', color: '#999999' }}>New York City, NY · Sep 2025 – Jun 2027</p>
                  </div>
                  <div>
                    <p style={{ color: '#000000', fontWeight: 500 }}>
                      Tsinghua University
                    </p>
                    <p>Bachelor of Fine Arts in Information Art Design</p>
                    <p style={{ fontSize: '14px', color: '#999999' }}>Beijing, China · Sep 2020 – Jun 2025 · GPA: 3.82/4.0</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000', 
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  Experience
                </h3>
                <div 
                  className="space-y-8"
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}
                >
                  <div>
                    <p style={{ color: '#000000', fontWeight: 500 }}>
                      Temu — Product Designer Intern
                    </p>
                    <p style={{ fontSize: '14px', color: '#999999', marginBottom: '8px' }}>Aug 2025 – Now</p>
                    <p>
                      Improved AI custom service user experience. Focused on interaction 
                      efficiency and service usability for AI chat platforms.
                    </p>
                  </div>
                  
                  <div>
                    <p style={{ color: '#000000', fontWeight: 500 }}>
                      Minimax — AI Product Intern
                    </p>
                    <p style={{ fontSize: '14px', color: '#999999', marginBottom: '8px' }}>Jan 2024 – Aug 2024</p>
                    <p>
                      Defined and developed AI voice companion features; optimized long-duration 
                      voice interactions, boosting feature retention by 23%. Refined gamified card 
                      collection mechanics, increasing daily active users by 12% within three months.
                    </p>
                  </div>
                  
                  <div>
                    <p style={{ color: '#000000', fontWeight: 500 }}>
                      CastChat — UX Designer Intern
                    </p>
                    <p style={{ fontSize: '14px', color: '#999999', marginBottom: '8px' }}>May 2024 – Sep 2024</p>
                    <p>
                      Conducted competitive research and proposed practical design solutions. 
                      Collaborated with product managers and UI designers to improve leaderboard 
                      interaction and user flow.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000', 
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  Design Philosophy
                </h3>
                <div 
                  className="space-y-6"
                  style={{ color: '#666666', fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}
                >
                  <p>
                    My approach centers on human-centered thinking and clarity over complexity. 
                    I believe great design is a hybrid discipline—merging systematic thinking 
                    with emotional intelligence, and balancing technical precision with intuitive simplicity.
                  </p>
                  <p>
                    I'm drawn to subtle motion, data-driven storytelling, and clean visual 
                    hierarchies that let content breathe. The work should feel precise, 
                    reflective, and quietly modern.
                  </p>
                </div>
              </div>

              <div>
                <h3 
                  className="mb-6"
                  style={{ 
                    color: '#000000', 
                    fontSize: '20px',
                    fontWeight: 500
                  }}
                >
                  Skills & Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                      style={{ 
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: 400
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* External Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 
              className="mb-12"
              style={{ 
                color: '#000000', 
                fontSize: '24px',
                fontWeight: 500
              }}
            >
              Connect
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {externalLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ opacity: 0.6 }}
                    className="group border border-black/10 p-8"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <Icon size={24} style={{ color: '#000000' }} />
                      <ExternalLink size={18} style={{ color: '#666666' }} />
                    </div>
                    <h4 
                      className="mb-2"
                      style={{ 
                        color: '#000000', 
                        fontSize: '18px',
                        fontWeight: 500
                      }}
                    >
                      {link.label}
                    </h4>
                    <p style={{ color: '#666666', fontSize: '14px', fontWeight: 400 }}>
                      {link.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

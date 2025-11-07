import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCard } from '../components/ProjectCard';
import { InkTrail } from '../components/InkTrail';

export function ProjectsPage() {
  const projects = [
    // Design Projects
    {
      title: 'FunFitLand (UFit)',
      description: 'VR fitness experience designed for accessibility and inclusive movement',
      image: 'https://images.unsplash.com/photo-1646496496941-3cd864ab1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjBnYW1lfGVufDF8fHx8MTc2MTkzNjI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['VR', 'Accessibility', 'Design'],
      type: 'design' as const,
      link: '/case-study/funfitland'
    },
    {
      title: 'Memory Navigator',
      description: 'AR cognitive training system for elderly users with real-time spatial guidance',
      image: 'https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUiUyMG1lbW9yeSUyMGNvZ25pdGl2ZXxlbnwxfHx8fDE3NjE5MzYyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AR', 'HoloLens', 'Design'],
      type: 'design' as const,
      link: '/case-study/memory-navigator'
    },
    {
      title: 'Huuuuu!',
      description: 'Mindful breathing companion that transforms breath into visual meditation',
      image: 'https://images.unsplash.com/photo-1643064723677-e0c0ab9d9e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBhcHB8ZW58MXx8fHwxNzYxODg4NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Wellness', 'Mobile', 'Design'],
      type: 'design' as const,
      link: '/case-study/huuuuu'
    },
    // Research Projects
    {
      title: 'NYC Tourism',
      description: 'Information architecture redesign improving content findability by 30%',
      image: 'https://images.unsplash.com/photo-1599530548461-89c6d97497b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOWUMlMjB0b3VyaXNtJTIwZ3VpZGV8ZW58MXx8fHwxNzYxOTM2MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['IA', 'UX Research', 'Testing'],
      type: 'research' as const,
      link: '/case-study/nyc-tourism'
    },
    {
      title: 'Talkie',
      description: 'AI voice companion for truck drivers designed through empathy-driven research',
      image: 'https://images.unsplash.com/photo-1579120632007-f493373daed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMGRyaXZlciUyMHZvaWNlfGVufDF8fHx8MTc2MTkzNjI3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AI', 'Voice', 'Research'],
      type: 'research' as const,
      link: '/case-study/talkie'
    },
    {
      title: 'FunFitLand (Research)',
      description: 'User research exploring accessibility barriers in VR fitness experiences',
      image: 'https://images.unsplash.com/photo-1758521960456-c876c573e0b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGZpdG5lc3MlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjE5MzQ5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['VR', 'Accessibility', 'Research'],
      type: 'research' as const,
      link: '/case-study/funfitland-research'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <InkTrail />

      <section className="pt-40 pb-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24 text-center"
            style={{ 
              color: '#000000', 
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}
          >
            Projects
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                type={project.type}
                link={project.link}
                index={index}
              />
            ))}
          </div>

          {/* Optional Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-32 mb-16 h-px bg-[#1D0024]/10"
            style={{ transformOrigin: 'left' }}
          />

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
            style={{ 
              color: '#666666', 
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.8'
            }}
          >
            Each project represents a careful balance between research insight and design craft, 
            exploring how technology can serve human needs with clarity and intention.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

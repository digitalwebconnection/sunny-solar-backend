import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Project } from '../../data/projectsData';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1d4ed8]/70 hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-white border border-white/20 shadow-sm">
            {project.category}
          </span>

          <span className="bg-linear-to-r from-[#1d4ed8] to-[#2563eb] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
            {project.systemSize}
          </span>
        </div>

        {/* Bottom Bar on Image (Location) */}
        <div className="absolute bottom-3 left-3.5 flex items-center text-xs">
          <span className="flex items-center gap-1.5 font-medium text-slate-200 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>{project.location}</span>
          </span>
        </div>
      </div>

      {/* Card Content - Clean & Focused */}
      <div className="p-5 sm:p-6 flex flex-col justify-between">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950 group-hover:text-[#1d4ed8] transition-colors duration-200 line-clamp-2 leading-snug">
          {project.title}
        </h3>

        {/* Bottom CTA Row */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#1d4ed8] transition-colors">
          <span>View Full Project Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#1d4ed8]" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

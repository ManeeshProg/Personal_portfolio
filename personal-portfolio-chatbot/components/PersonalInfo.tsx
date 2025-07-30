
import React from 'react';
import { PERSONAL_DATA } from '../constants';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-brand-surface rounded-lg p-6 shadow-lg mb-6">
        <h3 className="text-xl font-bold text-brand-primary mb-3">{title}</h3>
        {children}
    </div>
);

const PersonalInfo: React.FC = () => {
    return (
        <div className="p-8 h-full overflow-y-auto bg-black/20">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">{PERSONAL_DATA.name}</h1>
                <h2 className="text-lg text-brand-secondary">{PERSONAL_DATA.title}</h2>
            </div>

            <InfoCard title="About Me">
                <p className="text-brand-text-secondary leading-relaxed">{PERSONAL_DATA.bio}</p>
            </InfoCard>

            <InfoCard title="Education">
                <div className="text-brand-text-secondary">
                    <h4 className="font-semibold text-brand-text">{PERSONAL_DATA.education.degree}</h4>
                    <p>{PERSONAL_DATA.education.institution}</p>
                    <p className="text-sm">CGPA: {PERSONAL_DATA.education.cgpa} | {PERSONAL_DATA.education.duration}</p>
                </div>
            </InfoCard>

            <InfoCard title="Experience">
                <div className="space-y-4">
                    {PERSONAL_DATA.experience.map(exp => (
                        <div key={exp.company}>
                            <h4 className="font-semibold text-brand-text">{exp.role}</h4>
                            <p className="text-brand-secondary">{exp.company} | {exp.duration}</p>
                            <p className="text-brand-text-secondary text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </InfoCard>

            <InfoCard title="Skills">
                <div className="flex flex-wrap gap-2">
                    {PERSONAL_DATA.skills.map(skill => (
                        <span key={skill} className="bg-brand-surface border border-brand-primary/50 text-brand-primary text-sm font-medium px-3 py-1 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </InfoCard>

            <InfoCard title="Featured Projects">
                <div className="space-y-4">
                    {PERSONAL_DATA.projects.map(project => (
                        <div key={project.name}>
                            <h4 className="font-semibold text-brand-text">{project.name} <span className="text-sm text-brand-text-secondary">({project.year})</span></h4>
                            <p className="text-brand-text-secondary text-sm">{project.description}</p>
                        </div>
                    ))}
                </div>
            </InfoCard>
            
            <InfoCard title="Contact">
                <ul className="space-y-2 text-brand-text-secondary">
                    <li><strong>Email:</strong> {PERSONAL_DATA.contact.email}</li>
                    <li><strong>Phone:</strong> {PERSONAL_DATA.contact.phone}</li>
                    <li><strong>LinkedIn:</strong> <a href={PERSONAL_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-secondary">Profile</a></li>
                    <li><strong>GitHub:</strong> <a href={PERSONAL_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-secondary">Profile</a></li>
                </ul>
            </InfoCard>

        </div>
    );
};

export default PersonalInfo;

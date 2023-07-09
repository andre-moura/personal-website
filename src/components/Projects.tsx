import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

interface Project {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  language?: string;
  languageColor?: string;
  stars: string;
  forks: number;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gh-pinned-repos.egoist.dev', {
          params: {
            username: 'andre-moura',
          },
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchData();
  }, []);

  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <div className="projects" id='projects'>
      <h2>Pinned Projects</h2>
      <div className="row">
        {memoizedProjects.map((project) => (
          <div className="col-md-4" key={`${project.owner}-${project.repo}`}>
            <div className="card bg-dark text-white mb-3">
              <img src={project.image} className="card-img-top" alt={project.repo} />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem', fill: 'currentcolor' }}>
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
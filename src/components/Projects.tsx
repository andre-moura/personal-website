import React, { useEffect, useState } from "react";
import GithubImage from '../assets/images/github-mark-white.svg';
import axios from "axios";

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

// Define the type for the data returned by the GitHub API
interface GitHubRepo {
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
  stargazers_count: string;
  forks_count: number;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiKey: string = (import.meta.env.VITE_GITHUB_TOKEN as string);
  
  const pinnedRepos = [
    "jwt",
    "pomodoro",
    "login-google-auth",
    "color-picker-extension",
    "personal-website",
    "weather-app",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<GitHubRepo[]>(
          "https://api.github.com/users/andre-moura/repos",
          {
            headers: {
              Authorization: `token ${apiKey}`,
              "User-Agent": `andre-moura`,
              Accept: `application/vnd.github+json,application/vnd.github.diff`,
            },
          }
        );

        // Correctly map the GitHubRepo objects to Project interface
        const filteredProjects = response.data
          .filter((repo) => pinnedRepos.includes(repo.name))
          .map(
            (repo: GitHubRepo): Project => ({
              owner: repo.owner.login,
              repo: repo.name,
              link: repo.html_url,
              description: repo.description,
              image: repo.owner.avatar_url,
              language: repo.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              // If your Project interface requires 'languageColor', you need to add it here too
            })
          );

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        setError("Failed to fetch projects. Please try again later.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className="projects" id="projects">
      <h2>Pinned Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div
            className="col-md-4 card-box"
            key={`${project.owner}-${project.repo}`}
          >
            <div className="card bg-dark text-white mb-3">
              <div className="image-box">
                <img
                src={GithubImage}
                className="card-img-top"
                alt={project.repo}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.repo}</h5>{" "}
                {/* Nome do Repositório */}
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Stars:</strong> {project.stars}{" "}
                    {/* Quantidade de Estrelas */}
                  </div>
                  <div>
                    <strong>Forks:</strong> {project.forks}{" "}
                    {/* Quantidade de Forks */}
                  </div>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        fill: "currentcolor",
                      }}
                    >
                      <>
                        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                      </>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

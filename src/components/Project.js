import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            slug,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-primary min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-orange flex justify-center cursive">
          My Projects
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12">
          Below you can find all of my work
        </h2>
        <section className="grid grid-cols-2 gap-8">
          <article className="relative rounded-lg shadow-xl bg-dark p-16">
            <h3 className="text-white text-3xl font-bold mb-2 hover:text-orange">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreffer"
              >
                {project.title}
              </a>
            </h3>
            <div className="text-white text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>: {project.place}
              </span>
              <span>
                <strong className="font-bold">Type</strong>:{" "}
                {project.projectType}
              </span>
              <p className="my-6 text-lg text-white leading-relaxed">
                {project.description}
              </p>
              <span></span>
              <Link>
                <span></span>
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

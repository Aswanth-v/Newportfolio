import React from 'react';
import './Hero.css';
import { TagCloud } from "@frank-mayer/react-tag-cloud";

function Hero({who}) {
  return (
    <div className='hero-overlay'>
      <div>
      <p className='para'>0.1</p>
      <h1 className='intro-head'>Who I Am</h1>
      <p className='who-iam-para'>
        {who}
      </p>
      <a style={{color:'white'}}>Let's get going, amigo!</a>
      </div>
      <div className="hero-textsphere">
                <TagCloud
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                    })}
                    onClick={(tag) => alert(tag)}
                    onClickOptions={{ passive: true }}
                >
                    {[
                         "HTML", "CSS", "JavaScript", "React", "Node.js", 
                         "MongoDB", "Express", "Redux", "Next.js", "TailwindCSS",
                         "SQL", "TypeScript", "Angular", "Java", "C++", 
                         "Three.js", "Python", "Django", "GraphQL", "Firebase", 
                         "AWS", "Docker", "PostgreSQL", "MySQL", "Vue.js", 
                         "Flutter", "PHP", "Swift", "Kotlin", "Figma", 
                         "Jenkins", "JIRA", "Bootstrap", "Gatsby"
                    ]}
                </TagCloud>
            </div>
    </div>
  );
}

export default Hero;

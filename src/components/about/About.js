import React from 'react';
import Footer from '../app/Footer';

const About = () => {

  const story = [
    {
      id: 1,
      text: "With a diverse professional background spanning a decade in customer service and two years in management, my journey into the world of full-stack web development has been marked by passion, perseverance, and a commitment to continuous learning. In 2022, I made a pivotal decision to transition my career and enrolled in Full Stack Academy, embarking on a transformative journey that has since defined my professional trajectory."
    },
    {
      id: 2,
      text: "Within a year of graduating from Full Stack Academy, I immersed myself in the art and science of web development, rapidly acquiring the skills and knowledge necessary to thrive in this dynamic field. I was driven by an insatiable curiosity and an unwavering work ethic, which enabled me to deploy over 40 websites and actively contribute to the open-source community on GitHub. This commitment to open-source collaboration further honed my coding abilities and fostered a spirit of collaboration."
    },
    {
      id: 3,
      text: "My dedication to practical experience led me to pursue internships with leading tech companies. At Seminaut Inc, I had the privilege of working on their Guild Gaming project, where I honed my development skills in a real-world setting. While I was still working for Seminaut Inc, I joined DecOps as an intern, contributing to their SimplyFi project, which deepened my understanding of tech work cycles and project management. These experiences proved invaluable, and I was thrilled to be invited back to Seminaut as a Junior Software Engineer after successfully completing my internship."
    },
    {
      id: 4,
      text: "My journey from customer service to full-stack web development has been marked by a relentless pursuit of excellence, a passion for problem-solving, and a dedication to teamwork. I am excited to continue leveraging my diverse skill set, technical acumen, and collaborative mindset to make meaningful contributions to the ever-evolving world of web development. As I move forward in my career, I remain committed to pushing the boundaries of innovation and delivering exceptional digital solutions."
    }
  ]

  return (
    <div className="mx-10">
      <br />
      <br />
      <p className='text-center text-2xl underline'>My Story</p>
      <br />
      <p className="max-w-[600px] mx-auto">
        {story.map((storyObj) => {
          return (
            <>
              <span key={storyObj.id} className='block mb-4'>{storyObj.text}</span>
            </>
          )
        })}

      </p>

      <br />
      <br />

      <Footer />
    </div>
  )
}

export default About;
import React from 'react';
import { Fade } from "react-awesome-reveal";

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', img: 'Html.png' },
    { name: 'CSS', img: 'Css.png' },
    { name: 'JavaScript', img: 'JavaScript-01.png' },
    { name: 'React', img: 'logo192.png' },
    { name: 'Node.js', img: 'Node-JS-01.png' },
    { name: 'Express', img: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
    { name: 'DynamoDB', img: 'https://isagebrum.com/images/technology/dynamo_db-image.svg' },
    { name: 'MongoDB', img: 'pngegg.png' },
    { name: 'PostgreSQL', img: 'pngwing.com (4).png' },
    { name: 'AWS', img: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png' },
    { name: 'Kotlin', img: 'kotlin-2-logo-png-transparent.png' },
    { name: 'Jetpack Compose', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5wggXFTVLF0t58SuNrl4mii6x96w0CN3ef84eLfYUDImc4GBwxv-vWGufrmiDhSHXb6_9_PQz_sh8hdbt5oruCKFNxCl2QUdhzzUAZNNQVIiIZzXq58zkwtfohLsOAUqxArZ_XXYw-No/s1600/JetpackCompose_logo.png' },
    { name: 'NPM', img: 'Npm-01.png' },
    { name: 'Git', img: 'https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png' }
  ];

  return (
    <Fade cascade>
      <div className='abt'>
        <h1>Skills</h1>
        <div className='skills'>
          {skills.map((skill, index) => (
            <Fade key={index} delay={index * 50}>
              <img
                src={skill.img}
                className='skills-img'
                alt={`${skill.name} skill icon`}
                loading="lazy"
              />
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default SkillsSection;

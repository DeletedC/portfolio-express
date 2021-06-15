import ProjectDiv from './ProjectDiv';
import imgStudentTracker from '../img/projects/Screenshot_StudentTracker.png';
import imgGetHub from '../img/projects/Screenshot_GetHub_Jon.jpeg';
import imgIntonation from '../img/projects/Screenshot_Intonation.png';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center p-6'>Projects</h1>

      <ProjectDiv name='Project Name Placeholder' 
      tech={['javascript', 'linux', 'react', 'mongoDB']} 
      image={imgStudentTracker}>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </ProjectDiv>
      <ProjectDiv name='Project Name Placeholder'
      tech={['javascript', 'react']}
      image={imgGetHub} 
      direction='flex-row-reverse'>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </ProjectDiv>
      <ProjectDiv name='Project Name Placeholder' 
      tech={['python', 'mongoDB']}
      image={imgIntonation}>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </ProjectDiv>
    </div>
  );
}

export default Projects;
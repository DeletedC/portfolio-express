import ProjectDiv from './ProjectDiv';
// import imgStudentTracker from '../../public/img/projects/Screenshot_StudentTracker.png';
// import imgGetHub from '../../public/img/projects/Screenshot_GetHub_Jon.jpeg';
// import imgIntonation from '../../public/img/projects/Screenshot_Intonation.png';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center pt-6'>Projects</h1>
      
      <div className=''>
        <ProjectDiv name='Project Name Placeholder' 
        tech={['javascript', 'linux', 'react', 'mongoDB']} 
        image={'/img/projects/Screenshot_StudentTracker.png'}>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </ProjectDiv>
        <ProjectDiv name='Project Name Placeholder'
        tech={['javascript', 'react']}
        image={"/img/projects/Screenshot_GetHub_Jon.jpeg"} 
        direction='flex-row-reverse'>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </ProjectDiv>
        <ProjectDiv name='Project Name Placeholder' 
        tech={['python', 'mongoDB']}
        image={'/img/projects/Screenshot_Intonation.png'}>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          <p>Description of the project, lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </ProjectDiv>
      </div>
    </div>
  );
}

export default Projects;
import ProjectDiv from './ProjectDiv';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center p-6'>Projects</h1>

      <ProjectDiv name='Project Name Placeholder' tech={['javascript', 'linux']}>
        <p>Description of the project, lorem ipsum</p>
      </ProjectDiv>
      <ProjectDiv name='Project Name Placeholder'tech={['javascript', 'react']}>
        <p>Description of the project, lorem ipsum</p>
      </ProjectDiv>
      <ProjectDiv name='Project Name Placeholder' tech={['python', 'mongoDB']}>
        <p>Description of the project, lorem ipsum</p>
      </ProjectDiv>
    </div>
  );
}

export default Projects;
import ProjectDiv from './ProjectDiv';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center p-6'>Projects</h1>

      <ProjectDiv name='Project Name Placeholder' tech={['javascript', 'linux']} />
      <ProjectDiv name='Project Name Placeholder'tech={['javascript', 'react']} />
      <ProjectDiv name='Project Name Placeholder' tech={['python', 'mongoDB']} />
    </div>
  );
}

export default Projects;
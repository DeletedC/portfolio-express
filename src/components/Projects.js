import ProjectDiv from './ProjectDiv';
// import imgStudentTracker from '../../public/img/projects/Screenshot_StudentTracker.png';
// import imgGetHub from '../../public/img/projects/Screenshot_GetHub_Jon.jpeg';
// import imgIntonation from '../../public/img/projects/Screenshot_Intonation.png';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center pt-6'>Projects</h1>
      
      <div className=''>
        <ProjectDiv name='Piano Studio Student Tracker' 
        tech={['mongoDB', 'express', 'react', 'node', 'heroku']} 
        image={'/img/projects/Screenshot_StudentTracker.png'} 
        links={{
          liveSite: 'https://curtiswoods.herokuapp.com/', 
          repo: {
            frontEnd: 'https://github.com/DeletedC/project_2'
        }}}>
          <p>I created this simple, yet specifically targeted app to be able to manage students.</p>
          <p>Using JSX for the front end and MongoDB for the database, students can be added and removed from the roster, notes can be created, updated, and removed.</p> 
          <p>Lastly, you can update or remove the lesson book that they’re currently working in.</p>
        </ProjectDiv>
        <ProjectDiv name='GetHub'
        tech={['react', 'node']}
        image={"/img/projects/Screenshot_GetHub_Jon.jpeg"} 
        links={{
          liveSite: 'https://expo.dev/@jonrhymes/getHub', 
          repo: {
            frontEnd: 'https://github.com/jonrhymes/gethub', 
            backEnd: 'https://github.com/DeletedC/getHub_api'
        }}} 
        direction='flex-row-reverse'>
          <p>DeveloperWeek Hackathon team project designed to browse and search multiple video services at the same time.</p> 
          <p>I worked on the Amazon Prime portion and back end API to pull the data. The Amazon Prime portion was working, however it was cut for time.</p>
          <p>Currently, the project uses OMDB as a test search API. I also removed a few bugs that would crash the app on android.</p>
        </ProjectDiv>
        <ProjectDiv name='Intonation' 
        tech={['mongoDB', 'express', 'react']}
        image={'/img/projects/Screenshot_Intonation.png'}
        links={{
          repo: {
            frontEnd: 'https://github.com/DeletedC/intonation',
            backEnd: 'https://github.com/DeletedC/intonation-back-end/'
        }}}>
          <p>A richer version of my student tracking app, using server-side rendering.</p>
          <p>Using NextJs, it will include a roster, admin editing capabilities, teacher and student roles, and more thorough note and lesson tracking.</p>
          <p>It currently has adding and deleting capabilities.</p>
        </ProjectDiv>
      </div>
    </div>
  );
}

export default Projects;
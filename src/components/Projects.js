import ProjectDiv from './ProjectDiv';
// import imgStudentTracker from '../../public/img/projects/Screenshot_StudentTracker.png';
// import imgGetHub from '../../public/img/projects/Screenshot_GetHub_Jon.jpeg';
// import imgIntonation from '../../public/img/projects/Screenshot_Intonation.png';

const Projects = () => {
  return (
    <div>
      <h1 className='text-center pt-6'>Projects</h1>
      
      <div className=''>
        <ProjectDiv name='Arietta'
        color={'bg-blue-400'} 
        tech={['mongoDB', 'express', 'react', 'heroku', 'bootstrap']} 
        image={'/img/projects/Screenshot_Arietta_New.jpg'}
        links={{
          liveSite: 'https://curtiswoods.herokuapp.com/', 
          repo: {
            frontEnd: 'https://github.com/DeletedC/project_2'
        }}}>
          <p>I created this studio roster web app to be able to manage students.</p>
          <p>It uses Express-React-Views for server side rendering and Bootstrap for styling, while seamlessly integrating cloud MongoDB Atlas, which improved SEO, modernized styling, and created a snappy feel for the end user.</p>
        </ProjectDiv>
        <ProjectDiv name='GetHub'
        color={'bg-blue-500'} 
        tech={['react', 'node']}
        image={"/img/projects/Screenshot_GetHub_Jon.jpeg"} 
        links={{
          liveSite: 'https://bit.ly/gethub-app', 
          repo: {
            frontEnd: 'https://github.com/jonrhymes/gethub', 
            backEnd: 'https://github.com/DeletedC/getHub_api'
        }}} 
        direction='flex-row-reverse'>
          <p>DeveloperWeek Hackathon team project designed to search the OMDB API for movies.</p> 
          <p>I created the back end Express server, custom RESTful API, tested the routes with Postman, and debugged the app.</p>
          <p>The result is a secure API and responsive search bar and app.</p>
        </ProjectDiv>
        <ProjectDiv name='CurtisJWoods.com' 
        tech={['nextjs', 'react', 'tailwindIcon']}
        image={'/img/projects/Screenshot_CurtisJWoods_Portfolio.jpg'}
        links={{
          repo: {
            frontEnd: 'https://github.com/DeletedC/portfolio-react',
        }}}>
          <p>This very website!</p>
          <p>Upgraded from plain HTML to NextJs, a React framework, styled with the modern Tailwind CSS and a custom-coded SVG selector that displays every SVG icon on the site.</p>
          <p>This creates a modern feel, improved visual flow, and a very smooth user experience.</p>
        </ProjectDiv>
        <ProjectDiv name='Intonation (Upcoming Project)'
        color={'bg-blue-500'} 
        tech={['mongoDB', 'express', 'react']}
        image={'/img/projects/Screenshot_Intonation.png'}
        links={{
          repo: {
            frontEnd: 'https://github.com/DeletedC/intonation',
            backEnd: 'https://github.com/DeletedC/intonation-back-end/'
        }}}
        direction='flex-row-reverse'>
          <p>A richer version of my student tracking app, using server side rendering.</p>
          <p>Using NextJs, it will include a roster, admin editing capabilities, teacher and student roles, and more thorough note and lesson tracking.</p>
          <p>It currently has adding and deleting capabilities.</p>
        </ProjectDiv>
      </div>
    </div>
  );
}

export default Projects;
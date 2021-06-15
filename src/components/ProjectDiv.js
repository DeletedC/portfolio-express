import svgPicker from '../js/svgPicker'


const ProjectDiv = (props) => {
  return (
    
    // MAIN CONTAINER
    <div className='flex flex-col items-center min-w-full px-12 py-12'>
      <div className={`flex ${props.direction || 'flex-row'}`}>
        
        {/* Project Name and Description */}
        <div className='w-2/4'>
            <h1 className='pb-4'>{props.name}</h1>
            <p>Built With:</p>

            {/* DevIcons will go here */}
            <div className='flex flex-row flex-nowrap'>
            {props.tech.map((item) => {
                return svgPicker(item);
            })} 
            </div>

          {/* Project Description */}
          <div className='text-2xl leading-relaxed'>
            {props.children}
          </div>
        </div>

        {/* Project Images */}
            <img className='object-contain w-2/4' src='img/Screenshot_StudentTracker.png' />

      </div>

    </div>
  );
}

export default ProjectDiv;
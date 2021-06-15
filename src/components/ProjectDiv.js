import svgPicker from '../js/svgPicker'


const ProjectDiv = (props) => {
  return (
    
    // MAIN CONTAINER
    <div className='flex flex-col items-center min-w-full py-12'>
      <div className={`flex ${props.direction || 'flex-row'} px-12`}>
        
        {/* Project Name and Description */}
        <div className={`flex flex-col w-2/4 ${props.direction? 'items-end': 'items-start'}`}>
            <h1 className='pb-4'>{props.name}</h1>
            <p className='text-xl pb-2'>Built With:</p>

            {/* DevIcons will go here */}
            <div className={`flex flex-row flex-nowrap ${props.direction? 'justify-end': 'justify-start'}`}>
            {props.tech.map((item) => {
                return svgPicker(item);
            })} 
            </div>

          {/* Project Description */}
          <div className={`flex flex-col ${props.direction? 'justify-end': 'justify-start'} text-2xl leading-relaxed py-12`}>
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
import svgPicker from '../js/svgPicker'


const ProjectDiv = (props) => {
  return (
    
    // DESKTOP CONTAINER
    <div className='flex flex-col items-center min-w-full py-12 pb-24'>
      <div className={`hidden md:flex ${props.direction || 'flex-row'} px-12`}>
        
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
          <div className={`flex flex-col ${props.direction? 'justify-end pl-20': 'justify-start pr-20'} text-2xl leading-relaxed py-12`}>
            {props.children}
          </div>
        </div>

        {/* Project Images */}
        <img className='object-contain w-2/4 rounded-2xl' src={props.image} alt='Project Screenshot'/>

      </div>

      {/* MOBILE CONTAINER */}
      <div className='md:hidden'>
        {/* Project Name and Description */}
        <div className=''>
          <h1 className='pb-4'>{props.name}</h1>

          {/* Project Images */}
          <img className='object-contain w-2/4 rounded-2xl' src={props.image} alt='Project Screenshot'/>

          <p className='text-xl pb-2'>Built With:</p>

          {/* DevIcons will go here */}
          <div className={`flex flex-row flex-nowrap`}>
          {props.tech.map((item) => {
              return svgPicker(item);
          })} 
          </div>

          {/* Project Description */}
          <div className={`flex flex-col ${props.direction? 'justify-end pl-20': 'justify-start pr-20'} text-2xl leading-relaxed py-12`}>
            {props.children}
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProjectDiv;
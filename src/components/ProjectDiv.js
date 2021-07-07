import svgPicker from '../pages/api/svgPicker';


const ProjectDiv = (props) => {
  return (
    <div className='flex flex-col items-center min-w-full py-12 pb-24'>

      {/* 
      ////////////////////////////
      DESKTOP CONTAINER 
      ///////////////////////////
      */}
      <div className={`hidden md:flex ${props.direction || 'flex-row'} px-12`}>
        
        {/* Project Name and Description */}
        <div className={`flex flex-col w-2/4 ${props.direction? 'items-end': 'items-start'}`}>
            <h1 className='pb-4'>{props.name}</h1>
            <p className='text-xl pb-2'>Built With:</p>

            {/* DevIcons will go here */}
            <div className={`flex flex-row flex-nowrap space-x-6 ${props.direction? 'justify-end': 'justify-start'}`}>
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

      {/* 
      ////////////////////////////
      MOBILE CONTAINER 
      ///////////////////////////
      */}
      <div className='md:hidden'>
        {/* Project Name and Description */}
        <div className=''>
          <h1 className='pb-4 text-center'>{props.name}</h1>

          {/* Project Images */}
          <img className='object-contain pb-2' src={props.image} alt='Project Screenshot'/>

          {/* DevIcons will go here */}
          <div className={`inline-flex justify-center py-8 px-12`}>
          {props.tech.map((item) => {
              return svgPicker(item);
          })} 
          </div>

          {/* Project Description */}
          <div className={`text-2xl leading-relaxed py-4 px-4`}>
            {props.children}
          </div>
        </div>


      </div>
    </div>
  );
}

export default ProjectDiv;
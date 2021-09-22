import svgPicker from '../pages/api/svgPicker';

const Skills = () => {
  return (
    <div className=''>
      <h1 className='text-center p-6'>Skills</h1>

      {/* Icons Container */}
      <div className='flex flex-wrap min-h-full py-6 px-6 md:px-0'>

        {/* First Row */}
        <div className='flex justify-evenly'>
          
          {/* JavaScript */}
          {svgPicker('javascript')}
          
          {/* React */}
          {svgPicker('react')}

          {/* HTML */}
          {svgPicker('html')}

          {/* CSS */}
          {svgPicker('css')}

        </div>
        {/* First Row End */}

        {/* Second Row */}
        <div className='flex justify-evenly'>
          
          {/* Node */}
          {svgPicker('node')}

          {/* Express */}
          {svgPicker('express')}

          {/* Git */}
          {svgPicker('mongoDB')}

          {/* Linux */}
          {svgPicker('git')}

        </div>
        {/* Second Row End */}

        {/* Third Row */}
        <div className='flex justify-evenly'>

          {/* Heroku */}
          {svgPicker('heroku')}
          
          {/* Netlify */}
          {svgPicker('netlify')}
          
          {/* Python */}
          {svgPicker('python')}

          {/* PostgreSQL */}
          {svgPicker('postgres')}
        </div>
        {/* Third Row End */}

      </div>
    </div>
  );
}

export default Skills;
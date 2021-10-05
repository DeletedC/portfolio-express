import svgPicker from '../pages/api/svgPicker';

// To hold the extra Tailwind utilities and save on typing
const params = 'px-2 py-10 lg:px-10 xl:px-16';

const Skills = () => {
  return (
    <div className=''>
      <h1 className='text-center p-6'>Skills</h1>

      {/* Icons Container */}
      <div className='justify-center m-auto w-4/5 px-4 md:pb-10'>
        <table className='md:min-h-screen'>
          <tbody>
            <tr>
              <td>{svgPicker('javascript', params)}</td>
              <td>{svgPicker('react', params)}</td>
              <td>{svgPicker('html', params)}</td>
              <td>{svgPicker('css', params)}</td>
            </tr>
            <tr>
              <td>{svgPicker('pythonIcon', params)}</td>
              <td>{svgPicker('node', params)}</td>
              <td>{svgPicker('express', params)}</td>
              <td>{svgPicker('git', params)}</td>
            </tr>
            <tr>
              <td>{svgPicker('heroku', params)}</td>
              <td>{svgPicker('netlify', params)}</td>
              <td>{svgPicker('mongoDB', params)}</td>
              <td>{svgPicker('postgres', params)}</td>
            </tr>
            <tr>
              <td>{svgPicker('bootstrap', params)}</td>
              <td>{svgPicker('nextjs', params)}</td>
              <td>{svgPicker('tailwindFull', params)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Skills;
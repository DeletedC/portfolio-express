import svgPicker from "../pages/api/svgPicker";

const Header = () => {
  return (
    <div className='w-full bg-fixed bg-top bg-cover bg-no-repeat bg-hero-portrait md:bg-hero-landscape'>

      {/* 
      ////////////////////////////
      DESKTOP CONTAINER 
      ///////////////////////////
      */}

      <div className="hidden md:flex">
        {/* Info Container */}
        <div className='md:bg-blue-100 md:bg-opacity-80 rounded-r-2xl md:w-1/2 md:h-1/2 flex flex-col md:my-48 md:mr-12 p-12 pl-14 content-center justify-center'>
          
          {/* Name and Title */}
          <div className=''>
            <h1 className='text-4xl sm:text-7xl whitespace-nowrap pb-4'>Curtis J. Woods II</h1>
            <h2 className=''>3D Artist turned Software Developer</h2>
          </div>

          {/* Contact and Location Info */}
          <div className='relative flex flex-col h-full justify-end text-xl leading-relaxed'>
            <p>Greater Pittsburgh Area, PA</p>
            {/* <a href="mailto: CurtisJWoodsII@gmail.com">CurtisJWoodsII@gmail.com</a> */}
            <div className='inline-flex md:pt-12 space-x-16'>
            <a className='flex justify-left transform hover:scale-110' 
              href="https://www.linkedin.com/in/curtisjwoods" 
              target='_blank' rel="noreferrer">{svgPicker('linkedIn', 'pr-10')}</a>
            <a className='flex justify-left transform hover:scale-110' href="mailto: CurtisJWoodsII@gmail.com">{svgPicker('email', 'pr-10 pt-2')}</a>
            <a className='flex justify-left transform hover:scale-110' href="tel:724-777-8479">{svgPicker('phone', 'pr-10')}</a>
            {/* Button for Resume */}
              <button className='bg-green-600 hover:bg-green-400 transform hover:scale-110 rounded-lg p-5 px-20'
                onClick={() => window.open("./docs/Curtis Woods - GA Resume.pdf", "_blank", ['noopener', 'noreferrer'])}
              >Résumé</button> 
            </div>
          </div>
            

          {/* CONTACT LINKS */}
          
        </div>
      </div>

      {/* 
      ////////////////////////////
      MOBILE CONTAINER 
      ///////////////////////////
      */}

      <div>
        {/* Blue background */}
        <div className='md:hidden bg-blue-100 bg-opacity-80 flex flex-col p-4 content-center justify-center text-center'>
          
          {/* Name and Title */}
          <div className=''>
            <h1 className='text-4xl sm:text-7xl whitespace-nowrap pb-4'>Curtis J. Woods II</h1>
            <h2 className='text-xl'>3D Artist turned Software Developer</h2>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Header;
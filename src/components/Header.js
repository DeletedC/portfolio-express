const Header = () => {
  return (
    <div className='w-full bg-fixed bg-top bg-cover bg-no-repeat bg-hero-portrait md:bg-hero-landscape'>

      {/* Info Container */}
      <div className='md:bg-blue-100 md:bg-opacity-80 rounded-2xl md:w-1/2 md:h-1/2 flex flex-col md:my-48 md:mx-12 p-12 content-center justify-center'>
        
        {/* Name and Title */}
        <div className=''>
          <h1 className='text-4xl sm:text-7xl whitespace-nowrap pb-4'>Curtis J. Woods II</h1>
          <h2 className=''>3D Artist turned Software Developer</h2>
        </div>

        {/* Contact and Location Info */}
        <div className='relative flex flex-col h-full justify-end text-xl leading-relaxed'>
          <p>Pittsburgh, PA</p>
          <a href="mailto: CurtisJWoodsII@gmail.com">CurtisJWoodsII@gmail.com</a>
          <a href="tel:724-777-8479">724-777-8479</a>

          {/* Button for Resume */}
          <button className='absolute right-0 bg-green-600 rounded-lg p-5 px-20'
            onClick={() => window.open("./docs/Curtis Woods - GA Resume.pdf", "_blank")}
          >Resumé</button> 
        </div>
      </div>
    </div>
  );
}

export default Header;
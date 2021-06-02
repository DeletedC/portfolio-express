const Header = () => {
  return (
    <div className='w-full bg-fixed bg-top bg-cover bg-no-repeat bg-hero-portrait md:bg-hero-landscape'>
      <div className='bg-blue-100 bg-opacity-80 rounded-2xl md:w-1/2 md:h-1/2 flex flex-col my-24 mx-12 p-12 content-center justify-center'>
        <h1 className='text-4xl sm:text-7xl whitespace-nowrap'>Curtis J. Woods II</h1>
        <h2 className=''>3D Artist turned Software Developer</h2>
      </div>
    </div>
  );
}

export default Header;
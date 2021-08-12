const About = () => {
  return (
    <div>
      <h1 className='text-center p-6'>About</h1>
      <div className='container'>
        <div className='flex px-8 md:mx-20 mb-20 justify-center rounded-xl bg-blue-100'>
        {/* <img src='/img/Headshot_20210524_Landscape.jpg' /> */}
        <div className='py-6 md:p-10 text-xl tracking-wide md:leading-relaxed'>
            <p className='pb-10'>{"Hello! I'm Curtis. Welcome to my portfolio! I'm a full-stack software engineer and artist. I’ve dabbled in game design, been a salesman and entrepreneur, and now I’m pouring my soul into software development."}</p> 
            <p className='pb-10'>{"Ever-upbeat and hungry for growth, I'm continuously learning more about the field, studying data structures, best practices, and solidifying what I know through exploration, research, and ongoing projects."}</p>
            <p className='pb-10'>{"I'm looking to use all that I know to refine my skills and become a happy, successful, and productive part of your team."}</p>
        </div>
      </div>
      </div>
      

      
    </div>
  );
}

export default About;
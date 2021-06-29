const About = () => {
  return (
    <div>
      <h1 className='text-center p-6'>About</h1>
      <div className='flex px-8 md:mx-12 justify-center rounded-xl bg-red-200'>
        {/* <img src='/img/Headshot_20210524_Landscape.jpg' /> */}
        <div className='py-6 md:p-10 text-xl tracking-wide md:leading-relaxed'>
            <p className='pb-10'>Hello! I'm Curtis. Welcome to my portfolio! I'm a full-stack software engineer with a background in art and I use that background to craft solid websites with a pleasant user experience.</p> 
            <p className='pb-10'>With a passion and hunger for improvement, I'm continuously learning new technologies and solidifying what I know through exploration, research, and ongoing projects. I use my skills to enable people to present themselves and their brand at their best to the world through the web.</p>
        </div>
      </div>

      
    </div>
  );
}

export default About;
const ButtonLinks = (props) => {
    console.log(props)
  return (
    <div class="inline-flex">
    {props.data.liveSite? 
      <button class="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.liveSite, "_blank")}>
        Live Site
      </button>
    : ''
    }

    {props.data.repo.frontEnd && !props.data.repo.backEnd?
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.frontEnd, "_blank")}>
        Repo
      </button>
    : props.data.repo.frontEnd && props.data.repo.backEnd?

    <div>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.frontEnd, "_blank")}>
        Front End Repo
      </button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.backEnd, "_blank")}>
        Back End Repo
      </button>
    </div>

    : ''
    } 
    </div>
  );
    
}

export default ButtonLinks;
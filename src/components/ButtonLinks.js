const ButtonLinks = (props) => {
  return (
    <div className="inline-flex">
    {props.data.liveSite? 
      <button className="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.liveSite, "_blank", ['noopener', 'noreferrer'])}>
        Live Site
      </button>
    : ''
    }

    {props.data.repo.frontEnd && !props.data.repo.backEnd?
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.frontEnd, "_blank", ['noopener', 'noreferrer'])}>
        Repo
      </button>
    : props.data.repo.frontEnd && props.data.repo.backEnd?

    <div>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.frontEnd, "_blank", ['noopener', 'noreferrer'])}>
        Front End Repo
      </button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 mr-4 rounded"
      onClick={() => window.open(props.data.repo.backEnd, "_blank", ['noopener', 'noreferrer'])}>
        Back End Repo
      </button>
    </div>

    : ''
    } 
    </div>
  );
    
}

export default ButtonLinks;
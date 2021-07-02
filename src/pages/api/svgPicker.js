import DevIcon from '../../components/DevIcon';
// import { ReactComponent as JsSVG} from '../../img/svg/javascript.svg';
// import { ReactComponent as ReactSVG} from '../../img/svg/react.svg';
// import { ReactComponent as ExpressSVG} from '../../img/svg/express.svg';
// import { ReactComponent as GitSVG} from '../../img/svg/git.svg';
// import { ReactComponent as LinuxSVG} from '../../img/svg/linux.svg';
// import { ReactComponent as MongoSVG} from '../../img/svg/mongo.svg';
// import { ReactComponent as NodeSVG} from '../../img/svg/node.svg';
// import { ReactComponent as PostgresSVG} from '../../img/svg/postgres.svg';
// import { ReactComponent as PythonSVG} from '../../img/svg/python.svg';
// import { ReactComponent as GmailSVG } from '../../img/svg/gmail_2020.svg';
// import { ReactComponent as PhoneSVG } from '../../img/svg/phone.svg';


const svgPicker = (item) => {
    switch (item) {
        case "javascript":
            return (
            <DevIcon>
                <img src='/img/svg/javascript.svg' />
            </DevIcon>
            );
        // case "react":
        //     return (
        //         <DevIcon>
        //             <ReactSVG />
        //         </DevIcon>
        //     );
        // case "node":
        //     return (
        //         <DevIcon>
        //             <NodeSVG />
        //         </DevIcon>
        //     );
        // case "express":
        //     return (
        //         <DevIcon>
        //             <ExpressSVG />
        //         </DevIcon>
        //     );
        // case "git":
        //     return (
        //         <DevIcon>
        //             <GitSVG />
        //         </DevIcon>
        //     );
        // case "linux":
        //     return (
        //         <DevIcon>
        //             <LinuxSVG />
        //         </DevIcon>
        //     );
        // case "mongoDB":
        //     return (
        //         <DevIcon>
        //             <MongoSVG />
        //         </DevIcon>
        //     );
        // case "python":
        //     return (
        //         <DevIcon>
        //             <PythonSVG />
        //         </DevIcon>
        //     );
        // case "postgres":
        //     return (
        //         <DevIcon>
        //             <PostgresSVG />
        //         </DevIcon>
        //     );
        // case "email":
        //     return (
        //         <DevIcon>
        //             <GmailSVG />
        //         </DevIcon>
        //     );
        // case "phone":
        //     return (
        //         <DevIcon>
        //             <PhoneSVG />
        //         </DevIcon>
        //     )
        default:
            break;
        }
}

export default svgPicker;
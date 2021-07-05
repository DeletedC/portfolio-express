import DevIcon from '../../components/DevIcon';
import objSVG from './SVG';

const svgPicker = (item) => {
    switch (item) {
        case "javascript":
            return (
            <DevIcon>
                {objSVG.javascript}
            </DevIcon>
            );
        case "react":
            return (
                <DevIcon>
                    {objSVG.react}
                </DevIcon>
            );
        case "node":
            return (
                <DevIcon>
                    {objSVG.node}
                </DevIcon>
            );
        case "express":
            return (
                <DevIcon>
                    {objSVG.express}
                </DevIcon>
            );
        case "git":
            return (
                <DevIcon>
                    {objSVG.git}
                </DevIcon>
            );
        case "linux":
            return (
                <DevIcon>
                    {objSVG.linux}
                </DevIcon>
            );
        case "mongoDB":
            return (
                <DevIcon>
                    {objSVG.mongoDB}
                </DevIcon>
            );
        case "python":
            return (
                <DevIcon>
                    {objSVG.python}
                </DevIcon>
            );
        case "postgres":
            return (
                <DevIcon>
                    {objSVG.postgres}
                </DevIcon>
            );
        case "email":
            return (
                <DevIcon>
                    {objSVG.gmail}
                </DevIcon>
            );
        case "phone":
            return (
                <DevIcon>
                    {objSVG.phone}
                </DevIcon>
            )
        default:
            break;
        }
}

export default svgPicker;
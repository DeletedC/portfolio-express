import DevIcon from '../../components/DevIcon';
import objSVG from './SVG';

const svgPicker = (item, params) => {
    switch (item) {
        case "javascript":
            return (
            <DevIcon padding={params}>
                {objSVG.javascript}
            </DevIcon>
            );
        case "react":
            return (
                <DevIcon padding={params}>
                    {objSVG.react}
                </DevIcon>
            );
        case "node":
            return (
                <DevIcon padding={params}>
                    {objSVG.node}
                </DevIcon>
            );
        case "express":
            return (
                <DevIcon padding={params}>
                    {objSVG.express}
                </DevIcon>
            );
        case "git":
            return (
                <DevIcon padding={params}>
                    {objSVG.git}
                </DevIcon>
            );
        case "linux":
            return (
                <DevIcon padding={params}>
                    {objSVG.linux}
                </DevIcon>
            );
        case "mongoDB":
            return (
                <DevIcon padding={params}>
                    {objSVG.mongoDB}
                </DevIcon>
            );
        case "python":
            return (
                <DevIcon padding={params}>
                    {objSVG.python}
                </DevIcon>
            );
        case "postgres":
            return (
                <DevIcon padding={params}>
                    {objSVG.postgres}
                </DevIcon>
            );
        case "email":
            return (
                <DevIcon padding={params}>
                    {objSVG.gmail}
                </DevIcon>
            );
        case "phone":
            return (
                <DevIcon padding={params}>
                    {objSVG.phone}
                </DevIcon>
            );
        case "heroku":
            return (
                <DevIcon padding={params}>
                    {objSVG.heroku}
                </DevIcon>
            );
        case "netlify":
            return (
                <DevIcon padding={params}>
                    {objSVG.netlify}
                </DevIcon>
            );
        case "html":
            return (
                <DevIcon padding={params}>
                    {objSVG.html}
                </DevIcon>
            );
        case "css":
            return (
                <DevIcon padding={params}>
                    {objSVG.css}
                </DevIcon>
            );
        case "linkedIn":
            return (
                <DevIcon padding={params}>
                    {objSVG.linkedIn}
                </DevIcon>
            );
        default:
            break;
        }
}

export default svgPicker;
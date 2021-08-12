import DevIcon from '../../components/DevIcon';
import objSVG from './SVG';

const svgPicker = (item, params) => {
    switch (item) {
        case "javascript":
            return (
            <DevIcon key={item} padding={params}>
                {objSVG.javascript}
            </DevIcon>
            );
        case "react":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.react}
                </DevIcon>
            );
        case "node":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.node}
                </DevIcon>
            );
        case "express":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.express}
                </DevIcon>
            );
        case "git":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.git}
                </DevIcon>
            );
        case "linux":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.linux}
                </DevIcon>
            );
        case "mongoDB":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.mongoDB}
                </DevIcon>
            );
        case "python":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.python}
                </DevIcon>
            );
        case "postgres":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.postgres}
                </DevIcon>
            );
        case "email":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.gmail}
                </DevIcon>
            );
        case "phone":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.phone}
                </DevIcon>
            );
        case "heroku":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.heroku}
                </DevIcon>
            );
        case "netlify":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.netlify}
                </DevIcon>
            );
        case "html":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.html}
                </DevIcon>
            );
        case "css":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.css}
                </DevIcon>
            );
        case "linkedIn":
            return (
                <DevIcon key={item} padding={params}>
                    {objSVG.linkedIn}
                </DevIcon>
            );
        default:
            break;
        }
}

export default svgPicker;
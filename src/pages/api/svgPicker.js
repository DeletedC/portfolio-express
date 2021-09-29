import DevIcon from '../../components/DevIcon';
import objSVG from './SVG';

const svgPicker = (item, params) => {
    switch (item) {
        case "javascript":
            return (
            <DevIcon key={item} extra={params}>
                {objSVG.javascript}
            </DevIcon>
            );
        case "react":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.react}
                </DevIcon>
            );
        case "node":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.node}
                </DevIcon>
            );
        case "express":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.express}
                </DevIcon>
            );
        case "git":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.git}
                </DevIcon>
            );
        case "linux":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.linux}
                </DevIcon>
            );
        case "mongoDB":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.mongoDB}
                </DevIcon>
            );
        case "pythonIcon":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.pythonIcon}
                </DevIcon>
            );
        case "pythonFull":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.pythonFull}
                </DevIcon>
            );
        case "postgres":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.postgres}
                </DevIcon>
            );
        case "email":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.gmail}
                </DevIcon>
            );
        case "phone":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.phone}
                </DevIcon>
            );
        case "heroku":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.heroku}
                </DevIcon>
            );
        case "netlify":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.netlify}
                </DevIcon>
            );
        case "html":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.html}
                </DevIcon>
            );
        case "css":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.css}
                </DevIcon>
            );
        case "linkedIn":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.linkedIn}
                </DevIcon>
            );
        case "nextjs":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.nextjs}
                </DevIcon>
            );
        case "bootstrap":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.bootstrap}
                </DevIcon>
            );
        case "tailwindFull":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.tailwindFull}
                </DevIcon>
            );
        case "tailwindIcon":
            return (
                <DevIcon key={item} extra={params}>
                    {objSVG.tailwindIcon}
                </DevIcon>
            );
        default:
            break;
        }
}

export default svgPicker;
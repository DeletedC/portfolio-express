import objSVG from './SVG';

const svgPicker = (item) => {
    switch (item) {
        case "javascript":
            return console.log (objSVG.javascript);
        case "react":
            return objSVG.react;
        case "node":
            return objSVG.node;
        case "express":
            return objSVG.express;
        case "git":
            return objSVG.git;
        case "linux":
            return objSVG.linux;
        case "mongoDB":
            return objSVG.mongoDB;
        case "python":
            return objSVG.python;
        case "postgres":
            return objSVG.postgres;
        default:
            break;
    }
}

export default svgPicker;
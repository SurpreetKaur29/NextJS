export const CustomImage = ({src, className}) => {
    return (
        <img src={`${src}`} className={`${className ? className : ""}`} alt="image" />
    );
};
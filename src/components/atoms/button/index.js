export const CustomButton = ({className, buttonText}) => {
    return (
        <button type="button" className={`${className}`}>{buttonText}</button>
    );
};
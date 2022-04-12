import Lottie from "react-lottie";

export const Test1 = ({ lotti, width, height }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lotti,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
    };
    
    return(
        <div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
}
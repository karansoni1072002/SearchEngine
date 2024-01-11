import Lottie from 'react-lottie'
import LoaderData from '../assets/LoaderData.json'

const LoadingAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoaderData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie options={defaultOptions} width={300} />
        </div>
    )
}

export default LoadingAnimation
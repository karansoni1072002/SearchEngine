import LoadingAnimation from './LoadingAnimation'

const LoadingOverlay = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <div className="bg-black opacity-50 w-screen h-screen fixed top-0 left-0 right-0 bottom-0"></div>
            <div className="relative z-10">
                <LoadingAnimation />
            </div>
        </div>
    )
}

export default LoadingOverlay
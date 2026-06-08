export default function ProgressBar({currentQuestion, totalQuestion}) {
    const progress = ((currentQuestion +1) / totalQuestion) * 100

    return (
        <div className="progressContainer">
            <div className="progressFill"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}
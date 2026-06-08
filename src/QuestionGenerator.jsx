export default function QuesGenerator({title, options, OnCorrectOption}) {
    return (
        <>

        <div className = "questionContainer">
            <p>Вопрос: {title}</p>
        </div>

        <div className = "optionContainer">
            {options.map((option) => (
                <button onClick={() => OnCorrectOption(option)}>{option}</button>
            ))}
        </div>
        </>
    )
}
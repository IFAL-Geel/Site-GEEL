import "./Journal.css"

export default function Journal(props) {
    return(
        <div className="JournalInner">
            <i class="fa-regular fa-newspaper"></i>
            <p>Edição de Janeiro</p>
            <p>01.01.2024</p>
            <div className="journalOverlay">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}
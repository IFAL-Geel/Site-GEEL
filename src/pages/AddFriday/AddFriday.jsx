import { useContext, useEffect, useState } from "react"
import "./AddFriday.css"
import { DataContext } from "../../contexts/firestoreData/firestoreDataContext"

export default function AddFriday(){
    
    const { uploadFridayData } = useContext(DataContext)
    const [selectedFile1, setSelectedFile1] = useState(null)
    const [selectedFile2, setSelectedFile2] = useState(null)
    const [selectedFile3, setSelectedFile3] = useState(null)
    const [selectedFile4, setSelectedFile4] = useState(null)
    const [date, setDate] = useState(null)

    const handleFileChange = (event, setFile) => {
        const file = event.target.files[0]
        setFile(file)
    };

    const handleDateChange = (date) => {
        const [year, month, day] = date.split("-")
        setDate(`${day}/${month}/${year}`)
    }

    useEffect(() => {
        const button = document.querySelector(".af_button")
        if(selectedFile1 && selectedFile2 && selectedFile3 && selectedFile4 && date){
            button.disabled = false
        } else {
            button.disabled = true
        }
    }, [selectedFile1, selectedFile2, selectedFile3, selectedFile4, date])

    const postFridayData = (e) => {
        e.preventDefault()
        uploadFridayData( date, selectedFile1, selectedFile2, selectedFile3, selectedFile4)
    }

    return(
        <div className="AddFriday">
            <div className="af_inner">
                <h1>Sexta-Cultural</h1>
                <p>upload de fotos de uma sexta cultural</p>

                <div className="af_data_inner">
                    <label htmlFor="af_date">Data:</label>
                    <input onChange={(e) => handleDateChange(e.target.value)} className="af_date" type="date" />
                </div>

                <div className="af_img_inner">
                    <label className="af_label">Imagem 1:</label>
                    <label htmlFor="af_img1" className="af_img_input">{selectedFile1 ? selectedFile1.name : "Selecione uma imagem"}</label>
                    <input required onChange={(e) => handleFileChange(e, setSelectedFile1)} id="af_img1" type="file" />
                </div>
                <div className="af_img_inner">
                    <label className="af_label">Imagem 2:</label>
                    <label htmlFor="af_img2" className="af_img_input">{selectedFile2 ? selectedFile2.name : "Selecione uma imagem"}</label>
                    <input required onChange={(e) => handleFileChange(e, setSelectedFile2)} id="af_img2" type="file" />
                </div>
                <div className="af_img_inner">
                    <label className="af_label">Imagem 3:</label>
                    <label htmlFor="af_img3" className="af_img_input">{selectedFile3 ? selectedFile3.name : "Selecione uma imagem"}</label>
                    <input required onChange={(e) => handleFileChange(e, setSelectedFile3)} id="af_img3"type="file" />
                </div>
                <div className="af_img_inner">
                    <label className="af_label">Imagem 4:</label>
                    <label htmlFor="af_img4" className="af_img_input">{selectedFile4 ? selectedFile4.name : "Selecione uma imagem"}</label>
                    <input required onChange={(e) => handleFileChange(e, setSelectedFile4)} id="af_img4" type="file" />
                </div>

                <button onClick={(e) => postFridayData(e)} className="af_button">Enviar</button>
            </div>
        </div>
    )
}
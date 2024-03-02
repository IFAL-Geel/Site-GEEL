import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/firestoreData/firestoreDataContext";
import "./AddStatute.css"

export default function AddStatute(){

    const { uploadFileData } = useContext(DataContext)
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileName, setFileName] = useState("")
    const [fileType, setFileType] = useState(null)

    useEffect(() => {
        const button = document.querySelector(".af_button")
        if(selectedFile && fileName && fileType){
            button.disabled = false
        } else {
            button.disabled = true
        }
    }, [selectedFile, fileName, fileType])

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setSelectedFile(file)

        if (file) {
            const fileNameParts = file.name.split(".");
            const extension = fileNameParts[fileNameParts.length - 1].toLowerCase();
            
            if(extension === "pdf"){
                console.log("pdf");
                setFileType("pdf");
            } else if (extension === "docx"){
                console.log("word");
                setFileType("word")
            }
        }
    };

    const postFileData = (e) => {
        e.preventDefault()
        uploadFileData(selectedFile, fileName, fileType, "statutes")
    }

    return(
        <div className="AddFile">
            <div className="afl_inner">
                <h1>Edital</h1>
                <p>upload de editais para o site</p>

                <div className="afl_input_inner">
                    <label htmlFor="afl_name">Nome:</label>
                    <input value={fileName} onChange={(e) => setFileName(e.target.value)} className="afl_name" type="text" />
                </div>

                <div className="afl_file_inner">
                    <label className="afl_label">Arquivo:</label>
                    <label htmlFor="afl_file" className="afl_img_input">{selectedFile ? selectedFile.name : "Selecione um arquivo"}</label>
                    <input required onChange={(e) => handleFileChange(e, setSelectedFile)} id="afl_file" type="file" />
                </div>

                <button onClick={(e) => postFileData(e)} className="af_button">Enviar</button>
            </div>
        </div>
    )
}
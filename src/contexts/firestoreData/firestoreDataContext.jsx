import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, storage } from "../../services/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

export const DataContext = createContext()

export default function DataProvider({ children}){
    
    const [fridayData, setFridayData] = useState(null)
    const [filesData, setFilesData] = useState(null)
    const [statutesData, setStatutesData] = useState(null)
    const [uploadComplete, setUploadComplete] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        getFridayData()
        getFilesData()
        getStatutesData()
    }, [])

    async function getFridayData(){
        const docRef = collection(db, "friday")
        const docSnap = await getDocs(docRef).catch((err) => console.log(err.message))

        const data = []
        docSnap.forEach((doc) => {
            const docData = {...doc.data() }
            data.push(docData)
        })

        setFridayData(data)
    }

    async function getFilesData(){
        const docRef = collection(db, "files")
        const docSnap = await getDocs(docRef).catch((err) => console.log(err.message))

        const data = []
        docSnap.forEach((doc) => {
            const docData = {...doc.data() }
            data.push(docData)
        })

        setFilesData(data)
    }
    
    async function getStatutesData(){
        const docRef = collection(db, "statutes")
        const docSnap = await getDocs(docRef).catch((err) => console.log(err.message))

        const data = []
        docSnap.forEach((doc) => {
            const docData = {...doc.data() }
            data.push(docData)
        })

        setStatutesData(data)
    }

    async function postStorageData(file, folder) {
        const fileId = uuidv4()
        const storageRef = ref(storage, `${folder}/${fileId}_${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
    
        return new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                null,
                (error) => {
                    reject(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        resolve(downloadUrl)
                    })
                }
            )
        })
    }

    async function uploadFileData(file, name, type, dir){
        try{
            const fileURL = await postStorageData(file, dir)

            await addDoc(collection(db, dir), {
                name: name,
                type: type,
                url: fileURL,
            })

            getFilesData()
            getStatutesData()
            setUploadComplete(true);
            nav('/admin', {state: {uploadComplete: true}});

        } catch (err){
            console.log("Falha postar aquivo: " + err.message);
        }
    }
    
    async function uploadFridayData(date, img1, img2, img3, img4) {

        const button = document.querySelector('.af_button')
        const inputs = document.querySelectorAll('.af_img_input')
        const dateInput = document.querySelector('.af_date')
        const form = document.querySelector('.af_inner')

        try {

            button.classList.add("af_upload")
            button.innerHTML = "Enviando..."
            inputs.forEach((input) => {
                input.classList.add("af_upload")
            })
            dateInput.classList.add("af_upload")
            form.classList.add("af_upload")

            const url1 = await postStorageData(img1, "sextasCulturais")
            const url2 = await postStorageData(img2, "sextasCulturais")
            const url3 = await postStorageData(img3, "sextasCulturais")
            const url4 = await postStorageData(img4, "sextasCulturais")

            await addDoc(collection(db, "friday"), {
            date: date,
            img1: url1,
            img2: url2,
            img3: url3,
            img4: url4,
            })
                
            getFridayData()
            setUploadComplete(true);
            nav('/admin', {state: {uploadComplete: true}});

        } catch (error) {
            console.error("Erro durante o upload:", error);
        }
    }
    
    return <DataContext.Provider value={{ uploadFridayData, uploadFileData, getFilesData, statutesData, filesData, fridayData, fireData: !!fridayData & !!filesData}}>
        { children }
    </DataContext.Provider>
}
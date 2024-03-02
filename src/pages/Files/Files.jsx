import { useContext, useEffect } from "react"
import FileComp from "../../components/FileComp/FileComp"
import PageTitle from "../../components/PageDesc/PageTitle"
import "./Files.css"
import { DataContext } from "../../contexts/firestoreData/firestoreDataContext"
import LeftMenu from "../../components/LeftMenu/LeftMenu"

export default function Files(props){

    const { filesData, getFilesData } = useContext(DataContext)

    console.log(filesData);

    useEffect(() => {
        getFilesData()
    }, [])

    return(
        <div className="Files">
            <LeftMenu />
            <PageTitle title={"Arquivos"} width="92%"/>
            <div className="fl_inner">
                {filesData ? filesData.map((file) => {
                    return <FileComp title={file.name} type={file.type} link={file.url}/>
                }) : null}
            </div>
        </div>
    )
}
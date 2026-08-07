import { useParams } from "react-router-dom"

const DirectoryView = () => {
 const a  = useParams()
 console.log(a);
 return <h1>Hi</h1>
}

export default DirectoryView

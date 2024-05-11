import { useParams } from "react-router-dom"

const Program = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>Program {params.prgId}</div>
  )
}

export default Program
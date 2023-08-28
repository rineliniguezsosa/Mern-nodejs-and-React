import { useEffect } from "react"
import { useParams } from "react-router-dom"


export const Activate = () => {
  const { token } = useParams()
  console.log(token)
  return (
    <div>Activate</div>
  )
}

import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export const Activate = () => {
  const { token } = useParams()
  console.log(token)
  return (
    <div>Activate</div>
  )
}

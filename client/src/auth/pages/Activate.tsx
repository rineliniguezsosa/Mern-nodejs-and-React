import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import queryString from 'query-string';

export const Activate = () => {
  const location = useLocation()
  const { token } = queryString.parse(location.search)
  console.log(token)
  console.log(location)
  return (
    <div>Activate</div>
  )
}

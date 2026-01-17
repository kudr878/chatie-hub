import { useNavigate } from "react-router"

export default function Footer() {
  const navigate = useNavigate()

  return (
    <div className="h-30 w-full py-3 px-20 flex items-center justify-center">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}>Chattie Hub</h1>
    </div>
  )
}
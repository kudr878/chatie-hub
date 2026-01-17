import { useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate()
  return (
    <div className="bg-secondary w-full py-3 px-5 lg:px-20 flex justify-between">
      <p className="cursor-pointer" onClick={() => navigate('chats')}>Chats</p>
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate('/')}>Chattie Hub</h1>
      <p className="cursor-pointer" onClick={() => navigate('profile')}>Profile</p>
    </div>
  )
}
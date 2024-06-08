import { useContext } from 'react';
import { Context } from '../context/Context'


export default function Home() {
  const {user} = useContext(Context);
  return (
    <div className='mt-20'>
      <span className="text-5xl">HOME PAGE for {user.name ? user.name : "NO ONE -> Go Log in"}</span>
    </div>
  )
}

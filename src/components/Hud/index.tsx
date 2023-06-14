import { AiOutlineSearch } from 'react-icons/ai'
import Link from 'next/link'

export default function Hud(){
  return (
    <div className="flex flex-col justify-between fixed min-h-screen p-16 w-screen font-sans">
      <section className="flex justify-between w-full">
        <div>
          <h1 className="text-xl font-[700] text-secondary">WILSON<br/>MESQUITA</h1>
        </div>
        <div>
          <Link href="#" className='text-xs'>
            DONWLOAD CV
          </Link>
        </div>
      </section>
      <section className="flex justify-between w-full">
        <div>
        <h1 className="text-xl font-[700] text-secondary">WEB<br/>DEVELOPER</h1>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-xs underline'>
            wilsonmesquita03.github.io
          </p>
          <AiOutlineSearch/>
        </div>
      </section>
    </div>
  )
}
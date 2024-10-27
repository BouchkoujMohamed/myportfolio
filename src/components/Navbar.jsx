
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'
import { FaSquareTwitter} from 'react-icons/fa6'
function Navbar() {
  return (
    <nav className="mb-20 flex justify-between items-center">
        <div className=" flex flex-shrink-0 items-center">
            <p className='text-3xl font-bold text-white'>MB</p>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white'>
          <FaLinkedin/>
          <FaGithub/>
          <FaInstagram/>
          <FaSquareTwitter/>
        </div>
    </nav>
  )
}

export default Navbar

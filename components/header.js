import CurrentTime from './currentTime';

import { useAppContext } from '../context/app-state';
import useDarkMode from '../hooks/useDarkMode'

export default function Header() {

  const {
    isAboutOpen,
    setIsAboutOpen
  } = useAppContext()

  const [_ , setTheme] = useDarkMode();

  return (
    <nav className={'header'}>
      <div className={'header__left'}>
        <p>Ramon E. Munoz</p>
        <button 
          className={`${isAboutOpen ? 'hide' : '' }`} 
          type={'button'} 
          onClick={() => setIsAboutOpen(state => { return !state })}
        >
          About
        </button>
        <button 
          className={`${isAboutOpen ? '' : 'hide' }`} 
          type={'button'} 
          onClick={() => setIsAboutOpen(state => { return !state })}
        >
          (Hide)
        </button>
      </div>
      <div className={'header__right'}>
        <div className={'header__availability'}>
          <p>Available from 2-6pm</p>
          <p>Monday-Friday</p>
        </div>
        <p><a href="mailto:ramon@ramon-munoz.com">Contact</a></p>
        <CurrentTime />
        <button type={'button'} onClick={() => setTheme(state => { return state === 'dark-mode' ? 'light-mode' : 'dark-mode';})}>&#11044;</button>
      </div>
    </nav>
  )
}

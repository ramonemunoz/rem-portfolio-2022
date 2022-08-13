import CurrentTime from './currentTime';

import { useAppContext } from '../context/app-state';
import useDarkMode from '../hooks/useDarkMode'

export default function Header() {

  const {
    setIsAboutOpen
  } = useAppContext()

  const [_ , setIsDarkMode] = useDarkMode();

  return (
    <div className={'header'}>
      <div className={'header__left'}>
        <p>Ramon E. Munoz</p>
        <button type={'button'} onClick={() => setIsAboutOpen(state => { return !state })}>About</button>
      </div>
      <div className={'header__right'}>
        <div className={'header__availability'}>
          <p>Available from 2-6pm</p>
          <p>Monday-Friday</p>
        </div>
        <p><a href="mailto:ramon@ramon-munoz.com">Contact</a></p>
        <CurrentTime />
        <button type={'button'} onClick={() => setIsDarkMode(state => { return !state })}>&#11044;</button>
      </div>
    </div>
  )
}

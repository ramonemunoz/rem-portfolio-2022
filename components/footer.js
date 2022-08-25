export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className={'footer'}>
      <p>REM</p>
      <p>&copy;{' '}{year}{' '}Currently in Los Angeles</p>
      <p>All rights reserved</p>
      <p>Updated: Aug, 2022</p>
    </footer>
  )
}

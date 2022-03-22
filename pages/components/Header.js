import Link from 'next/link'

export default function Header() {
    return (
      <>

        <div className="header_container">
            <div className="header_logo">
                <img src="/favicon.ico" />
            </div>

            <div className="header_nav">
                <Link href="/"><h4>Home</h4></Link>
                <Link href="about/"><h4>About</h4></Link>
                <Link href="/"><h4>Templates</h4></Link>
                <Link href="/"><h4>Education</h4></Link>
                <Link href="/"><h4>Contact</h4></Link>

            </div>    
        </div>

      </>
    )
  }
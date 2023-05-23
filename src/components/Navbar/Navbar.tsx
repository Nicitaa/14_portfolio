import './Navbar.css'
import {repos} from './../../data/repos'
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";



export function Navbar(){
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
      slider.addEventListener("mousedown", (e) => {
      console.log('touched/swiped down')

        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      window.addEventListener("mouseup", () => {
      console.log('touched/swiped up')
        isDown = false;
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        console.log('touched/swiped mousemove')

        const x = e.pageX - slider.offsetLeft;
        const speed = 1;
        const walk = (x - startX) * speed;
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);
return (

  <nav ref={sliderRef} className='nav'>
    <div className='portfolio-container'>
    <Link to={'/'} className='portfolio'>Portfolio</Link>
    </div>

      {repos.map((repo)=>{
        return <ul key={repo.id} className='sites-ul'>
           <li>
                   <p> {repo.id}</p>
                   <Link to={`/MySite/${repo.id}`}>{repo.description}</Link>
           </li>
        </ul>
      })}
  </nav>


    )

}


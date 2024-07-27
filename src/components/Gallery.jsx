import arrowFwd from '../assets/images/arrow-forward.svg'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery7 from '../assets/images/gallery-7.jpg'
import gallery8 from '../assets/images/gallery-8.jpg'
import scroll from '../assets/images/scroll-down.svg'
import galleryShape from "../assets/images/gallery-shape.svg"

const Gallery = () => {
  return (
    <div className='p-3'>
        <ul className='gallery-list grid gap-7'>

            {/* <li className='gallery-item relative' data-reveal>

                <div className="gallery relative">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-scale-down' src={gallery8} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title '>The Drunken</a>
                        </h3>

                        <span className='card-tag'>Food Event</span>
                    </div>

                    {/* <a href="#" className='btn-icon'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a> 
                    <div className='z-20 bg-yellow-200 absolute top-0 right-0 w-[50px] h-[50px] grid place-items-center'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </div>
                    
                </div>
            </li> */}

            <li className='gallery-item relative' data-reveal>

                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-cover' width={450} height={625} src={gallery1} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title '>The Drunken</a>
                        </h3>

                        <span className='card-tag'>Food Event</span>
                    </div>

                    <div className='icon-btn'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </div>
                    
                </div>
            </li>

            <li className='gallery-item relative' data-reveal>
                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-cover' width={450} height={625} src={gallery2} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title'>Lettuce Entertain</a>
                        </h3>

                        <span className='card-tag'>Landscape</span>
                    </div>

                    <a href="#" className='btn-icon'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a>
                </div>
            </li>

            <li className='gallery-item relative' data-reveal>
                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-cover' width={450} height={625} src={gallery3} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title'>Leaping Lizard</a>
                        </h3>

                        <span className='card-tag'>Model, Fashion</span>
                    </div>

                    <a href="#" className='btn-icon'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a>
                </div>
            </li>

            <li className='gallery-item relative' data-reveal>
                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-cover' width={450} height={625} src={gallery4} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title'>Juan More Taco</a>
                        </h3>

                        <span className='card-tag'>Architecture, Event</span>
                    </div>

                    <a href="#" className='btn-icon'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a>
                </div>

            </li>

            <li className='gallery-item relative' data-reveal>
                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='object-cover' width={450} height={625} src={gallery5} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="card-content">
                        <h3 className='h6'>
                            <a href="#" className='card-title'>Goldilox Bagels</a>
                        </h3>

                        <span className='card-tag'>People, Film</span>
                    </div>

                    <a href="#" className='btn-icon'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a>
                </div>

            </li>

            <li className='gallery-item relative' data-reveal>
                <div className="gallery-card">
                    <figure className='card-banner has-before img-holder'>
                        <img className='img-cover' width={450} height={625} src={gallery7} alt="The Drunken" loading='lazy' />
                    </figure>

                    <div className="absolute left-0 bottom-0 z-10 pb-[30px] pl-3">
                        <h3 className='h6'>
                            <a href="#" className='card-title'>Divine Pastabilities</a>
                        </h3>

                        <span className='card-tag'>Wedding, Event</span>
                    </div>

                    <a className='icon-btn'>
                        <img src={arrowFwd} alt="Arrow Forward" width={43} height={20} loading='lazy' />
                    </a>
                </div>

            </li>
        </ul>

        <a href="#service" className='scrollDown h-[60px] w-[60px] rounded-full border border-whiteA9 grid place-items-center mt-[55px] mx-auto
                                    hover:bg-radicalRed hover:border-radicalRed'>
            <img className='w-[22px]' src={scroll} width={40} height={66} alt="Scroll icon" loading='lazy' />
        </a>

        <img src={galleryShape} className='shape' width={220} height={78} alt="Gallery Shape" loading='lazy' />
    </div>
  )
}

export default Gallery
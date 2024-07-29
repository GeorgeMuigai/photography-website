import category1 from '../assets/images/category-1.jpg'
import model from '../assets/images/category-2.jpg'
import street from '../assets/images/category-3.jpg'
import product from '../assets/images/category-4.jpg'
import food from '../assets/images/category-10.jpg'

const Category = () => {
  return (
    <div className='mt-9'>
      <ul className="category-list p-3 flex flex-wrap justify-center gap-y-8 gap-x-2 items-center">

        <li className="category-item group">
          <a href="" className="category-card">
            <h3 className='h5 text-whiteA15 mb-2 group-hover:text-white'>Landscape</h3>

            <figure className="img-holder card-banner">
              <img  src={category1} width="600" height="690" loading="lazy" className="img-cover"/>
            </figure>
          </a>
        </li>

        <li className="category-item group">
          <a href="" className="category-card">
            <h3 className='h5 text-whiteA15 mb-2 group-hover:text-white'>Model</h3>

            <figure className="img-holder card-banner">
              <img  src={model} width="600" height="690" loading="lazy" className="img-cover"/>
            </figure>
          </a>
        </li>

        <li className="category-item group">
          <a href="" className="category-card">
            <h3 className='h5 text-whiteA15 mb-2 group-hover:text-white'>Street</h3>

            <figure className="img-holder card-banner">
              <img  src={street} width="600" height="690" loading="lazy" className="img-cover"/>
            </figure>
          </a>
        </li>

        <li className="category-item group">
          <a href="" className="category-card">
            <h3 className='h5 text-whiteA15 mb-2 group-hover:text-white'>Product</h3>

            <figure className="img-holder card-banner">
              <img  src={product} width="600" height="690" loading="lazy" className="img-cover"/>
            </figure>
          </a>
        </li>

        <li className="category-item group">
          <a href="" className="category-card">
            <h3 className='h5 text-whiteA15 mb-2 group-hover:text-white'>Food</h3>

            <figure className="img-holder card-banner">
              <img  src={food} width="600" height="690" loading="lazy" className="img-cover"/>
            </figure>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Category
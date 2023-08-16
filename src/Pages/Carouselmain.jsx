import 'react'
import '../Pages/styles/carouselmain.css'
const Carouselmain = () => {
  return (
            <div className="slide-content">
              
       <img className='slide__img' src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG"  alt="" />
       <img className='slide__img' src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG"  alt="" />
       <img className='slide__img' src="https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/slider%203.PNG"  alt="" />

       <div className="owl-dots">
        <button role="button" className="owl-dot"><span></span>
        </button><button role="button" className="owl-dot"><span></span></button>
        <button role="button" className="owl-dot active"><span></span></button>
          <button role="button" className="owl-dot"><span></span></button>
          <button role="button" className="owl-dot"><span></span></button>
          </div>
         </div>

  )
}

export default Carouselmain
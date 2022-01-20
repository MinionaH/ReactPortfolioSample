import './intro.css'
import Me from "../../img/me2.jpg"

const Intro = () => {
  return(
    <div className="i">
        <div className="i-left">
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Nikoloz Sadirini</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Web Developer</div>
                        <div className='i-title-item'>Student</div>
                        <div className='i-title-item'>Python Developer</div>
                        <div className='i-title-item'>BreakDancer</div>
                        <div className='i-title-item'>Competitive Gamer</div>
                    </div>
                </div>
                <div className='i-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex unde ea praesentium
                    , rem reiciendis repellendus quibusdam illo. Similique animi 
                    ex illum incidunt repudiandae voluptatem excepturi dicta, tempore quaerat rerum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed itaque, nesciunt sequi, architecto dolore aut eius in 
                    cumque doloribus accusamus, enim nemo quaerat 
                    quasi dolorem autem consequatur cum illo tempora!
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )

}

export default Intro;
 
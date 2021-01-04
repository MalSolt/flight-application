import one from '../img/slider/1.png'
import two from '../img/slider/2.png'
import three from '../img/slider/3.png'

let initialState = {
  slides: [one, two, three, one, two, three],
}

 const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
 export default sliderReducer

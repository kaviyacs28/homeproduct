import course1 from "../Section6/living-room-brown-sofa-300x300.png";
import course2 from "../Section6/egyptian-brown.png";
import course3 from "../Section3/living-room-green-sof.png";
import course4 from '../Section6/furniture-green-fabric-chair-300x300.png';
import course5 from "../Section6/wall-hanging.png";
import course6 from "../Section6/bathroom-wooden.png";
import course7 from "../Section6/black-metal-lamp-300x300.png";
import course8 from "../Section6/cream-ceramic-oval-bathtub-300x300.png";
import course9 from "../Section6/wooden-stool.png";
const initialState = {
  courses1: [
    {
      id: 1,
      name: "Living Room",
      price: 1200,
      product: "Brown Living Room Sofa",
      image: course1,
   
  },
  {
      id: 2,
      name: "Home Office",
      price: 400,
      product: "Egyptian Vase",
      image: course2,

  },
  {
      id: 3,
      name: "Living Room",
      price: 1200,
      product: "Green Living Room Sofa",
      image: course3,
  },
  {
    id: 4,
    name: "Chair",
    price: 860,
    product: "Modern Emerald Fabric Chair",
    image: course4,
}

  ],
  cart: []
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        courses1: state.courses1.map(course =>
          course.id === action.payload
            ? { ...course, quantity: 0 }
            : course
        ),
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    

    default:
      return state
  }
}
export default cartReducer;
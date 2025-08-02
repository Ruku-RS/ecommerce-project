import Jeans from '../../assets/Jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import TShirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'
import AirJordan from '../../assets/air-jordan.png'
import CasualShoes from '../../assets/white-shoes.png'


const product =[
    {
        id: 1,
        name: 'Sports TShirt',
        image: TShirt,
        price: 5.99,
        oldPrice: 9.99,
        onSale: true,
        NewArrival: false,
        category: 'Mens'
    },
    {
        id: 2,
        name: 'Jeans',
        image: Jeans,
        price: 25.99,
        oldPrice: 35.99,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 3,
        name: 'Hoodie',
        image: Hoodie,
        price: 30,
        oldPrice: 35.99,
        onSale: true,
        NewArrival: null,
        category: 'Mens'
    },
    {
        id: 4,
        name: 'Leather Jacket',
        image: LeatherJacket,
        price: 25.99,
        oldPrice: 35.99,
        onSale: null,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 5,
        name: 'Skirt',
        image: Skirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: false,
        NewArrival: true,
        category: 'Womens'
    },
    {
        id: 6,
        name: 'Sleep Suit',
        image: Sleepsuit,
        price: 15.99,
        oldPrice: 25.99,
        onSale: null,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 7,
        name: 'Shirt',
        image: Shirt,
        price: 16.99,
        oldPrice: 20.99,
        onSale: false,
        NewArrival: true,
        category: 'Mens'
    },
    {
        id: 8,
        name: 'Skirt Dress',
        image: Dress,
        price: 55.99,
        oldPrice: 60.99,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 9,
        name: 'Skater',
        image: Skater,
        price: 150.99,
        oldPrice: 160.99,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
        id: 10,
        name: 'Sweater',
        image: Sweater,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        NewArrival: false,
        category: 'Kids'
    },
    {
        id: 11,
        name: 'Baby Shirt',
        image: BabyShirt,
        price: 15.99,
        oldPrice: 25.99,
        onSale: false,
        NewArrival: true,
        category: 'Kids'
    },
    {
        id: 12,
        name: 'Shirt Dress',
        image: ShirtDress,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        NewArrival: false,
        category: 'Womens'
    },
    {
      id: 13,
      name: 'Air Jordan',
      image: AirJordan,
      price: 100,
      oldPrice: 150,
      onSale: true,
      NewArrival: false,
      category: 'Mens'
    },
    {
        id:14,
        name: 'Casual Shoes',
        image: CasualShoes,
        price: 50,
        oldPrice: 80,
        onSale: false,
        NewArrival: true,
        category: ['Mens', 'Womens']
    }
]

export default product
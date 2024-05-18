import React from 'react'
import Card from './Card'
import image1 from '../assets/nginx.jpg'
import image2 from '../assets/image2.png'

const cards = [
{
    id:1,
    title:'Javascript',
    image:image1,
    instructor: 'Humberto Dorantes',
    url: 'https://www.youtube.com'
},
{
    id:2,
    title:'Python',
    image:image2,
    instructor: 'Samuel López',
    url: 'https://www.youtube.com'
},
{
    id:3,
    title:'Java',
    image:image1,
    instructor: 'Angela Rios',
    url: 'https://www.youtube.com'
},
{
    id:4,
    title:'Java',
    image:image1,
    instructor: 'Valentin',
    url: 'https://www.youtube.com'
}

]

export default function Cards() {
    console.log(cards);

    return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row' >
            {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        title={c.title}
                        instructor={c.instructor}
                        url={c.url}
                        />
                        </div>
                ) )
            }
        </div>
    </div>
  )
}

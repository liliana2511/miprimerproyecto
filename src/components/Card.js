import React from 'react'

export default function Card({id,title,image,instructor,url}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
            <img src={image} alt='no image'/>
            <h4 className='card-title'>Curso Java</h4>
            <p className='card-text text-secondary'>
                Instructor: {instructor}
            </p>
            <a href={url}    className='btn btn-outline-secondary rounded-0'>
                Ir al sitio web
            </a>
        </div>
    </div>
  )
}

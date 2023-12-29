import React from 'react';
import './NewCollection.css';
import new_collection from '../assests/new_collections';
import Item from '../items/Item';

const NewCollection = () => {
  return (
    <div className='new-collection' data-aos="fade-in" data-aos-duration="4000">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
            {new_collection.map((item,i)=>{

                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default NewCollection

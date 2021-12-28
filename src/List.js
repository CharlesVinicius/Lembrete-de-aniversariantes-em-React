import React from 'react';

const List = ({pessoas}) => {
  return (
    <>
      {pessoas.map((person)=>{
        const {id, name, age, image, job} = person;
        return( 
        
        <article key={id} className="person">
          
                <img src={image} alt={name} />

                <div>
                  <h4>{name}</h4>
                  <p>{job}</p>
                  <p>{age} anos</p>
                  
                </div>
        </article>
        )
    })}
    </>
  );
};

export default List;

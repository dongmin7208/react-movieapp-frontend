import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'natto',
    image:
      'https://cdn.pixabay.com/photo/2013/08/01/07/17/natto-169229_960_720.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'kimchi',
    image:
      'https://media.istockphoto.com/photos/plate-full-of-kimchi-and-chopsticks-on-side-picture-id158554261?s=612x612',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'greensarada',
    image:
      'https://cdn.pixabay.com/photo/2016/10/02/20/02/green-1710328_960_720.jpg',
    rating: 3.5,
  },
  {
    id: 4,
    name: 'yariika',
    image:
      'https://media.istockphoto.com/photos/-picture-id820227544?s=612x612',
    rating: 3.5,
  },
  {
    id: 5,
    name: 'iwashi',
    image:
      'https://cdn.pixabay.com/photo/2019/04/30/16/45/restaurant-4168987_960_720.jpg',
    rating: 4.0,
  },
  {
    id: 6,
    name: 'daigakuemo',
    image:
      'https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_960_720.jpg',
    rating: 1.5,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.prototypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

import { useState } from 'react';

const Book = ({ title, author, image }) => {
  const [timesRead, setTimesRead] = useState(0);

  const incrementReadCount = () => {
    setTimesRead(timesRead + 1);
  };

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={incrementReadCount}>Keer gelezen: {timesRead}</button>
    </article>
  );
};

export default Book;
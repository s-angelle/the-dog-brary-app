const DogInfo = ({ dogInfo }) => {
  return (
    <div>
      {dogInfo.map((dog) => {
        return (
          <div id="dog-info">
            <h2>{dog.name}</h2>
            <ul id="dog-info-items">
              <li>Temperament: {dog.temperament}</li>
              <li>Bred For: {dog.bred_for}</li>
              <li>Life Span: {dog.life_span}</li>
              <div id='dog-photo-container'>
              <img id='dog-photo'
                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                alt={`${dog.name}`}
              />
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DogInfo;

import {useDispatch, useSelector} from "react-redux";
import {removeCar} from "../store";

function CarList() {
  const dispatch = useDispatch();
  const {cars, name} = useSelector(({ form, cars: {data, searchTerm}}) => {
    const filtredCars = data.filter(
      (car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filtredCars,
      name: form.name
    }
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  }

  const renderedCars = cars.map((car) => {
    // decide if this car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    console.log(name);
    console.log(car.name);
    console.log(bold);

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleCarDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr/>
    </div>
  );
}

export default CarList;
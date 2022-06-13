import axios from "axios";
// Components
import DogInfo from "../DogInfo/DogInfo";
// Hooks
import { useState } from "react";
// CSS
import "./App.css";

function App() {
  // Creating state for input field
  const [dogBreed, setDogBreed] = useState("");
  // Dog Info
  const [dogInfo, setDogInfo] = useState([]);

  const handleChange = (e) => {
    setDogBreed(e.target.value);
  };

  // Creating function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Connecting to third-party API with axios
    const baseUrl = "https://api.thedogapi.com/";
    const query = "v1/breeds/search?q=";
    console.log("url", baseUrl + query + dogBreed);

    try {
      const response = await axios.get(baseUrl + query + dogBreed);
      setDogInfo(response.data);
      console.log("Response", response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" form-group App">
      <h1 id="main-heading">The Dog-Brary</h1>
      <img
        id="company-logo"
        src={require("../../images/CompanyLogo.png")}
        alt="company logo"
      />
      <div id="main-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            required
            value={dogBreed}
            onChange={handleChange}
            class="form-control"
            id="exampleInputName2"
            placeholder="Type Breed Name Here"
          />
          <div id="submit-btn-container">
            <button type="submit" className="btn btn-primary" id="main-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <DogInfo dogInfo={dogInfo} />
    </div>
  );
}

export default App;

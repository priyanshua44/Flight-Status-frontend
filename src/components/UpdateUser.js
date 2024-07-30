import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export default function UpdateUser() {

    const {id} = useParams();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () =>{
        try {
            const res = await axios.get(`http://localhost:8080/user/${id}`)
            setFormData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    getData();
  },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res =  axios.patch(`http://localhost:8080/user/${id}`, formData)
      console.log("Success");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container mt-5 w-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

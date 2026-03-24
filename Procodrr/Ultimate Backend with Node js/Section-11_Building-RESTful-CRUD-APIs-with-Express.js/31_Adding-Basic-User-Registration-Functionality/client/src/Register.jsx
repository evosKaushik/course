import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "Kaushik Patel",
    email: "kaushik.lf07@gmail.com",
    password: "12345678",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:4000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setIsSuccess(false);
      console.log(error.message); 
    }
  };

  return (
    <div
      style={{
        backgroundColor: isSuccess ? "green" : "white",
        transition: "ease-in-out",
        height: "100dvh",
        width: "100%",
      }}
    >
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter you name"
          value={formData.name}
          onChange={(e) => handleOnChange(e, "name")}
          required
        />
        <input
          type="email"
          placeholder="Enter you email"
          value={formData.email}
          onChange={(e) => handleOnChange(e, "email")}
          required
        />
        <input
          type="password"
          placeholder="Enter you password"
          value={formData.password}
          onChange={(e) => handleOnChange(e, "password")}
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;

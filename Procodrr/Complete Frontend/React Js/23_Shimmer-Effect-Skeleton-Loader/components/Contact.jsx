import { useParams } from "react-router-dom";
import Header from "./Header";

const Contact = () => {
  const params = useParams()
  console.log(params)
  return <h1>Contact Us</h1>;
};

export default Contact;

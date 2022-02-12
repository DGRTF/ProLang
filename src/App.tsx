import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {
  registration,
  changePassword,
  forgotPassword,
  login,
} from "./api/authorize/authorize";
import OrderForm from "./components/OrderForm/OrderForm";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <RegistrationForm registrationUser={registration} />
    </div>
  );
}

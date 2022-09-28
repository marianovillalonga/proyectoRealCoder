import { Route, Routes } from "react-router-dom";
import { Form } from "../Contacto/Form";

const Main = (props) => {
  return (
      <main className="container">
          <Routes>
              <Route path="/Form" element={<Form />} />
          </Routes>
      </main>
  );
}

export default Main;
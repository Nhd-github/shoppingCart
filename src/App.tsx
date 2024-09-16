
import "./App.css";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import { CartContextProvider } from './Context/cartContext'

function App() {

  const router = useRoutes(routes)
  return (
    <>
      {/* // <ContextDataProvider> */}
      <CartContextProvider>

        <div className="app">
          <Header />

          {/* Start Content */}
          {router}
          {/* Finish Content */}

          <footer>
            <a target={"_blank"} href="https://google.com">
              Google.com
            </a>
          </footer>
        </div>
      </CartContextProvider>
      {/* // </ContextDataProvider> */}
    </>
  );
}

export default App;

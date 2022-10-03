import DefaultLayout from "./components/Layout/DefaultLayout";
import { publicRouter } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.components;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;

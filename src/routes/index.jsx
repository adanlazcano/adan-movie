import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Home from "pages/home";
import Movie from "pages/movie";
import NotFound from "pages/404";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" exact element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default Index;

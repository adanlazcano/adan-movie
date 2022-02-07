import { Outlet } from "react-router-dom";
import Layout from "layout";
import Login from "pages/login/Login";

const PrivateRoute = () => {


 const auth=1;

  return auth ? <Layout><Outlet /> </Layout>: <Login/>;
};

export default PrivateRoute;


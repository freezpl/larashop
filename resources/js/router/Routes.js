import React, {Component, Suspense, Loader} from 'react';
import { Switch, Redirect} from 'react-router';
import AppRoute from './AppRoute';

//import AuthLayout from '../layouts/AuthLayout/AuthLayout'
const AuthLayout = React.lazy(() => import('../layouts/AuthLayout/AuthLayout'));
const DashboardLayout = React.lazy(() => import('../layouts/DashboardLayout/DashboardLayout'));

//import Login from '../components/pages/auth/login/Login'
const Login = React.lazy(() => import('../components/pages/auth/login/Login'));

const MainDashboard = React.lazy(() => import('../layouts/DashboardLayout/pages/Main/Main'));
const ProductsDashboard = React.lazy(() => import('../layouts/DashboardLayout/pages/Products/Products'));

export default class AppRoutes extends Component{

  render(){
    return (
      <Suspense fallback={<div className="row justify-content-center h-100"><h1>Loading...</h1></div>}>
      <Switch>
        <AppRoute path="/" exact component={Login} layout={AuthLayout} title='Login to system'/>
        <AppRoute path="/administrator_login" exact component={Login} layout={AuthLayout} title='Login to system'/>

        <AppRoute path="/dashboard" exact component={MainDashboard} layout={DashboardLayout} title='Dashboard'/>
        {/*<AppRoute path="/dashboard/products" exact component={ProductsDashboard} layout={DashboardLayout} title='Products'/>
         <AppRoute path="/administrator_login" exact component={Login} layout={AuthLayout} title='Login to system'/>
          <AppRoute path="/" exact component={NewsList} layout={CommonLayout} title='News List'/>
         <AppRoute path="/register" exact component={Register} layout={AuthLayout} title='Register page'/>*/}
         {/* <Redirect to="/404" />   */}
      </Switch>
       </Suspense>
    );
  }
}
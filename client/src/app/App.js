import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRout";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
    // "apiEndPoint": "https://fast-company-firebase-c3ab9-default-rtdb.europe-west1.firebasedatabase.app/"

    return (
        <div>
            <AppLoader>
                <NavBar />

                <Switch>
                    <ProtectedRoute
                        path="/users/:userId?/:edit?"
                        component={Users}
                    />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>

                <ToastContainer />
            </AppLoader>
        </div>
    );
}

export default App;

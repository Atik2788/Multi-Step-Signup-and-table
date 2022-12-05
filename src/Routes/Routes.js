import { createBrowserRouter, Form } from "react-router-dom";
import Login from "../Components/Login/Login";
import SignUpForm from "../Components/SignUp/SignUpForm";
import Table from "../Components/Table/Table";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUpForm></SignUpForm>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/table',
        element: <Table></Table>
    },

])
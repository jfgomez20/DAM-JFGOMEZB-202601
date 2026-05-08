import React from "react";
import AuthTemplate from "../../components/templates";
import { LoginForm } from "../../components/organism";
 
const LoginPage = () => {
    return (
        <AuthTemplate title="Welcome Back!" subtitle="Please login to your account">
            <LoginForm />
        </AuthTemplate>
    );
};
 
export default LoginPage;
 
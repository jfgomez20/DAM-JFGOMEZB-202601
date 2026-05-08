import React from "react";
import AuthTemplate from "../../components/templates";
import { RegisterForm } from "../../components/organism";
 
const RegisterPage = () => {
    return (
        <AuthTemplate title="Create Account" subtitle="Sign up to get started">
            <RegisterForm />
        </AuthTemplate>
    );
};
 
export default RegisterPage;
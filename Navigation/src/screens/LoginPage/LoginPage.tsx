import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../Routes";

const LoginPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    const handleLogin = () => {
        navigation.navigate("Dashboard");
    };

    return (
        <AuthTemplate title="Login" subtitle="Please login to your account">
            <LoginForm onSubmit={handleLogin} />
        </AuthTemplate>
    );
};

export default LoginPage;

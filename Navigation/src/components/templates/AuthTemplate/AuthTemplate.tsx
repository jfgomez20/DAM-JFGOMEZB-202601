import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

interface AuthTemplateProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ title, subtitle, children }) => {
    return (
        <View>
            <Text>{title}</Text>
            {subtitle && <Text>{subtitle}</Text>}
            <View>
                {children}
            </View>
        </View>
       
    );
}

export default AuthTemplate;

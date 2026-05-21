import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Button } from "../../atoms";
import { theme } from "../../../themes/theme";

interface RegisterFormProps {
    onSubmit: () => void;
    disabledAction: boolean;
}

const RegisterForm = ({ onSubmit, disabledAction }: RegisterFormProps) => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const fields = [
        { label: 'FULL NAME', placeholder: 'John Doe', value: fullName, onChange: setFullName },
        { label: 'USERNAME', placeholder: 'johndoe123', value: username, onChange: setUsername },
        { label: 'EMAIL ADDRESS', placeholder: 'johndoe@example.com', value: email, onChange: setEmail },
        { label: 'DATE OF BIRTH', placeholder: 'YYYY-MM-DD', value: dob, onChange: setDob },
        { label: 'PASSWORD', placeholder: 'Minimum 8 chars', value: password, onChange: setPassword, secure: true },
        { label: 'CONFIRM PASSWORD', placeholder: 'Re-enter password', value: confirmPassword, onChange: setConfirmPassword, secure: true },
    ];

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {fields.map((field) => (
                    <View key={field.label}>
                        <Text style={styles.label}>{field.label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={field.placeholder}
                            placeholderTextColor={theme.colors.placeholder}
                            value={field.value}
                            onChangeText={field.onChange}
                            secureTextEntry={field.secure && !showPassword}
                            autoCapitalize="none"
                        />
                    </View>
                ))}
                <Button title="CREATE ACCOUNT" disabled={disabledAction} onSubmit={onSubmit} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', paddingBottom: 32 },
    label: { fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textLight, marginBottom: theme.spacing.xs, textTransform: 'uppercase' },
    input: { borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, backgroundColor: theme.colors.inputBackground, paddingHorizontal: 12, height: 48, fontSize: theme.fontSizes.md, color: theme.colors.text, marginBottom: theme.spacing.md },
});

export default RegisterForm;

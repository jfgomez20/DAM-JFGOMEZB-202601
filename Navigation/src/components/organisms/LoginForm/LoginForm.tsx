import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "../../atoms";
import { theme } from "../../../themes/theme";

interface LoginFormProps {
    onSubmit: () => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>USERNAME</Text>
            <TextInput
                style={styles.input}
                placeholder="johndoe"
                placeholderTextColor={theme.colors.placeholder}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <Text style={styles.label}>PASSWORD</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={[styles.input, styles.inputFlex]}
                    placeholder="••••••••"
                    placeholderTextColor={theme.colors.placeholder}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eye}>
                    <Text>{showPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgot}>
                <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <Button title="LOGIN" disabled={!username || !password} onSubmit={onSubmit} />

            <View style={styles.signupRow}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={onSubmit}>
                    <Text style={styles.signupLink}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%' },
    label: { fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textLight, marginBottom: theme.spacing.xs, textTransform: 'uppercase' },
    input: { borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, backgroundColor: theme.colors.inputBackground, paddingHorizontal: 12, height: 48, fontSize: theme.fontSizes.md, color: theme.colors.text, marginBottom: theme.spacing.md },
    inputRow: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, backgroundColor: theme.colors.inputBackground, paddingHorizontal: 12, marginBottom: theme.spacing.md },
    inputFlex: { flex: 1, borderWidth: 0, marginBottom: 0 },
    eye: { padding: 4 },
    forgot: { alignSelf: 'flex-end', marginBottom: theme.spacing.md },
    forgotText: { color: theme.colors.primary, fontSize: theme.fontSizes.sm, fontWeight: '600' },
    signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: theme.spacing.lg },
    signupText: { color: theme.colors.textLight, fontSize: theme.fontSizes.md },
    signupLink: { color: theme.colors.secondary, fontSize: theme.fontSizes.md, fontWeight: '700' },
});

export default LoginForm;

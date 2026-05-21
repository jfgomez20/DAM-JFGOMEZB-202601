import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

interface ButtonProps {
    title: String;
    disabled: boolean;
    onSubmit?: () => void;
}

const Button = ({ title, disabled, onSubmit }: ButtonProps) => {
    return (
        <Pressable
            onPress={onSubmit}
            disabled={disabled}
            style={[styles.button, disabled && styles.disabled]}>
            <Text style={styles.label}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        width: '100%',
        marginTop: theme.spacing.sm,
    },
    disabled: {
        backgroundColor: theme.colors.inputBorder,
    },
    label: {
        color: '#ffffff',
        fontSize: theme.fontSizes.md,
        fontWeight: '700',
        letterSpacing: 1,
    },
});

export default Button;

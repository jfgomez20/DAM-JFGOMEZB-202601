import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

export const styles = StyleSheet.create({
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

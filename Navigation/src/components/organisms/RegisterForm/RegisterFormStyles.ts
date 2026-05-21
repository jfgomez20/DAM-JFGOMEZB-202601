import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

export const styles = StyleSheet.create({
    container: { width: '100%', paddingBottom: 32 },
    label: { fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textLight, marginBottom: theme.spacing.xs, textTransform: 'uppercase' },
    input: { borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, backgroundColor: theme.colors.inputBackground, paddingHorizontal: 12, height: 48, fontSize: theme.fontSizes.md, color: theme.colors.text, marginBottom: theme.spacing.md },
});

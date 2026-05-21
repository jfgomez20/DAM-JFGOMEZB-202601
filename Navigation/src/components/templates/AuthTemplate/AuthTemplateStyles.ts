import { StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

export const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { flex: 1, paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.xl },
    header: { marginBottom: theme.spacing.xl },
    title: { fontSize: theme.fontSizes.xxl, fontWeight: '700', color: theme.colors.primary, textTransform: 'uppercase' },
    subtitle: { fontSize: theme.fontSizes.md, color: theme.colors.textLight, marginTop: theme.spacing.xs },
    body: { flex: 1 },
});

import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { theme } from "../../../themes/theme";

interface AuthTemplateProps {
    title: String;
    subtitle?: String;
    children: React.ReactNode;
}

const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                <View style={styles.body}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: theme.colors.background },
    container: { flex: 1, paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.xl },
    header: { marginBottom: theme.spacing.xl },
    title: { fontSize: theme.fontSizes.xxl, fontWeight: '700', color: theme.colors.primary, textTransform: 'uppercase' },
    subtitle: { fontSize: theme.fontSizes.md, color: theme.colors.textLight, marginTop: theme.spacing.xs },
    body: { flex: 1 },
});

export default AuthTemplate;

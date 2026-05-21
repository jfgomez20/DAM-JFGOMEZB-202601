import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../Routes";
import { theme } from "../../themes/theme";

type NavProp = NativeStackNavigationProp<AppStackParamList, 'RegisterProduct'>;

const RegisterProductPage = () => {
  const navigation = useNavigation<NavProp>();
  const [nombre, setNombre] = useState('');
  const [sku, setSku] = useState('');
  const [stock, setStock] = useState('');
  const [costo, setCosto] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>REGISTRAR{'\n'}PRODUCTO</Text>
        <Text style={styles.subtitle}>Create a new product listing</Text>

        <Text style={styles.label}>NOMBRE DEL PRODUCTO</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholderTextColor={theme.colors.placeholder} />

        <Text style={styles.label}>SKU / CÓDIGO</Text>
        <TextInput style={styles.input} value={sku} onChangeText={setSku} placeholderTextColor={theme.colors.placeholder} />

        <Text style={styles.label}>CANTIDAD EN STOCK</Text>
        <TextInput style={styles.input} value={stock} onChangeText={setStock} keyboardType="numeric" placeholderTextColor={theme.colors.placeholder} />

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>COSTO DE COMPRA</Text>
            <TextInput style={styles.input} placeholder="$" value={costo} onChangeText={setCosto} keyboardType="numeric" placeholderTextColor={theme.colors.placeholder} />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>PRECIO DE VENTA ($)</Text>
            <TextInput style={styles.input} value={precio} onChangeText={setPrecio} keyboardType="numeric" placeholderTextColor={theme.colors.placeholder} />
          </View>
        </View>

        <Text style={styles.label}>DESCRIPCIÓN</Text>
        <TextInput style={[styles.input, styles.textarea]} value={descripcion} onChangeText={setDescripcion} multiline numberOfLines={4} placeholderTextColor={theme.colors.placeholder} />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>CREAR PRODUCTO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backLink}>
          <Text style={styles.backText}>← Back to Catalog</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.lg, paddingBottom: 40 },
  title: { fontSize: theme.fontSizes.xxl, fontWeight: '700', color: theme.colors.primary },
  subtitle: { fontSize: theme.fontSizes.md, color: theme.colors.textLight, marginTop: 4, marginBottom: theme.spacing.lg },
  label: { fontSize: theme.fontSizes.sm, fontWeight: '600', color: theme.colors.textLight, marginBottom: theme.spacing.xs, textTransform: 'uppercase', letterSpacing: 0.5 },
  input: { borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, backgroundColor: theme.colors.inputBackground, paddingHorizontal: 12, height: 48, fontSize: theme.fontSizes.md, color: theme.colors.text, marginBottom: theme.spacing.md },
  textarea: { height: 100, textAlignVertical: 'top', paddingTop: 12 },
  row: { flexDirection: 'row', gap: 12 },
  half: { flex: 1 },
  btn: { backgroundColor: theme.colors.primary, paddingVertical: 14, borderRadius: 6, alignItems: 'center', marginTop: theme.spacing.sm },
  btnText: { color: '#fff', fontWeight: '700', letterSpacing: 1, fontSize: theme.fontSizes.md },
  backLink: { alignItems: 'center', marginTop: theme.spacing.md },
  backText: { color: theme.colors.textLight, fontSize: theme.fontSizes.md },
});

export default RegisterProductPage;

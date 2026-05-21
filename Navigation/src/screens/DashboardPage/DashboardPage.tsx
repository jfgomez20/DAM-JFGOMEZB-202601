import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../Routes";
import { theme } from "../../themes/theme";

type NavProp = NativeStackNavigationProp<AppStackParamList, 'Dashboard'>;

const PRODUCTS = [
  { id: '1', nombre: 'Camisa Azul', sku: 'CA001', stock: 25, ganancia: 10.00 },
  { id: '2', nombre: 'Camisa Azul', sku: 'CA001', stock: 25, ganancia: 12.50 },
  { id: '3', nombre: 'Camisa Azul', sku: 'CA001', stock: 25, ganancia: 14.80 },
  { id: '4', nombre: 'Camisa Azul', sku: 'CA001', stock: 25, ganancia: 11.20 },
];

const DashboardPage = () => {
  const navigation = useNavigation<NavProp>();
  const [search, setSearch] = useState('');

  const filtered = PRODUCTS.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Bienvenido,</Text>
            <Text style={styles.name}>Jhon Doe</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.newBtn} onPress={() => navigation.navigate('RegisterProduct')}>
          <Text style={styles.newBtnText}>NUEVO PRODUCTO</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar productos..."
            placeholderTextColor={theme.colors.placeholder}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <Text style={styles.sectionTitle}>RECENT PRODUCTS</Text>

        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{item.nombre}</Text>
                <Text style={styles.cardDetail}>SKU {item.sku}</Text>
                <Text style={styles.cardDetail}>Stock: {item.stock}</Text>
                <Text style={styles.cardDetail}>Ganancia: ${item.ganancia.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.sellBtn}>
                <Text style={styles.sellBtnText}>VENDER</Text>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, paddingHorizontal: theme.spacing.lg, paddingTop: theme.spacing.lg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg },
  welcome: { fontSize: theme.fontSizes.lg, color: theme.colors.text },
  name: { fontSize: theme.fontSizes.xl, fontWeight: '700', color: theme.colors.text },
  logoutBtn: { padding: theme.spacing.sm },
  logoutText: { color: theme.colors.primary, fontSize: theme.fontSizes.sm, fontWeight: '600' },
  newBtn: { backgroundColor: theme.colors.primary, paddingVertical: 14, borderRadius: 6, alignItems: 'center', marginBottom: theme.spacing.md },
  newBtnText: { color: '#fff', fontWeight: '700', letterSpacing: 1, fontSize: theme.fontSizes.md },
  searchBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 6, paddingHorizontal: 12, backgroundColor: theme.colors.inputBackground, marginBottom: theme.spacing.md },
  searchIcon: { marginRight: 8, fontSize: 14 },
  searchInput: { flex: 1, height: 44, fontSize: theme.fontSizes.md, color: theme.colors.text },
  sectionTitle: { fontSize: theme.fontSizes.sm, fontWeight: '700', color: theme.colors.textLight, marginBottom: theme.spacing.sm, letterSpacing: 0.5 },
  card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: theme.colors.inputBorder, borderRadius: 8, padding: theme.spacing.md, marginBottom: theme.spacing.sm },
  cardInfo: { flex: 1 },
  cardName: { fontSize: theme.fontSizes.md, fontWeight: '600', color: theme.colors.text },
  cardDetail: { fontSize: theme.fontSizes.sm, color: theme.colors.textLight, marginTop: 2 },
  sellBtn: { backgroundColor: theme.colors.primary, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 6 },
  sellBtnText: { color: '#fff', fontSize: theme.fontSizes.sm, fontWeight: '700' },
});

export default DashboardPage;

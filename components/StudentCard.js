import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function StudentCard({ name, course, units, isFullLoad }) {
  const [present, setPresent] = useState(false);

  return (
    <View style={[styles.card, isFullLoad && styles.cardFullLoad]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.metaRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{course}</Text>
          </View>
          <Text style={styles.units}>{`${units} units`}</Text>
        </View>

        {isFullLoad && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Full Load</Text>
          </View>
        )}
      </View>

      <Pressable
        onPress={() => setPresent((p) => !p)}
        style={[styles.presentBtn, present && styles.presentBtnOn]}
      >
        <Text style={[styles.presentText, present && styles.presentTextOn]}>
          {present ? "Present" : "Mark"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#cbd5e1",
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardFullLoad: {
    borderLeftColor: "#10b981",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e0e7ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#4338ca",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  chip: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4338ca",
  },
  units: {
    fontSize: 13,
    color: "#64748b",
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#d1fae5",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#047857",
  },
  presentBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
  },
  presentBtnOn: {
    backgroundColor: "#4338ca",
    borderColor: "#4338ca",
  },
  presentText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
  },
  presentTextOn: {
    color: "#ffffff",
  },
});

export default StudentCard;

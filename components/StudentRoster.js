import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "./StudentCard";

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

function StudentRoster() {
  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster((prev) => [...prev].reverse());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>IT313 • MOBILE PROGRAMMING</Text>
          <Text style={styles.title}>Class Roster</Text>
        </View>

        <View style={styles.countPill}>
          <Text style={styles.countNumber}>{students.length}</Text>
          <Text style={styles.countLabel}>students</Text>
        </View>
      </View>

      <Text
        style={styles.subtitle}
      >{`${students.length} students enrolled`}</Text>

      <Pressable onPress={reverseRoster} style={styles.reverseBtn}>
        <Text style={styles.reverseText}>Reverse Order</Text>
      </Pressable>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {roster.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingTop: 56,
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4338ca",
    borderRadius: 22,
    padding: 20,
    shadowColor: "#4338ca",
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#c7d2fe",
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
  },
  countPill: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  countNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
  },
  countLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#e0e7ff",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#475569",
    marginTop: 16,
    marginBottom: 10,
  },
  reverseBtn: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#c7d2fe",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
  },
  reverseText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4338ca",
  },
  list: {
    paddingBottom: 32,
  },
});

export default StudentRoster;

# IT313 Lab 4 - Student Roster Card Renderer

## The Problem

The IT313 registrar gave a list of currently enrolled students. This Expo (React Native)
app renders each student as a reusable card showing name, course, and units, with a
"Full Load" label only on students whose `isFullLoad` is true. A header shows the total
number of students, computed from the array (not hard-coded).

## Component Structure

- **StudentCard** - receives `name`, `course`, `units`, `isFullLoad` as destructured props
  and renders one card. The "Full Load" label uses `{isFullLoad && ...}`.
- **StudentRoster** - holds the `students` array, shows the header count with a template
  literal, and renders one `StudentCard` per student using `.map()` with `key={student.id}`.
  It returns a single root `View`.
- **src/app/index.tsx** - the app entry screen that renders `StudentRoster`.

## How to Run

```bash
npm install
npx expo start
```

Then scan the QR code with Expo Go, or press `w` for web / `a` for an Android emulator.

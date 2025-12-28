export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "teal" }}>Header (Marketing)</header>
      {children}
      <footer style={{ backgroundColor: "red" }}>Footer (Marketing)</footer>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "orange" }}>
        Header (Application)
      </header>
      {children}
      <footer style={{ backgroundColor: "green" }}>Footer (Application)</footer>
    </>
  );
}

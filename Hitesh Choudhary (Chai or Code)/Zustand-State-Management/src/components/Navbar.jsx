import useAppStore from "../store/appStore";

const Navbar = () => {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const login = useAppStore((state) => state.login);

  const handleLogin = () => {
    // Example: log in a fake user
    login({ name: "Kaushik", email: "kaushik@example.com" });
  };

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button type="button" onClick={toggleTheme}>
        ToggleTheme
      </button>

      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <span>Guest</span>
      )}

      <h2>Please Log In</h2>
      <button onClick={handleLogin}>Login</button>
    </nav>
  );
};

export default Navbar;

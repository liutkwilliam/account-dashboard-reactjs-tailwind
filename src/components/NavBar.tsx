import { Link } from "react-router-dom"

type NavBarProps = {
  isAuthenticated: boolean;
  onLogout: () => void;
};

function NavBar({ isAuthenticated, onLogout }: NavBarProps) {
  const links = [
    { text: "Sign in", link: "sign-in", protected: false },
    { text: "Sign up", link: "sign-up", protected: false },
    { text: "Account", link: "account", protected: true },
  ];

  return (
    <div>
      {links
        .filter(link => link.protected === isAuthenticated)
        .map((link) => (
          <Link className="p-4 m-4 hover:underline" to={link.link} key={link.text}>
            {link.text}
          </Link>
        ))}
      {isAuthenticated && (
        <button className="p-4 m-4 hover:underline" onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default NavBar;

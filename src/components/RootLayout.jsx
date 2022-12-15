import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="ml-28">{children}</main>
    </>
  );
}

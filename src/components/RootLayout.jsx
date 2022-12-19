import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-28">{children}</main>
    </>
  );
}

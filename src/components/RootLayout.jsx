import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-28">
        <div className="container">{children}</div>
      </main>
    </>
  );
}

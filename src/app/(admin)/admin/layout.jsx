import AdminSideBar from "./AdminSideBar";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-5 h-screen overflow-auto">
      <div className="col-span-1 bg-secondary-50/50 p-4">
        <AdminSideBar />
      </div>
      <div className="col-span-4 p-4">{children}</div>
    </div>
  );
}
export default Layout;

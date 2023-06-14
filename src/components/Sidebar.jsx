const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between"></div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;

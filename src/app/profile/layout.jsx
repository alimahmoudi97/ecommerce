import Sidbar from "@/components/Sidbar";
import Table from "@/components/Table";
import Link from "next/link";

function ProfileLayout({ children }) {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-5 h-full">
        <div className="bg-secondary-50 bg-opacity-50 col-span-2 md:col-span-1 p-4">
          <Sidbar />
        </div>
        <div className="bg-secondary-0 col-span-3 md:col-span-4 flex flex-col space-y-8 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
export default ProfileLayout;

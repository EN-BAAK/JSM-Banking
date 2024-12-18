import MobileNav from "@/src/components/MobileNav";
import Sidebar from "@/src/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    $id: "string",
    email: "string",
    userId: "string",
    dwollaCustomerUrl: "string",
    dwollaCustomerId: "string",
    firstName: "string",
    lastName: "String",
    name: "String",
    address1: "String",
    city: "String",
    state: "String",
    postalCode: "String",
    dateOfBirth: "String",
    ssn: "String",
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />

          <div>
            <MobileNav
              user={loggedIn}
            />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}

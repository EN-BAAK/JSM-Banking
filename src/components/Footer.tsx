import Image from "next/image";
import React from "react";
import { logoutAccount } from "../lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps): React.JSX.Element => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.replace("/sign-in");
  };

  const username = `${user.firstName} ${user.lastName}`;

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{username[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="tet-14 truncate font-semibold text-gray-700">
          {username}
        </h1>

        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;

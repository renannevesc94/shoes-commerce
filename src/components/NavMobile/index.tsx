import Hamburger from "hamburger-react";
import { useState } from "react";
import { IconUser } from "../Icons";
import { ItemsMenuLi } from "../index";
import { useProtected } from "../ProtectedRouter/hooks/use-protected";
import { useAuth } from "../../providers/AuthProvider";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useProtected();
  const { logout } = useAuth();

  return (
    <div className="lg:hidden">
      <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="fixed left-0 w-4/5 shadow-md top-[3.5rem] pt-0 border-2  ">
          <div className="bg-slate-100 w-full h-10 flex items-center p-2 cursor-pointer">
            {isAuthenticated && (
              <>
                <IconUser />
                <button className="font-semibold ml-2" onClick={() => logout()}>
                  SAIR
                </button>
              </>
            )}
          </div>
          <ul className="grid gap-2">
            <ItemsMenuLi isMobile={true}>Feminino</ItemsMenuLi>
            <ItemsMenuLi isMobile={true}>Masculino</ItemsMenuLi>
            <ItemsMenuLi isMobile={true}>Infantil</ItemsMenuLi>
            <ItemsMenuLi isMobile={true}>Promoções</ItemsMenuLi>
          </ul>
        </div>
      )}
    </div>
  );
};

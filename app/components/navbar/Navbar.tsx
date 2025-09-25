"use client";
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo"
import Search from "./search";
import UserMenu from "./UserMenu"
import {User} from "@prisma/client"
import {SafeUser} from "@/app/types";
interface NavbarProps {
    currentUser?: SafeUser | null;
}
const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) =>  {
    console.log({currentUser});
    return(
        <div className="fixed w-full bg-white z-20 shadow-sm">
            <div 
                className = "py-4 border-b-[2px]">
            <Container>
                <div 
                    className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    "
                >
                    <Logo/>
                    <Search/>
                    <UserMenu currentUser={currentUser}/>
                </div>
            </Container>
            </div> 
            <Categories/>
        </div>
    );
}
export default Navbar; 
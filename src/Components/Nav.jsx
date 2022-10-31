import { Alien } from "phosphor-react";

import Logo from "../assets/Logo.png";

export default function Nav() {
  return (
    <div>
      <div className="flex sm:flex-col md:flex-col  flex-row justify-between mx-20 p-5">
        <img src={Logo} alt="" className="w-2" />
        <nav>
          <div>
            <ul className="flex  md:flex-col flex-row gap-3">
              <li>Home</li>
              <li>Login</li>
              <li>SignUp</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

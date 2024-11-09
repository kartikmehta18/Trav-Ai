import React, { useState } from "react";
import "../../index.css";
import { Button } from '../ui/button';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useNavigate, Link } from "react-router-dom";
import LogoutButton from './LogoutButton'; // Import LogoutButton
import Profile from './Profile'; // Import Profile

function Header() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="flex justify-between items-center px-5">
      <Link to="/">
        <img src="/logo.png" alt="Logo" />
      </Link>
      <div>
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <Link to="/my-trips">
              <Button variant="outline" className="text-orange-500 border-orange-500">
                My Trips
              </Button>
            </Link>
            <LogoutButton /> {/* Render LogoutButton */}
            <Profile /> {/* Render Profile */}
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)} className="cursor-pointer">
            Login
          </Button>
        )}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <Button onClick={() => setOpenDialog(false)} className="bg-white h-1 flex flex-row justify-end hover:bg-white">❌</Button>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.png" alt="Logo" />
                <h2 className="font-bold text-lg mt-7">Sign In With Auth0</h2>
                <p>Sign in to the App with Auth0 authentication securely</p>
                <Button onClick={() => loginWithRedirect()} className="w-full mt-5 flex gap-4 items-center">
                  Sign In
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Header;

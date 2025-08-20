import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <nav className="w-full bg-white shadow-md z-50 sticky top-0">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' flex items-center gap-2'}>
              <Link to="/">
                <img src={"/branding/assets/logo-0.png"} className="h-7 w-7 mr-2 inline-block" />
                <span className="font-[Roboto] font-bold text-xl text-primary tracking-tight">Medivault</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/appointments">Appointments</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/medical-records">Medical Records</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/prescriptions">Prescriptions</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/messaging">Messaging</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/notifications">Notifications</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" id="nav-login">
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild id="nav-signup">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  </nav>
);

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { BrandLogo } from '@/components/BrandLogo';
import { Link } from 'react-router-dom';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export function Navigation() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-100 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <BrandLogo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild id="signup-nav" size="sm" className="ml-3 bg-blue-700 text-white hover:bg-blue-900">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

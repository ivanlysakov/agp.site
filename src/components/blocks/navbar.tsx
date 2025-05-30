import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  contact?: {
    phone: string;
    email: string;
  };
}

const defaultMenuItems: MenuItem[] = [
  { title: "Головна", url: "/" },
  {
    title: "Послуги",
    url: "/services",
  },
  {
    title: "Про нас",
    url: "/about",
  },
  {
    title: "Контакти",
    url: "/contacts",
  },
];

export const Navbar = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "Абрамов & Галушко",
    title: "Абрамов & Галушко",
  },
  menu = defaultMenuItems,
  contact = {
    phone: "+380 68 154 5657",
    email: "ag.lawyer.ua@gmail.com",
  },
}: NavbarProps) => {
  return (
    // Professional navbar with clean styling
    <section className="sticky top-0 z-50 glass-effect border-b border-border/30">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center py-5 lg:flex">
          <div className="flex items-center gap-10">
            {/* Professional logo */}
            <Link to={logo.url} className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src={logo.src}
                  className="max-h-12 rounded-xl transition-transform group-hover:scale-105 shadow-professional"
                  alt={logo.alt}
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                {logo.title}
              </span>
            </Link>

            {/* Professional navigation */}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Professional contact info and CTA */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-primary">
                {contact.phone}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {contact.email}
              </span>
            </div>
            <Button
              asChild
              size="sm"
              className="px-6 py-2 font-semibold shadow-professional hover:shadow-professional-lg transition-all duration-200"
            >
              <Link to="/contacts">Зв'язатися</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu - Professional style */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between py-4">
            {/* Mobile logo */}
            <Link to={logo.url} className="flex items-center gap-3">
              <img
                src={logo.src}
                className="max-h-10 rounded-lg shadow-professional"
                alt={logo.alt}
              />
              <span className="text-lg font-bold tracking-tight text-primary">
                {logo.title}
              </span>
            </Link>

            {/* Professional mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left pb-8">
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-3">
                      <img
                        src={logo.src}
                        className="max-h-8 rounded-lg shadow-professional"
                        alt={logo.alt}
                      />
                      <span className="text-lg font-bold text-primary">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-10">
                  {/* Professional mobile menu items */}
                  <div className="space-y-3">
                    {menu.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="flex items-center py-4 px-5 rounded-2xl hover:bg-muted transition-colors text-lg font-semibold text-foreground hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Professional contact section */}
                  <div className="space-y-6 p-8 bg-muted/50 rounded-3xl">
                    <div className="text-center space-y-3">
                      <div className="font-bold text-lg text-primary">
                        {contact.phone}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {contact.email}
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-full py-4 font-semibold shadow-professional"
                    >
                      <Link to="/contacts">Зв'язатися з нами</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

// Professional menu item rendering
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="px-5 py-3 font-semibold hover:bg-muted/50 transition-colors rounded-xl">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="glass-effect border border-border/30 p-6 w-[550px] max-w-[95vw] rounded-3xl shadow-professional-lg">
          <div className="grid grid-cols-1 gap-4">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-12 w-max items-center justify-center rounded-xl bg-transparent px-5 py-3 text-sm font-semibold transition-all hover:bg-muted/50 hover:text-primary"
      >
        <Link to={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      to={item.url}
      className="block select-none space-y-2 rounded-2xl p-5 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
    >
      <div className="text-sm font-semibold leading-none">{item.title}</div>
      {item.description && (
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {item.description}
        </p>
      )}
    </Link>
  );
};

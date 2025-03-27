import SidebarNavigation from "@/app/components/sidebar/SidebarNavigation";
import Navigation from "@/app/components/Navigation";

export default function Calculations() {
  return (
    <div>
      <Navigation  showDesktopNavigation={false} showSearch={false} showMobileMenu={false} showNotifications={true} showMessages={true} />
      <SidebarNavigation />
    </div>
  );
}

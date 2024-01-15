import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import Search from "./Search";
import Messenger from "./Messenger";
import ProfileIcon from "./ProfileIcon";

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileIcon />
      <Messenger />
    </>
  );
};

export default SidebarItems;

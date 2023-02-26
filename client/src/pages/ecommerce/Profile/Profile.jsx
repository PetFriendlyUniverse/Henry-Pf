import { Tabs } from "flowbite-react";
import TabUser from "./components/TabUser";
import TabStore from "./components/TabStore";

function Profile() {
  return (
    <div className="flex justify-center border-2 border-black pb-28 pt-36 lg:items-center">
      <div className="scroll flex h-screen w-3/4 flex-col-reverse justify-end  overflow-hidden border-2 border-gray-200">
        <Tabs.Group
          aria-label="Tabs with underline"
          style="underline"
          className=""
        >
          <Tabs.Item title="Perfil" className="">
            <TabUser />
          </Tabs.Item>
          <Tabs.Item title="Tienda">
            <TabStore />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default Profile;

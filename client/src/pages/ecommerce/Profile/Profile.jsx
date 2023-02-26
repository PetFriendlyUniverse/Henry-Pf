import { Tabs } from "flowbite-react";
import TabUser from "./components/TabUser";
import TabStore from "./components/TabStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getStoreByUser,
  getUserApi,
} from "../../../redux/features/users/usersActions";

function Profile() {
  const user = useSelector((state) => state.User?.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserApi(user.id));
  }, []);
  function redirectedStore() {
    console.log("redirecting to store...");
  }

  return (
    <div className="flex justify-center  pb-28 pt-10 lg:items-center">
      <div className=" flex h-full w-3/4 flex-col-reverse justify-end border-2 border-gray-200">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Perfil">
            <TabUser />
          </Tabs.Item>

          <Tabs.Item disabled={user.store ? false : true} title="Tienda">
            <TabStore />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default Profile;

import {useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, fetchUsers} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import {useThunk} from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
   doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
   doAddUser();
  }

  let content = null;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full"/>;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} loading={isCreatingUser}>+ Add User</Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;

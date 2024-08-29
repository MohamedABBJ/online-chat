interface UserLoginStateStoreProps {
  loggedIn?: boolean;
  setLoggedIn: (value: boolean) => void;
  userData: {
    user_id: number;
    user_name: string;
  };
  setUserData: (value: { user_id: number; user_name: string }) => void;
}
export default UserLoginStateStoreProps;

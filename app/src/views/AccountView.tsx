import { useEffect, useState } from "react";
import { getUserFromDatabase } from "../firebase/database";

const AccountView = () => {
  let uid = sessionStorage.getItem('User ID');
  let userId = uid ? uid : "";

  const [userData, setUserData] = useState({});

  async function getUserData() {
    if (userId) {
      try {
        const tempDoc = await getUserFromDatabase(userId);
        if (tempDoc) {
          setUserData(tempDoc);
        }
      } catch (error) {
        alert(error);
      }
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  let data = [
    {label: "First name", content: userData.firstName },
    {label: "Last name", content: userData.lastName },
    {label: "Email", content: userData.email }
  ]

  return (<div>
    <h1 className="text-6xl p-4 m-4 font-bold">Account View</h1>
    {/* create elements here */}
    {data.map(dataElement => {
      return (
        <div className="flex">
          <span className="flex-1 text-left p-2 m-1">{dataElement.label}</span>
          <span className="flex-1 text-left p-2 m-1">{dataElement.content}</span>
        </div>
      )
    })}
  </div>)
}

export default AccountView
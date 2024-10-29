import { BACKEND_URL } from "@/config";
import { User } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const fetchUserDetails = () => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    async function fetchUserData() {
      const res = await axios.get(`${BACKEND_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if(res.data.status)
      {
        setUserData(res.data.user)
      }
    }


    fetchUserData()
  }, []);

  return userData
};

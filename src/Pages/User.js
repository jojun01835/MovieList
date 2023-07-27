import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./User.module.scss";
const User = () => {
  const { id } = useParams();
  const [loading, setLoding] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/" + id).then((res) => {
      setUser(res.data);
      setLoding(false);
    });
  }, []);

  const userDetail =
    loading === true ? (
      <div className={`${styles.loading}`}>Loding...</div>
    ) : (
      <div className={`${styles.user}`}>
        <div className={`${styles.box}`}></div>
        <div className={`${styles.name}`}>이름 : {user.name}</div>
        <div className={`${styles.email}`}>이메일 : {user.phone}</div>
        <div className={`${styles.phone}`}>전화번호 : {user.email}</div>
        <div className={`${styles.website}`}>웹사이트 : {user.website}</div>
      </div>
    );

  return (
    <div>
      <h2 className={`${styles.h2}`}>User Info</h2>
      {userDetail}
    </div>
  );
};

export default User;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserList.module.scss";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((user, i) => {
        return (
          <div className={`${styles.card}`} key={user.id}>
            <div className={`${styles.cardBody}`}>
              <Link to={`/Users/${user.id}`} className={`${styles.Line}`}>
                {user.name}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

import React from "react";
import styles from "../Subscribe.module.css";
import Button from "../../../components/Button/Button";
import { MdOutlineEmojiPeople, MdCardTravel } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import Input from "../../../components/Input/Input";

interface UserInfo {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onClick: React.MouseEventHandler<Element>;
  onClick: React.FormEventHandler<HTMLFormElement>;
}

const UserExperience = ({ onChange, onClick }: UserInfo) => {
  return (
    <form className={styles.inputContainer} onSubmit={onClick}>
      <div className={styles.profileOptionsContainer}>
        <div>
          <MdOutlineEmojiPeople size={200} className={styles.icons} />
          <Input
            type="radio"
            name="userProfile"
            label="Beginner"
            value="beginner"
            onChange={onChange}
          />
        </div>
        <div>
          <MdCardTravel size={200} className={styles.icons} />
          <Input
            type="radio"
            name="userProfile"
            label="Adventurer"
            value="adventurer"
            onChange={onChange}
          />
        </div>
        <div>
          <SiYourtraveldottv size={200} className={styles.icons} />
          <Input
            type="radio"
            name="userProfile"
            label="Long term traveller"
            value="longTermTraveller"
            onChange={onChange}
          />
        </div>
      </div>
      <div className={styles.submitBtn}>
        <Button size="big" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UserExperience;

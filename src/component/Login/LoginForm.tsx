import React, { ChangeEvent, FormEvent, useState } from "react";
import LoginConfirm from "./LoginConfirm";

type userType = {
  uName: string;
  uPassword: string;
  error: string | null;
};

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState<userType>({
    uName: "",
    uPassword: "",
    error: null,
  });
  const [showDialog, setShowDialog] = useState<boolean>(false);
  //
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted", userInfo.uName, userInfo.uPassword);
    if (userInfo.uName == "" || userInfo.uPassword === "") {
      setUserInfo({
        ...userInfo,
        error: "Please check input details",
      });
    } else {
      setShowDialog(true);
    }
  };

  const updateUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      error: null,
      [name]: value,
    });
  };

  return (
    <div className="m-4 p-4 border">
      <h3 className="text-blue-800 mb-4">Login User</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <label htmlFor="uName" className="w-[100px]">
            Name:
          </label>
          <input
            className="border px-2"
            type="text"
            name="uName"
            onChange={updateUserInfo}
            value={userInfo.uName}
          />
          <span>{userInfo.uName}</span>
        </div>

        <div className="flex mt-5">
          <label className="w-[100px]" htmlFor="uPassword">
            Password:
          </label>
          <input
            className="border px-2"
            type="password"
            name="uPassword"
            onChange={updateUserInfo}
            value={userInfo.uPassword}
          />
          <span>{userInfo.uPassword}</span>
        </div>
        {userInfo.error && (
          <div className="text-red-500 mt-4">Error : {userInfo.error}</div>
        )}
        <div className="mt-4">
          <button
            className="bg-slate-500 text-gray-200 px-6 py-1 mr-4"
            type="submit"
          >
            Submit
          </button>
          <span
            className="border p-1 px-4 cursor-pointer "
            onClick={() => {
              setUserInfo({
                uName: "",
                uPassword: "",
                error: null,
              });
            }}
          >
            Cancel
          </span>
        </div>
      </form>
      <LoginConfirm isOpenDialog={showDialog} />
    </div>
  );
};

export default LoginForm;

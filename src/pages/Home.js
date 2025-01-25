import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
//
let userInfo = {
  firstName: "",
  lastName: "",
};
const Home = () => {
  const [user, setUser] = useState(userInfo);
  const { userList } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  //
  const updateUser = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //
  const resetForm = () => {
    setUser(userInfo);
  };
  //
  const formHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
    resetForm();
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="bg-slate-200 mt-4 p-4 w-[400px]">
          <h3 className="text-left border border-b-slate-400 pb-2 font-semibold mb-6">
            Enter User Detail
          </h3>
          <form onSubmit={formHandler}>
            <div className="mb-4">
              <label htmlFor="first_name">
                First Name:
                <input
                  className="border px-1 border-green-600 ml-4"
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={updateUser}
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="last_name">
                Last Name:
                <input
                  className="border px-1 border-green-600 ml-4"
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={updateUser}
                />
              </label>
            </div>
            <div className="text-right mt-6">
              <button
                className="bg-blue-900 border px-4 mr-4 text-white "
                type="submit"
              >
                Submit
              </button>
              <button
                type="button"
                className="border border-blue-950 px-4"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="bg-slate-200 p-4 flex-1 ml-4 mt-4">
          <h3 className="mb-4 font-semibold border border-b-slate-400 pb-2 ">
            User List
          </h3>
          {userList?.length > 0 ? (
            <ul className="pl-4">
              {userList.map((item, ind) => {
                return (
                  <li className="list-decimal" key={item + "-" + ind}>
                    {`${item.firstName} ${item.lastName}`}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>Error : User not found...</div>
          )}
        </div>
      </div>
      <div className="bg-slate-200 mt-6 p-4">
        <User />
      </div>
    </>
  );
};

export default Home;

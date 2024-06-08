import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Login() {
  const inputClassname = "border border-gray-500 rounded p-2";
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(user);
    setUser(formData);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.replace(/\s+/g, "").toLowerCase();
    setUsername(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setName(value);
  };

  return (
    <>
      <div className="flex py-10 rounded border border-gray-500 items-center justify-center gap-5 flex-col w-[500px] my-20">
        <span className="text-2xl font-bold">Login Form</span>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="username"
            required={true}
            className={inputClassname}
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="name"
            required={true}
            className={inputClassname}
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required={true}
            className={inputClassname}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required={true}
            className={inputClassname}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

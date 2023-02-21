import React, { useState } from "react";
// import axios from "axios";

const Image = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    birthdate: "",
    photo: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("birthdate", newUser.birthdate);
    formData.append("name", newUser.name);
    console.log(
      "information",
      newUser.photo.name + newUser.birthdate + newUser.name
    );


      try {
        const config = {
          method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify(newUser),
     
        };

        const res = await fetch("/api/auth", config);
        const data = await res.json();
        console.log(data)

        console.log(data);
      } catch (err) {
        console.error(err);
      }
  };


  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthdate"
        value={newUser.date}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  );
};

export default Image;

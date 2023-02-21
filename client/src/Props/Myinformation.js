import React from "react";
import Bluebtn from "./Bluebtn";
import { useState } from "react";
import Input from "./Input";
import "./myInfo.scss";
import axios from "axios";
// import Singup from '../Components/Singup';

const Myinformation = () => {
  // Initialize the state for the image file and error message
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  // Handle file input change
  const onChange = (e) => {
    setImage(e.target.files[0]);
    setError(null);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setImage(null);
  };
  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // Create a form data object
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);
    // Make the POST request to the server
    try {
      axios
        .post("/api/auth/uploadimg", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="info_container">
            <div className="image_form">
              <h1 className="myinformation_title2">My information</h1>
              <form method="post" enctype="multipart/form-data">
                <div className="first_info_section">
                  {image && (
                    <img
                      className="upload_img"
                      src={URL.createObjectURL(image)}
                      alt="remote"
                    />
                  )}
                  <input type="file" onChange={onChange} />
                  {error && <p>{error}</p>}
                  <p className="img_info">
                    Image size should be at least 320 px big, and <br />
                    less then 500KB.Allowed files .png and .jpg
                  </p>
                </div>
                <div className="scnd_info_section">
                  <button onClick={onSubmit} className="upload" type="button">
                    Upload profile photo
                  </button>
                  <button
                    onClick={handleDelete}
                    className="delete"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </form>
              <div className="info_inputs">
                <Input label="Name" placeholder="name" img={""} />
                <Input label="Email" placeholder="email" img={""} />
                <Input label="Username" placeholder="username" img={""} />
              </div>
              <div className="info_btn">
                <Bluebtn btn="Save Details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myinformation;

// import React from 'react'
// import Bluebtn from './Bluebtn';
// import { useState } from 'react';
// import Input from './Input';
// import "./myInfo.scss"
// import axios from 'axios';
// // import Singup from '../Components/Singup';

// const Myinformation = () => {
//   // Initialize the state for the image file and error message
//   const [image, setImage] = useState("");
//   const [title, setTitle]= useState("")
//   const [error, setError] = useState(null);
//   // Handle file input change
// //  const onChange = (e) => {
// //     setImage({ ...image,  e.target.files[0] });
// //    setError(null);
// //  };

//   const handleDelete = (e) => {
//     e.preventDefault();
//     setImage({ ...image, profilePic: "" });
//   };
//   // Handle form submission
//  const onSubmit = async(e) => {
//    e.preventDefault();

//    // Create a form data object
//    const formData = new FormData();
//    console.log("==", image, "===", image.name, title);
//    formData.append("title", title);
//    formData.append("image", image);
//    console.log(formData);
//    // Make the POST request to the server
//      axios.post("/api/auth/uploadimg", formData,)
// .then((res)=>{
//   console.log(res.data)
// }).catch((error)=>{
//   console.log(error);
// })
//  };
//   return (
//     <>
//       <div className="wrapper">
//         <div className="container">
//           <div className="info_container">
//             <div className="image_form">
//               <h1 className="myinformation_title2">My information</h1>
//               <form method="post">
//                 <div className="first_info_section">

//                   <img src={`http://localhost:6000/${imgUrl}`} alt="remote" />
//                    {console.log(`http://localhost:6000/${image.imgUrl}`)}

//                   <input
//                     type="file"
//                     alt="dambo"
//                     onChange={(e) => setImage(e.target.files[0])}
//                   />
//                   {error && <p>{error}</p>}
//                   <p className="img_info">
//                     Image size should be at least 320 px big, and <br />
//                     less then 500KB.Allowed files .png and .jpg
//                   </p>
//                 </div>
//                 <div className="scnd_info_section">
//                   <button onClick={onSubmit} className="upload" type="button">
//                     Upload profile photo
//                   </button>
//                   <button
//                     onClick={handleDelete}
//                     className="delete"
//                     type="button"
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 <input
//                   name="title"
//                   type="text"
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </form>
//               <div className="info_inputs">
//                 <Input label="Name" placeholder="name" img={""} />
//                 <Input label="Email" placeholder="email" img={""} />
//                 <Input label="Username" placeholder="username" img={""} />
//               </div>
//               <div className="info_btn">
//                 <Bluebtn btn="Save Details" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Myinformation

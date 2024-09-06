import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Css/profile.css";

const Profile = () => {
  // Fetch email and password from the Redux store
  const email = useSelector((state) => state.email);
  // useSelector((state)=>)
//   const password = useSelector((state) => state.password);

  // State to store the logged-in user's details
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Fetch profile data from the API when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8181/api/v1/auth/email"
        );
        const userDetails = response.data;
        if (userDetails) {
          const loggedInUserDetails = userDetails.find(
            (user) => user.gmail === email
          );

          setLoggedInUser(loggedInUserDetails);
          console.log(loggedInUser);
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  },[]); // Fetch profile data when email or password changes

  // Event handler for the "Save" button
  const handleSave = () => {
    // Your save logic here, you can use the 'loggedInUser' state to access the user details.
    alert("Changes saved successfully!");
  };

  return (
    <div>
      {loggedInUser && (
        <div className="profile_container">
          <div className="profile_center">
            {/* <div className="profile_img_card"> */}
              {/* <img
                src={img}
                alt="profileImage"
                style={{ height: "200px", borderRadius: "200px" }}
            /> */}
              {/* <label className="profile_input_image_label">
                Profile Image
              </label> */}
            {/* </div> */}
            <div className="profile_section">
              <div className="profile_section_input">
                <label className="pl">Name</label>
                <input
                  type="text"
                  value={loggedInUser.name}
                  className="profile_input"
                  readOnly // Added 'readOnly' to prevent editing the first name
                />
              </div>
              <div className="profile_section_input">
                <label className="pl">email</label>
                <input
                  type="email"
                  value={loggedInUser.gmail}
                  className="profile_input"
                  readOnly // Added 'readOnly' to prevent editing the email
                />
              </div>
              <div className="profile_section_input">
                <label className="pl">contact</label>
                <input
                  type="tel"
                  value={loggedInUser.mobno}
                  className="profile_input"
                  readOnly // Added 'readOnly' to prevent editing the contact number
                />
              </div>
            </div>
            <div className="profile_save_Button">
              <button className="save_button" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
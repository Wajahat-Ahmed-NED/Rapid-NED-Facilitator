// import { Add } from "@material-ui/icons";
import React from "react";
// import { useHistory } from "react-router-dom";
import { Link, Route, Router, useNavigate } from "react-router-dom";
import "./SidebarOption.css";

function SidebarOptions() {

  // const history = useNavigate()
  // const handleClick = () => {
  //   history("/softwareengg")
  // }
  return (
    <div className="sidebarOptions">

      <h2 style={{ marginLeft: '30px', marginBottom: '20px' }}>Categories</h2>

      <Link to="/generalquestions" style={{ textDecoration: 'none' }}>
        <div className="sidebarOption" >
          <img
            src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
            alt=""
          /> <p > General Questions</p>
        </div></Link>



      <Link to="/admissionfacility" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>Admission Faculty</p>
      </div></Link>

      <Link to="/softwareengg" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Software Engineering</p>
      </div></Link>
      <Link to="/mechanicalengg" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Mechanical Engineerning</p>
      </div></Link>

      <Link to="/electricalengg" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <p>Electrical Engineering</p>
      </div></Link>

      <Link to="/bcit" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>BCIT</p>
      </div></Link>

      <Link to="/cisengg" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>CIS Engineering</p>
      </div></Link>

      <Link to="/admissionpolicies" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Admission Policies</p>
      </div></Link>

      <Link to="/hostels" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Hostels</p>
      </div></Link>

      <Link to="/otherdepartments" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p>Other Departments</p>
      </div></Link>

      <Link to="/otherqueries" style={{ textDecoration: 'none' }}><div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Other Queries</p>
      </div></Link>
      {/* <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div> */}
    </div>
  );
}

export default SidebarOptions;

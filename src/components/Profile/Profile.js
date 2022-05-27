import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <React.Fragment>
        <div>{props.firstName}</div>
        <div>{props.lastName}</div>
        <div>{props.email}</div>
        <div>{props.password}</div>
        <div>{props.season}</div>

        <Link to="/dashboard">Go to dashboard page</Link>
    </React.Fragment>
  
  )
}

export default Profile;

//import {Link} from 'react-router-dom'
import "./Profile.css"
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';

 function Profile({user}) {
     
   return (
<>
    <div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">User Profile</h1>
    </div>
    <div className="userContainer">
      <div className="userShow">

        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            {/* <PermIdentityIcon className="userShowIcon" /> */}
            <span className="userShowInfoTitle">{user.username}</span>
          </div>
          {/* <span className="userShowTitle">Active Since</span>
          <div className="userShowInfo"> */}
            {/* <CalendarTodayIcon className="userShowIcon" />
            <span className="userShowInfoTitle">{user.created_at ? dateformat(user.created_at, 'dddd, mmmm dS yyyy') : ""}</span> */}
          {/* </div> */}
          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            {/* <MailOutlineIcon className="userShowIcon" /> */}
            <span className="userShowInfoTitle">{user.email}</span>
          </div>  
        </div>
      </div>
      
    </div>
  </div> 
  
  </>
  );
 }
export default Profile
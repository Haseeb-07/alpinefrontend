import React from 'react';
import { FaHome, FaUser, FaGlobe, FaMoneyBill, FaMedal, FaMountain, FaCertificate, FaUsers, FaCalendarAlt } from 'react-icons/fa';

class Sidebar extends React.Component {
  render() {
    const sidebarStyle = {
      backgroundColor: '#004D99',
      padding: '10px',
      color: '#FFFFFF',
      borderRadius: '20px', // Add rounded corners
    };

    const listItemStyle = {
      listStyleType: 'none',
      fontSize: '1.2em',
    };

    const listItemIconStyle = {
      marginRight: '5px', // Adjust icon margin
    };

    const listItemMarginStyle = {
      marginBottom: '30px', // Increase vertical margin between list items
    };

    return (
      <div className="sidebar" style={sidebarStyle}>
        <ul style={listItemStyle}>
          <li style={listItemMarginStyle}><FaHome style={listItemIconStyle} /> Dashboard</li>
          <li style={listItemMarginStyle}><FaUser style={listItemIconStyle} /> Profile</li>
          <li style={listItemMarginStyle}><FaGlobe style={listItemIconStyle} /> Platforms</li>
          <li style={listItemMarginStyle}><FaMoneyBill style={listItemIconStyle} /> Billing</li>
          <li style={listItemMarginStyle}><FaMedal style={listItemIconStyle} /> AlpineEdge champions</li>
          <li style={listItemMarginStyle}><FaMountain style={listItemIconStyle} /> Mountain rescue</li>
          <li style={listItemMarginStyle}><FaCertificate style={listItemIconStyle} /> Certificates</li>
          <li style={listItemMarginStyle}><FaUsers style={listItemIconStyle} /> Affiliates</li>
          <li style={listItemMarginStyle}><FaCalendarAlt style={listItemIconStyle} /> Economic calendar</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

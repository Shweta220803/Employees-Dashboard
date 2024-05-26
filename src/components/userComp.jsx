import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'; // Importing arrow icons from React Icons
import userData from '../api/userData.json';
import logoImg from '../images/logo1.jpeg';
import logoImg2 from '../images/logo2.jpeg';
import userImg from '../images/user.jpeg';
import userImg1 from '../images/user1.jpeg';
import userImg2 from '../images/user2.jpeg'
import uiImg from '../images/uiux.jpeg';
import goldMedalImg from '../images/gold.jpeg';
import silverMedalImg from '../images/silver.jpeg';
import bronzeMedalImg from '../images/bronze.jpeg';

const UserComp = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  // Function to toggle between up and down arrows and set row color
  const toggleArrowAndColor = (rank) => {
    if ([1, 3, 4, 7].includes(rank)) {
      return { arrow: <IoMdArrowDropup className='text-success' />};
    } else {
      return { arrow: <IoMdArrowDropdown className='text-danger'/> };
    }
  };

  return (
    <Container>
      <Row className="text-center mt-4">
        <Col>
          <h1 className="main-head">
            <img src={logoImg} width="90px" alt="Logo" />
            <span className="heading">ODERS</span>
          </h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={10} className="d-flex align-items-center">
          <img src={logoImg2} width="40px" height="40px" alt="" />
          <h5 className="my-2 mb-0">Employees Activity Dashboard</h5>
        </Col>
        <Col md={2} className="d-flex justify-content-end align-items-center">
          <p className="time-s">
            May 26, 2024
            <br />
            <span>10:29 PM</span>
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={10}>
          <Table striped>
            <thead style={{ backgroundColor: 'blue', color: 'white' }}>
              <tr>
                <th style={{backgroundColor:"blue",color:"white"}}></th>
              <th style={{backgroundColor:"blue",color:"white"}}>Rank</th>
               <th style={{backgroundColor:"blue",color:"white"}}>Name</th>
              <th style={{backgroundColor:"blue",color:"white"}}>Designation</th>
               <th style={{backgroundColor:"blue",color:"white"}}>No. of Hours Worked</th>
                <th style={{backgroundColor:"blue",color:"white"}}>Changes</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                const { arrow, color } = toggleArrowAndColor(user.Rank);
                const medalWidth = user.medalWidth || '50px'; // Default width if not provided
                const medalHeight = user.medalHeight || '50px'; // Default height if not provided
           
            // fetching data for medal
                let medalImg;
                if (user.Rank === 1) {
                  medalImg = goldMedalImg;
                } else if (user.Rank === 2) {
                  medalImg = silverMedalImg;

                } else if (user.Rank === 3) {
                  medalImg = bronzeMedalImg;

                } else {
                  medalImg = null;
                }

              // fetching user image in name column
                let userImage;
                if(user.Name ==="Rakesh Sharma"){
                  userImage=userImg;
                }
                else if(user.Name==="Ankita Thakur" || user.Name==="Harsha Shivhare"){
                  userImage= userImg1;
                }
                else{
                  userImage= userImg2;
                }

                return (
                  <tr key={user.Rank} style={{ backgroundColor: color }}>

                    <td>{medalImg && <img src={medalImg} alt={`Medal for Rank ${user.Rank}`} width={medalWidth} height={medalHeight} />}</td>
                    <td>{user.Rank}</td>
                     <td>
                    <img src={userImage} alt={`Image for ${user.Name}`} width="50px" height="50px" className='userLogo' />

                    {user.Name}
                    </td> 

                    <td>{user.Designation}</td>
                    <td>{user["No. of hours worked"]}</td>
                    <td>
                      {arrow} {user.Changes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Img variant="top" src={userImg} height="110px" alt="Image 1" />
            <Card.Body>
              <Card.Text>
                <h5 style={{ color: 'blue', textAlign: 'center' }}>Employee of the Month</h5>
                <p style={{ fontSize: '17px', fontWeight: 'bold', textAlign: 'center' }}>
                  Rakesh Sharma<br />
                  <span style={{ fontSize: '15px', textAlign: 'center', color: 'grey', padding: '0px' }}>
                    UI/UX Designer
                  </span>
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={uiImg} height="70px" alt="Image 2" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserComp;




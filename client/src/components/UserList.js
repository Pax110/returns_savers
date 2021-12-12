import React, {useState, useEffect } from 'react'
import {Container, Table} from 'react-bootstrap'

const UserRow = ({firstName, lastName, email, address, city, province, postalCode, role})=> (
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{city}</td>
        <td>{province}</td>
        <td>{postalCode}</td>
        <td>{role}</td>
    </tr>
)

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function fetchUserData(){
            console.log('Fetching User List')
            let fetchList = await fetch('/auth/userList')
            let fetchedUserList = await fetchList.json()
            console.log(fetchedUserList)
            setUsers(fetchedUserList)
        }
        fetchUserData()
    }, [])
   
  return (
    <div>
      <h2>User List</h2>
      <Container>
          <Table>
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>Province</th>
                      <th>Postal Code</th>
                      <th>Role</th>
                  </tr>
              </thead>
              <tbody>
              {
                users.map((user, index) => {
                        return <UserRow key={index} 
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            address={user.address}
                            city={user.city}
                            province={user.province}
                            postalCode={user.postalCode}
                            role={user.role}
                        />
                    })
              }
                    
              </tbody>
          </Table>
      </Container>
    </div>
  )
}

export default UserList
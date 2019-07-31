import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Tab, Nav, Button, ListGroup } from 'react-bootstrap'
import './profile.sass'
// eslint-disable-next-line no-unused-vars
import Route from '../../components/list-components/Route'
// eslint-disable-next-line no-unused-vars
import UserInfo from '../../components/profile/UserInfo'
import CarsList from '../../components/profile/CarsList'
import { connect } from 'react-redux'
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../commands/rides'

class Profile extends React.Component {
  componentDidMount() {
    this.props.getFavourites()
  }

  render() {
    const { favourites = [] } = this.props
    const dRidesArr = favourites.map(item => {
      return (
        <Route
          routeid={item.id}
          key={item.id}
          depPoint={item.startPointName}
          destPoint={item.endPointName}
        />
      )
    })
    return (
      <>
        <UserInfo />
        <Tab.Container defaultActiveKey="favroutes">
          <Nav fill variant='tabs' >
            <Nav.Item className='tabs'>
              <Nav.Link eventKey="favroutes" className='text'>
                My Favorite Routes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='tabs'>
              <Nav.Link eventKey="cars" className='text'>
                My Cars
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="favroutes">
              {dRidesArr.length === 0 ? (
                <div className="noStuff">No favourites yet</div>
              ) : (
                  <ListGroup>{dRidesArr}</ListGroup>
                )}
            </Tab.Pane>
            <Tab.Pane eventKey="cars">
              <CarsList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
// eslint-disable-next-line no-unused-vars
import PassengerForm from '../../components/passenger-form/PassengerForm'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
// eslint-disable-next-line no-unused-vars
import RoutesList from '../../components/list-of-routes/RoutesList'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../commands/activeRides'

class NewRide extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenRide: {},
    }
  }

  componentDidMount() {
    this.props.getRides()
    this.mapComponent = React.createRef()
  }

  choose = async id => {
    if (id !== '') {
      await this.props.getRide(id)
      const current = this.props.currentRide
      this.setState({ chosenRide: current })
    }
  }

  handleSearchClick = event => {
    event.preventDefault()
    const points = this.mapComponent.current.getPoints()
    console.log(points);
  }

  render() {
    const { activeRides = [] } = this.props
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <Row>
              <ListGroup>
                <PassengerForm />
              </ListGroup>
            </Row>
            <Row>
              <Button
                variant="dark"
                type="submit"
                onClick={this.handleSearchClick}
              >
              Search
              </Button>
            </Row>
            <Row>
              <RoutesList
                rides={activeRides}
                getRide={this.choose.bind(this)}
              />
            </Row>
            <Row>
              <Button
                variant="dark"
                type="submit"
                onClick={event => event.preventDefault()}
              >
              Confirm
              </Button>
            </Row>
          </Col>
          <Col sm={7}>
            <Maps ref={this.mapComponent} onMapClick={console.log} needPlacemarks={true} showing={this.state.chosenRide} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRide)
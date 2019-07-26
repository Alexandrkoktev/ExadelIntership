import React from 'react'
// eslint-disable-next-line no-unused-vars
import Container from 'react-bootstrap/Container'
// eslint-disable-next-line no-unused-vars
import Row from 'react-bootstrap/Row'
// eslint-disable-next-line no-unused-vars
import Col from 'react-bootstrap/Col'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button'
// eslint-disable-next-line no-unused-vars
import Maps from '../../components/map/Maps'
// eslint-disable-next-line no-unused-vars
import DateSelector from '../../components/date/DateSelector'
import './oneRouteInfo.sass'
// eslint-disable-next-line no-unused-vars
import ListOfPassengers from '../../components/list-of-passengers/ListOfPassengers'
// eslint-disable-next-line no-unused-vars
import EditDate from '../../components/edit-date/EditDate'
// eslint-disable-next-line no-unused-vars
import DeleteButton from '../../components/delete-button/DeleteButton'
import { connect } from 'react-redux'
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../commands/info-about-passengers/passengers'

class OneRouteInfo extends React.Component {
  componentDidMount() {
    this.props.requestPassengers()
  }

  render() {
    const { passengers } = this.props
    return (
      <div className="one-route-info">
        <div className="block">
          <Container>
            <Row>
              <Col sm="6">
                <Maps />
              </Col>
              <Col sm="6">
                <ListOfPassengers passengers={passengers} />
              </Col>
            </Row>
            <Row>
              <div style={{ width: '35%' }}>
                <div style={{ float: 'left' }}>
                  <Col sm="4">
                    <DateSelector />
                  </Col>
                </div>
                <div style={{ float: 'right' }}>
                  <Col sm="1">
                    <EditDate />
                  </Col>
                </div>
              </div>
            </Row>
            <Row>
              <Col sm="11">
                <DeleteButton />
              </Col>
              <Col sm="1">
                <Button variant="dark">Ok</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneRouteInfo)

import {
  getDriverDataDone,
  getDriverDataStarting,
  getDriverDataError,
} from '../actions/driver'
import client from './axios'

export const getDriver = id => {
  return async function(dispatch) {
    try {
      dispatch(getDriverDataStarting())
      const { data } = await client({
        url: `/api/booking/${id}`,
        method: 'get',
      })
      dispatch(getDriverDataDone(data))
    } catch (e) {
      dispatch(getDriverDataError(e))
    }
  }
}

export const mapStateToProps = state => ({
  driverName: state.driver.driverName,
  phoneNumber: state.driver.phoneNumber,
})

export const mapDispatchToProps = dispatch => ({
  requestDriver: id => dispatch(getDriver(id)),
})

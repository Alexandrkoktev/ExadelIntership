import { combineReducers } from 'redux'
import userInfo from '../reducers/user'
import { connectRouter } from 'connected-react-router'
import rides from '../reducers/rides'
import favourites from '../reducers/rides'
import activeRoutes from '../reducers/rides'
import activeBookings from '../reducers/rides'
import routesHistory from '../reducers/rides'
import bookingHistory from '../reducers/rides'
import home from '../reducers/home'
import passengers from '../reducers/passengers'
import cars from '../reducers/cars'
import notifications from '../reducers/notifications'
import activeRides from '../reducers/activeRides'
import statistics from '../reducers/statistics'
import driver from '../reducers/driver'

const rootReducer = history =>
  combineReducers({
    activeRides,
    notifications,
    rides,
    favourites,
    activeRoutes,
    activeBookings,
    routesHistory,
    bookingHistory,
    userInfo,
    home,
    passengers,
    driver,
    cars,
    statistics,
    router: connectRouter(history),
  })
export default rootReducer

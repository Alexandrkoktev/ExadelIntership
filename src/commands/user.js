import { getUserDone, getUserError, getUserStarting } from '../actions/user'
import { fakeUser } from './fakeUser'

export const mapStateToProps = state => ({
  userinfo: state.userinfo,
})

export const mapDispatchToProps = dispatch => ({
  setUser: (email, password) => dispatch(getUser(email, password)),
})

export const getUser = (email, password) => {
  // redux-thunk
  return async function(dispatch) {
    try {
      dispatch(getUserStarting())
      const userInfo = await fakeUser(email, password)
      dispatch(getUserDone(userInfo))
    } catch (e) {
      dispatch(getUserError(e))
    }
  }
}

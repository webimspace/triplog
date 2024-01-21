import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperInputs: {
    flex: 1,
    width: '100%',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.BRAND_COLOR,
    borderWidth: 1,
    height: 50,
    width: '100%',
    marginBottom: 20,
    marginHorizontal: 'auto',
    padding: 5,
  },
  error: {
    color: COLORS.BRAND_RED,
  },
})

export default styles

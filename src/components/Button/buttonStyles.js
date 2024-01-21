import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/constants'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BRAND_RED,
    height: 50,
    width: '100%',
    marginHorizontal: 'auto',
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.WHITE,
  },
})

export default styles

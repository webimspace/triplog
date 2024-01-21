import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    backgroundColor: COLORS.BRAND_COLOR,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 'auto',
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: COLORS.WHITE,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'italic',
    paddingVertical: 2,
  },
  name: {
    fontSize: 18,
    color: COLORS.WHITE,
    paddingLeft: 5,
  },
})

export default styles

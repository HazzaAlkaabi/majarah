import Typography from 'typography'
import alton from 'typography-theme-alton'

alton.overrideThemeStyles = ({ rhythm }, options) => ({
    'a:hover': {
      color: rhythm('white'),
    }
  })
const typography = new Typography(alton)

export default typography

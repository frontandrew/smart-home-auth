import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    width: 500,
    minWidth: 'max-content',
    height: 'max-content',
    padding: spacing(4),
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing(8),
  },
  formHeader: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
}))
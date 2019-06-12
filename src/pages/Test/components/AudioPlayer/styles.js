const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing.unit,
  },
  progress: {
    width: '90%',
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

export default styles;

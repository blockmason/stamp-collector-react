export default () => async (dispatch, getState) => {
  const { main: { project, stamps } } = getState();

  try {
    const { owners } = await project.get('/getOwners');

    dispatch({
      stamps: stamps.map((stamp) => ({
        ...stamp,
        owner: owners[stamp.id]
      })),
      type: 'LIST_STAMPS'
    });
  } catch (error) {
    dispatch({ error, type: 'ERROR' });
  }
};

export default ({ stamp }) => async (dispatch, getState) => {
  const { main: { owner, project, stamps } } = getState();

  try {
    await project.post('/setOwnership', { id: stamp.id, owner });

    dispatch({
      stamps: stamps.map((it) => {
        if (stamp.id === it.id) {
          return { ...it, owner };
        }
        return it;
      }),
      type: 'LIST_STAMPS'
    });
  } catch (error) {
    dispatch({ error, type: 'ERROR' });
  }
};

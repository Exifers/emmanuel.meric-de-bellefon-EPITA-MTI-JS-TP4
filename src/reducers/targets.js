const initialState = {
  targets: [
    {
      id: 0,
      x: 10,
      y: 20,
      value: 10,
      colorValue: 10,
    },
    {
      id: 1,
      x: 50,
      y: 25,
      value: 2,
      colorValue: 2
    }
  ]
};

const targets = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_STOP':
      return initialState;
    case 'DECREMENT_TARGET':
      return {
        ...state,
        targets: [
          ...state.targets.filter(current => current.id !== action.payload.id),
          {
            ...state.targets.find(current => current.id === action.payload.id),
            value: action.payload.value - 1
          }
        ]
      };
    case 'TARGET_DIES':
      return {
        ...state,
        targets: state.targets.filter(target => target.id !== action.payload.id)
      };
    case 'DESTROY_TARGET':
      return {
        ...state,
        targets: state.targets.filter(target => target.id !== action.payload.id)
      };
    case 'CHANGE_TARGET_COLOR':
      return {
        ...state,
        targets: [
          ...state.targets.filter(current => current.id !== action.payload.id),
          {
            ...state.targets.find(current => current.id === action.payload.id),
            colorValue: action.payload.value,
          }
        ]
      };
    case 'SPAWN_TARGET':
      return {
        ...state,
        targets: [
          ...state.targets,
          {
            id: state.targets.length === 0
              ? 0
              : Math.max(...state.targets.map(target => target.id)) + 1,
            x: Math.floor(Math.random() * 100),
            y: Math.floor(Math.random() * 100),
            value: 20,
            colorValue: 20
          }
        ]
      };
    default:
      return state;
  }
};

export default targets

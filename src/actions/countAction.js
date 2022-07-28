export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const IncrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const DecrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  };
};

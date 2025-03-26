const Validator = {
    // Validate the user's choice
    validateUserChoice(choice) {
      if (!choice || choice === 'select option') {
        return {
          isValid: false,
          message: 'Please select a weapon (Rock, Paper, or Scissors)!',
        };
      }
      if (!['rock', 'paper', 'scissors'].includes(choice)) {
        return {
          isValid: false,
          message: 'Invalid weapon selected. Please choose Rock, Paper, or Scissors.',
        };
      }
      return {
        isValid: true,
        message: '',
      };
    },
  };
  
  export default Validator;
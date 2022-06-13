enum ValidatorConstant {
  Require,
  Email,
}

export interface ValidatorAction {
  type: ValidatorConstant;
  payload?: string | number;
}

export const VALIDATOR_REQUIRE = (): ValidatorAction => ({
  type: ValidatorConstant.Require,
});
export const VALIDATOR_EMAIL = (): ValidatorAction => ({
  type: ValidatorConstant.Email,
});

export const validate = (
  value: string,
  validators: ValidatorAction[]
): boolean => {
  let isValid = true;

  for (const validator of validators) {
    if (validator.type === ValidatorConstant.Require) {
      isValid = isValid && value.trim().length > 0;
    }

    if (validator.type === ValidatorConstant.Email) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value.trim());
    }
  }

  return isValid;
};

import React, { useEffect, useState, useRef, useMemo } from 'react';

import Section from '..';
import Input from '../../../Element/Input';
import Button from '../../../Element/Button';
import { useForm } from '../../../../hooks/form';
import { useApi } from '../../../../hooks/api';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../../../lib/validators';
import classes from './index.module.scss';

const COLLAPSE_DURATION = 1000;

const ContactForm: React.FC = () => {
  const { formState, setFormInput, setFormData } = useForm({
    email: { value: '', isValid: false },
    name: { value: '', isValid: false },
    subject: { value: '', isValid: false },
    message: { value: '', isValid: false },
  });

  const { status, error, api } = useApi();

  const [isValidated, setIsValidated] = useState(false);
  const [transitionFinished, setTransitionFinished] = useState(true);
  const [transitionSuspended, setTransitionSuspended] = useState(false);

  const finishedTimer = useRef<ReturnType<typeof setTimeout>>();
  const suspendedTiemr = useRef<ReturnType<typeof setTimeout>>();

  const sendEmailHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsValidated(false);

    if (isSuccess) {
      setTransitionSuspended(false);
      return;
    }

    // if (!formState.isValid) {
    //   console.log(formState.isValid);
    //   setIsValidated(true);
    //   return;
    // }

    await api(async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('asdf');
          // reject({ message: 'Something went wrong!' });
        }, 1000);
      });
    });
  };

  useEffect(() => {
    if (status !== 'pending') return;

    setTransitionFinished(false);
    setTransitionSuspended(true);
    finishedTimer.current && clearTimeout(finishedTimer.current);
    finishedTimer.current = setTimeout(() => {
      setTransitionFinished(true);
    }, COLLAPSE_DURATION);
  }, [status]);

  useEffect(() => {
    if (status !== 'success') return;

    suspendedTiemr.current && clearTimeout(suspendedTiemr.current);
    suspendedTiemr.current = setTimeout(() => {
      setTransitionSuspended(false);
    }, COLLAPSE_DURATION * 5);

    setFormData({ email: '', name: '', subject: '', message: '' });
  }, [status, setFormData]);

  useEffect(() => {
    if (status !== 'error') return;

    setTransitionSuspended(false);
  }, [status]);

  useEffect(() => {
    return () => {
      finishedTimer.current && clearTimeout(finishedTimer.current);
      suspendedTiemr.current && clearTimeout(suspendedTiemr.current);
    };
  }, []);

  const isPending = useMemo(() => {
    return status === 'pending' || !transitionFinished;
  }, [status, transitionFinished]);

  const isSuccess = useMemo(() => {
    return status === 'success' && transitionSuspended;
  }, [status, transitionSuspended]);

  const buttonMessage = useMemo(() => {
    let message = 'Send Email';

    if (isSuccess) {
      message = 'Email has sent successfully!';
    }

    if (isPending) {
      message = 'Sending Email . . .';
    }

    return message;
  }, [isPending, isSuccess]);

  const groupClasses = useMemo(
    () =>
      isPending || isSuccess
        ? [classes.collapsed, classes.group].join(' ')
        : classes.group,
    [isPending, isSuccess]
  );

  return (
    <Section id="contact">
      <div className={classes.container}>
        <form className={classes.form} noValidate onSubmit={sendEmailHandler}>
          <div className={groupClasses}>
            <div className={classes.header}>
              <h1>Contact me</h1>
              {error && !isPending && (
                <div className={classes.error}>{error}</div>
              )}
            </div>
            <div className={classes.inline}>
              <Input
                id="email"
                type="email"
                validators={[VALIDATOR_EMAIL()]}
                isValidated={isValidated}
                isSubmitted={isSuccess}
                onForm={setFormInput}
              />
              <Input
                id="name"
                validators={[VALIDATOR_REQUIRE()]}
                isValidated={isValidated}
                isSubmitted={isSuccess}
                onForm={setFormInput}
              />
            </div>
            <Input
              id="subject"
              validators={[VALIDATOR_REQUIRE()]}
              isValidated={isValidated}
              isSubmitted={isSuccess}
              onForm={setFormInput}
            />
            <Input
              id="message"
              textarea
              validators={[VALIDATOR_REQUIRE()]}
              isValidated={isValidated}
              isSubmitted={isSuccess}
              onForm={setFormInput}
            />
          </div>
          <Button wide success={isSuccess && !isPending} disabled={isPending}>
            {buttonMessage}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;

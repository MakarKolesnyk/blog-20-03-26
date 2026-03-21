import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";
import { loginUserAuth } from "../../store/userSlice";
import styles from "./LoginForm.module.scss";

const LoginForm = (props) => {
  const { closeModal } = props;
  const [showPassword, setShowPassword] = useState(false);
  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(loginUserAuth(values));
    closeModal();
  };
  return (
    <Formik
      initialValues={{ username: "emilys", password: "emilyspass" }}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form className={styles.form}>
            <label>
              <span>username</span>
              <Field name="username" placeholder="username" />
              <ErrorMessage name="username" />
            </label>
            <label className={styles.password}>
              <span>password</span>
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <span className={styles.eye} onClick={changeShowPassword}>
                {showPassword ? (
                  <svg viewBox="0 0 24 24" width={24} height={24}>
                    <path d={mdiEyeOffOutline} />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width={24} height={24}>
                    <path d={mdiEyeOutline} />
                  </svg>
                )}
              </span>
              <ErrorMessage name="password" />
            </label>
            <button type="submit">Log in</button>
          </Form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  closeModal: PropTypes.func,
};

export default LoginForm;

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as usersModule from "../redux/actions";

const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
  padding: 2px 0;
  margin-bottom: 5px;
`;

const TextInput = ({ label, children }) => {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      <input />
    </div>
  );
};

const Index = (props) => {
  return (
    <div className="container">
      <Link href="/about" as="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/users/[id]" as="/users/1">
        <a>User 1</a>
      </Link>
      <br />
      <Link href="/users/[id]" as="/users/2">
        <a>User 2</a>
      </Link>
      <br />
      <br />
      Hello {props.name}
      <br />
      <br />
      <Formik
        initialValues={{ name: props.name || "" }}
        onSubmit={(values) => props.updateName(values)}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="name"
              name="name"
              placeholder="name"
              value={values.name}
              component={TextInput}
            />

            <button onClick={handleSubmit} type="submit">
              submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateName: (values) => dispatch(usersModule.updateName(values)),
});

const mapStateToProps = (state) => {
  return { name: state.name };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

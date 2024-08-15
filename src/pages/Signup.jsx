import React from 'react';
import { StyledFormArea, StyledFormButton, Avatar, colors, StyledTitle, ButtonGroup, ExtraText, TextLink, CopyrightText } from '../components/Styles';

import Logo from '../assets/logo.png';

//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

import { FiMail, FiLock, FiUser, FiCalendar  } from "react-icons/fi";
import { ThreeDots } from "react-loader-spinner"

const Signup = () => {
  return (
    <div>
        <StyledFormArea>
            <Avatar image={Logo} />
            <StyledTitle color={colors.theme} size={30}>
                Member Signup
            </StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    repeatPassword: "",
                    dateOfBirth: "",
                    name: ""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email address")
                        .required("Required"),
                        password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                        name: Yup.string().required("Required"),
                        dateOfBirth: Yup.date().required("Required"),
                        repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
                    })
                }
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <TextInput
                        name="name"
                        type="text"
                        label="Full Name"
                        placeholder="John Doe"
                        icon={<FiUser />}
                        />

                        <TextInput
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="johndoe@example.com"
                        icon={<FiMail />}
                        />

                        <TextInput
                        name="dateOfBirth"
                        type="date"
                        label="Date of Birth"
                        icon={<FiCalendar />}
                        />

                        <TextInput 
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="**********"
                        icon={<FiLock />}
                        />

                        <TextInput 
                        name="repeatPassword"
                        type="password"
                        label="Repeat Password"
                        placeholder="**********"
                        icon={<FiLock />}
                        />
                        <ButtonGroup>
                            {!isSubmitting && (<StyledFormButton type='submit'>
                                Signup
                            </StyledFormButton>
                            )}
                            {isSubmitting && (
                                <ThreeDots
                                color={colors.theme}
                                height="40"
                                width="80"
                                />
                            )}
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                Already have an account? <TextLink to="/login">Login</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved &copy; 2024
        </CopyrightText>
    </div>
  )
}

export default Signup
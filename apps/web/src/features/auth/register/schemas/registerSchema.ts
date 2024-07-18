import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required!'),
    last_name: Yup.string().required('Last name is required!'),
    username: Yup.string().required('Username is required!'),
    phone_number: Yup.string().required('Phone Number is required!'),
    role: Yup.string().required('Role is required!'),
    email: Yup.string().email('Invalid email').required('Email is required!'),
    password: Yup.string().required('Password is required!'),
    confirm_password: Yup.string().required('Confirmation password is required!')
    .oneOf([Yup.ref('password'), ''], 'Password does not match'),
})
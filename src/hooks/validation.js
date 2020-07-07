export default function validation(values) {
    let errors = {};
    if (!values.username) {
        errors.username = "Username Required";
    } else if (values.username.length < 8) {
        errors.username = "Username must be more than 8 characters";
    }

    if (!values.password) {
        errors.password = "Password Required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters";
    }

    if (!values.email) {
        errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Please enter a valid email"
    }
}
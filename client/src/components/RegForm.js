import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Data from './Data';


class RegForm extends React.Component {
    constructor() {
        super();

        this.state= {
            dataList: [],
           
        };
    };

    componentDidMount(){
        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(res => { 
                this.setState({dataList: res.data});
            })
            .catch(err => {
                console.log(err)
            })
    };


    render() {
        return(
          
        <>
            <h1> Registration Form </h1>

            <Form>
                <Field type="text" name="username" placeholder="Username" />
                {this.props.touched.username && this.props.errors.username && (<p className="error">{this.props.errors.username}</p>)}

                <Field type="password" name="password" placeholder="Password" />
                {this.props.touched.password && this.props.errors.password && (<p className="error">{this.props.errors.password}</p>)}

                <button type="submit">Submit</button>
            </Form>

            {this.state.dataList.map((data) => {
                return <Data key={data.name} data={data} />
            })}
        </>
        
        );
    };
}


const FormikRegForm = withFormik({
    mapPropsToValues({ username, password }){
        return{
            username: username || "",
            password: password || "",
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('username is required'),
        password: Yup.string().required('password is required'),
    }),

    handleSubmit( values, {resetForm, setStatus}){
        console.log(values)
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log("response:", res)
                setStatus(res.data)
                resetForm();
            })
            .catch(err => {
                console.log("error:", err.response)
            })
    },

})(RegForm);

export default FormikRegForm;
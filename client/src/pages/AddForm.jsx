import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddForm = () => {
    const initialValues = {
        itemName: '',
        price: ''
    };

    const validationSchema = Yup.object({
        itemName: Yup.string().required('Required'),
        price: Yup.number().required('Required').min(0, 'Must be greater than or equal to 0')
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="itemName">Item Name</label>
                    <Field type="text" id="itemName" name="itemName" />
                    <ErrorMessage name="itemName" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Field type="number" id="price" name="price" />
                    <ErrorMessage name="price" />
                </div>
                <button type="submit">Add Item</button>
            </Form>
        </Formik>
    );
};

export default AddForm;

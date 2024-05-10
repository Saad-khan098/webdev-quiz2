// import React from 'react'
// import { Formik, Field, Form } from 'formik'
// import styles from './styles.module.css'


// export default function FormComponent({ data }) {

//     console.log(data);

//     let initialValues = {};
//     data.forEach(element => {
//         initialValues[element.id] = '';
//     });
//     console.log(initialValues)
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 validate={values => {
//                     const errors = {};
//                     data.forEach(elem => {
//                         if (!values[elem.id]) {
//                             errors[elem.id] = 'Required'
//                         }
//                     })
//                     console.log(errors)

//                     return errors;
//                 }}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                 }}
//             >
//                 {({
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                 }) => (
//                     <form onSubmit={handleSubmit}>
//                         {
//                             <div className="element></div>
//                             data.map((elem, index) => {
//                                 return (
//                                     <div key={elem.id}>
//                                         <p>{elem.question}</p>
//                                         <input
//                                             type="text"
//                                             name={elem.id}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             value={values[elem.id]}
//                                         />
//                                         {errors && errors[elem.id] && touched[elem.id] && <p>{errors[elem.id]}</p>}
//                                     </div>
//                                 )

//                             })
//                         }
//                         <button type="submit" disabled={isSubmitting}>
//                             Submit
//                         </button>
//                     </form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

import React from 'react'

export default function Form() {
  return (
    <div>Form</div>
  )
}


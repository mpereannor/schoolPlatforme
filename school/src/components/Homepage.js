import React from 'react';
import FormikLogin from './Login';
import FormikRegister from './Register';

const Homepage = props => { 
    return (
        <section className= 'forms'>
            <div className = 'main-forms'>
                <FormikRegister/>
                <FormikLogin/>
            </div>

        </section>
    )
}

export default Homepage;
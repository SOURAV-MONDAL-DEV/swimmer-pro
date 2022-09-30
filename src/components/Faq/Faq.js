import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faqDiv' >
            <h1>F A Q</h1>
            <div>
                <h2>1. How does React work?</h2>
                <p>React uses a declarative paradigm that makes it easier to
                     reason about your application and aims to be both efficient 
                     and flexible. It designs simple views for each state in your
                      application, and React will efficiently update and render 
                      just the right component when your data changes. The declarative
                       view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each 
                    responsible for rendering a small, reusable piece of HTML.
                </p>
            </div>
            <div>
                <h2>2. Difference between State and Props</h2>
                <p>The state is an updatable structure that is used to contain data or information about the component and can 
                    change over time. The change in state can happen as a response to user action or system event. It is the
                     heart of the react component which determines the behavior of the component and how it will render. A
                      state must be kept as simple as possible. It represents the component's local state or information. It 
                      can only be accessed or modified inside the component or by the component directly.
                </p>
                <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar
                     to the HTML attributes. It allows passing data from one component to other components. It is similar to function
                      arguments and can be passed to the component the same way as arguments passed in a function. Props are 
                      immutable so we cannot modify the props from inside the component.
                </p>
            </div>
            <div>
                <h2>3.What does useEffect do except data load?</h2>
                <p> By using this Hook, you tell React that your component needs to do something after render.<br></br> React will remember the
                     function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.<br></br> 
                     In this effect, we set the document title, but we could also perform data fetching or call some other imperative
                    API.
                </p>
            </div>
        </div>
    );
};

export default Faq;
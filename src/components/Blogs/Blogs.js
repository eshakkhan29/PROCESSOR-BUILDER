import React from 'react';

const Blogs = () => {
    return (
        <section className='container py-5'>
            <h1>My <span className='text-success'>Blogs</span></h1>
            <div className='row row-cols-1 row-cols-lg-2 g-3'>
                <div>
                    <h2 className='text-secondary'>How will you improve the performance of a React Application?</h2>
                    <p>1. Code spliting by import() in React</p>
                    <p>2. use lazy loading image in React</p>
                    <p>3. keeping component state where necessary</p>
                    <p>4. Memoizing React components to prevent unnecessary re-renders by useCallback and useMemo hook.</p>
                    <p>5. Avoid anonymous function in React</p>
                </div>
                <div>
                    <h2 className='text-secondary'>What are the different ways to manage a state in a React application?</h2>
                    <p>There are four types of states to manage in React app.</p>
                    <p>1. Local State: Local state is data we manage in one or another component by useState Hook.</p>
                    <p>2. Global State: Global state is data we manage across multiple components by useContext Hook or api.</p>
                    <p>3. Server state: Data that comes from an external server that must be integrated with our UI state, React Query makes easier to manage server state</p>
                    <p>4. URL state: Data that exists on our URLs, including the pathname and query parameters. useLocation are used in this case.</p>
                </div>
                <div>
                    <h2 className='text-secondary'>how does prototypal inheritance work?</h2>
                    <p>An internal and secret attribute known as [[Prototype]] may be found in every object. Javascript's Prototypal Inheritance capability is used to add methods and attributes to objects. It's a way for one thing to take on the characteristics and abilities of another. We've been using Object.getPrototypeOf and Object.setPrototypeOf to get and set the [[Prototype]] of an object. In modern language, _proto_ is used to set it.</p>
                </div>
                <div>
                    <h2 className='text-secondary'>What is a unit test?</h2>
                    <p>For decades, unit testing has been an effective means of ensuring the high quality of software. To ensure that an application fulfills its design standards and acts as expected, unit tests are essential.</p>
                </div>
                <div>
                    <h2 className='text-secondary'>Why should write unit tests?</h2>
                    <p>Unit tests have the advantage of focusing just on a single function, class, or method. The entire system's resilience may be attributed to the higher quality of its constituent components. As a consequence, we have solid code. The nature of the debugging process is likewise altered by unit tests.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
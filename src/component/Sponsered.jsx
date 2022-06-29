import React from 'react';

function Sponsered(person) {
    return (
        <div className="sponsered-box m-auto text-center ps-5 pe-5 rounded">
            <span className="pb-4">SPONSORED</span>
            <h2 className="pt-2 pb-3 mb-0">RandomAPI</h2>
            <p className="ps-5 pe-5">Want to create your own <strong>customized</strong> data generator for your application? heck out our other service RandomAPI!</p>
            <a className="rounded" href="#" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    );
}

export default Sponsered;
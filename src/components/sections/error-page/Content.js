import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <section className="section-padding errorpage">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 text-center">
                            <div className="error-texts relative">
                                <h1 className="mb-0">404</h1>
                                <h3>Ooops! That page doesn't exist!</h3>
                                <p>This file May Have Been Moved or Deleted. Be Sure to Check Your Spelling.</p>
                                <Link to="/" className="btn-second btn-submit">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
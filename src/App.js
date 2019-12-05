/* eslint-disable no-undef */
import React from "react";
//import logo from "./logo.jpg";
import "./App.css";
import PageHeading from "./components/PageHeading"

class Block extends React.Component {
    render() {
        return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xl-3 py-2">
                                <div className="card h-100 ">
                                    <div className="card-block">
                                        <form>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label>Index</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Timestamp</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Parent</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Nonce</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        disabled
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Data</label>
                                                    <textarea
                                                        className="form-control corm-control-sm"
                                                        value=""
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Hash</label>
                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm"
                                                        disabled
                                                    />
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button type="submit" className="btn btn-secondary">
                                                    Mine
                                            </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

function App()
{
    return (
        <>
            <PageHeading />
            <Block />
        </>
    );
}
export default App;
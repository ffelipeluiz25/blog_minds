import React from 'react';
type Properties = {
    Description: string;
    Key: string;
    Author: string;
    CreatedAt: string;
    Project: string;
}
export const Card = (props: Properties) => {
    return (
        <div className="col-12">
            <div className="card mb-rem-02">
                <div className="card-content">
                    <div className="card-body">
                        <div className="row">
                            <div className="d-flex align-content-center flex-wrap px-1">
                                <span className="dot background-enabled"></span>
                            </div>
                            <div className="col-5 pt-2 px-0">
                                <div className="row m-0">
                                    <div className="col-12 p-0">
                                        <i className="fa fa-copy copy-btn"></i>
                                        <h4>{props.Key}</h4>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-12">
                                        <h6>{props.Description}</h6>
                                    </div>
                                    <div className="col-12 pr-0">
                                        <h6><b>Created by: </b> {props.Author} - {props.CreatedAt} - {props.Project}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
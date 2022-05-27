import React from 'react';
import { Jumbotron } from './jumbotron';
import { Card } from './card';
export const Main = () => {
    return (
        <main role="main">
            <Jumbotron />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <Card Description="Add Note after Doc is declined" Key="add_note_decline_doc_webportal" Author="Rodrigo Alves" CreatedAt="12/09/21 11:45:17" Project="WebPortal" />
                        <Card Description="Branch is no longer used when enabled new CP" Key="agency_is_employer_credit_policy" Author="Luiz Felipe" CreatedAt="04/26/22 10:00:41" Project="API Credit Policy" />
                        <Card Description="Vendors mandatory by agency" Key="agency_vendors_mandatory" Author="Luiz Felipe" CreatedAt="11/24/21 09:18:43" Project="Ecommerce LFF" />
                        <Card Description="argyle connect remove paystub" Key="argyle_connect_remove_paystub" Author="Rodrigo Alves" CreatedAt="01/11/22 02:36:46" Project="WebPortal" />
                        <Card Description="table logs argyle" Key="argyle_logs_webhook" Author="Luiz Felipe" CreatedAt="01/31/22 12:35:31" Project="Ecommerce ALL" />
                    </div>
                </div>
            </div>
        </main>
    );
};
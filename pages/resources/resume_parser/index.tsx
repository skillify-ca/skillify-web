import React from 'react';
import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import { Parser_Top } from "../../../components/resources/resume_parser/parser"

export default function resume_parser() {

    return (
        <Parser_Top />
    );
}

resume_parser.getLayout = function getLayout(page) {
    return (
        <div className="theme-default">
            <LandingNavbar />
            {page}
        </div>
    );
};
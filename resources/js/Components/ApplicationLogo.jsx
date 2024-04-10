import React from 'react';

export default function ApplicationLogo({ theme }) {
    return (
        <a href='/' className="flex items-center"> {/* Ensures SVG and text are inline and vertically centered */}
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 402" width="34" height="34" className="flex-shrink-0"> {/* flex-shrink-0 prevents the logo from shrinking */}
                <title>Bracketi-ai</title>
                <style>
                    {`.s0 { fill: #101820 } .s1 { fill: #FEE715 }`} {/* Moved CSS here for demonstration */}
                </style>
                <g id="Layer_1">
                    <g id="Group">
                    <path id="&lt;Path&gt;" class="s0" d="m193.1 237.9h0.1z"/>
                    <path id="Shape 1" class="s1" d="m18 57c0-22.1 17.9-40 40-40h290c22.1 0 40 17.9 40 40v290c0 22.1-17.9 40-40 40h-290c-22.1 0-40-17.9-40-40z"/>
                    <path id="&lt;Path&gt;" class="s0" d="m258.3 166.1c0 7.6-2.4 14.7-6.4 20.5 4-5.8 6.4-12.9 6.4-20.5q0 0 0 0z"/>
                    <path id="&lt;Path&gt;" class="s0" d="m294.2 166.1q0 5.3-0.8 10.4c-0.9 6.2-2.6 12.3-5 17.9-2.5 5.6-5.6 10.9-9.3 15.7-4.9 6.3-10.9 11.8-17.6 16.2-6.7 4.4-14.2 7.7-22.2 9.6l-27.8-33.8h10.8q1.6 0 3.2-0.2c10.9-0.9 20.4-6.8 26.4-15.3 2-2.9 3.6-6.1 4.7-9.6 1.1-3.4 1.7-7.1 1.7-10.9 0-19.9-16.1-36.1-36-36.1h-82.5l-28.8 35.1 29.8 37 29 35.8h-47.8l-58.9-73 58-70.7h101.2c39.6 0 71.9 32.2 71.9 71.9z"/>
                    <path id="&lt;Path&gt;" class="s0" d="m293.5 176.5q0 0 0 0c-1.9 12.5-7 24-14.4 33.6q0 0 0 0c8 6.6 13.2 16.6 13.2 27.9 0 19.8-16.2 36-36.1 36h-42.9l28.6-34.9-2.6-3.2-27.8-33.8-29.5-36h-48.7l59.8 71.8h0.1l0.7 1-28.7 35.1-20.3 24.7-9.2 11.1h120.5c39.7 0 71.9-32.2 71.9-71.8 0-26.1-13.9-48.9-34.6-61.5z"/>
                    </g>
                </g>
            </svg>
            <a href="/" className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">Bracketi</a> {/* Added ml-2 for a little spacing between the SVG and the text */}
        </a>
    );
}

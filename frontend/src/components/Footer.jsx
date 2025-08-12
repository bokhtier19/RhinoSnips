import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#282A36] text-white p-4">
            <div className="flex justify-around items-center">
                <p>© 2025 RhinoSnips – AI-powered code snippet generator</p>
                <div>
                    <ul className="flex gap-4">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

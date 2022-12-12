import React from "react";
import { Box } from "@mui/material";

const Myservices = () => {
    return (
        <div>
            <section id="services">
                <Box>
                    <h2 style={{ textAlign: "center" }}>My Services</h2>

                    <Box>
                        <div className="boxContainer">
                            <ul>
                                <li>
                                    <div className="infoBox">
                                        <h3>
                                            Informational or Small Business
                                            Website{" "}
                                        </h3>
                                        <ul>
                                            <li>Website UI/UX Design</li>
                                            <li>Site Planning</li>
                                            <li>Web Hosting</li>
                                            <li>Database Management</li>
                                            <li>
                                                Please use contact form below
                                                for pricing and consultation
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="infoBox">
                                        {" "}
                                        <h3>Corporate Website</h3>
                                        <ul>
                                            <li>Website UI/UX Design</li>
                                            <li>Site Planning</li>
                                            <li>Web Hosting</li>
                                            <li>Database Management</li>
                                            <li>
                                                Please use contact form below
                                                for pricing and consultation
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="infoBox">
                                        {" "}
                                        <h3>Ecommerce Website</h3>
                                        <ul>
                                            <li>Website UI/UX Design</li>
                                            <li>Site Planning</li>
                                            <li>Web Hosting</li>
                                            <li>Database Management</li>
                                            <li>
                                                Please use contact form below
                                                for pricing and consultation
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="infoBox">
                                        {" "}
                                        <h3>
                                            Database Driven Website or Website
                                            Application
                                        </h3>
                                        <ul>
                                            <li>Website UI/UX Design</li>
                                            <li>Site Planning</li>
                                            <li>Web Hosting</li>
                                            <li>Database Management</li>
                                            <li>
                                                Please use contact form below
                                                for pricing and consultation
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </Box>
            </section>
        </div>
    );
};

export default Myservices;

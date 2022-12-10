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
                                        <h3>Website UI/UX Design</h3>
                                        <ul>
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
                                        <h3>Site Planning</h3>
                                        <ul>
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
                                        <h3>Web Hosting</h3>
                                        <ul>
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
                                        <h3>Database Management</h3>
                                        <ul>
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

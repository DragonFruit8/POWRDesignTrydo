import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        // tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        {/* <Tab>{tab2}</Tab> */}
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Website Developement/App. Concepts <span> - React/Javascript</span></a>
                                                    Make it better, make it right, measure thrice.
                                                </li>
                                                <li>
                                                    <a href="/service">Document Notarization<span> - Notary Public Serivces</span></a>
                                                    Notarize documents for legal purposes, take the pain out of searching and orchestrating.
                                                </li>
                                                <li>
                                                    <a href="/service">Electronic-Hop <span> - Live DJ</span></a>
                                                    Experience old sounds in a new way and explore vibrations through rhythmic music.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Field Technician I<span> - Mercury Broadband</span></a> 2023 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Field Technician<span> - MTI Mobile Technology Inc.</span></a> 2021 - 2023
                                               </li>
                                               <li>
                                                   <a href="/service">Owner/Software Developer<span> - POWR Design </span></a> 2020 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Ballroom Dance Instuctor<span> - Aurthur Murry Dance Studio </span></a> 2020 - 2021
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">BSc In Occupational Studies (Focus: Software Developement)<span> - Kalamazoo Valley Community College, Kalamazoo, MI</span></a> In Progress
                                               </li>
                                               <li>
                                                   <a href="/service">Bachelor Degree<span> - Eastern Michigan Univercity, Ypsilanti, MI</span></a> 2009
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
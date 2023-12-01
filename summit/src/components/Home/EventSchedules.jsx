import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LaxDiv from '../Shared/LaxDiv';
import EventsAGI from '../schedule/EventsAGI';
import EventsAlign from '../schedule/EventsAlign';

const EventSchedules = () => {
        return (
            <section className="schedule-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Maximize Your Journey at the AI Summit</span>
                        
                        <h2> <b>E</b>vent <b>O</b>utline</h2>
                        <LaxDiv text="Outline" dataPreset="driftRight" />

                        
                    </div>
                    

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab">
                                <EventsAGI />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="section-title">
                        {/* <span>10 events covering 10 topics</span> */}
                        <br></br> 
                        <br></br> 
                        <br></br> 
                        {/* <h2>Summit Events - Align Room (Previous)</h2>

                        <LaxDiv text="EventsAlign" dataPreset="driftLeft" /> */}
                    </div>
                    

                    <div className="row">
                        <div className="col-lg-12">
                            {/* <div className="tab">
                                <EventsAlign />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
}
 
export default EventSchedules;
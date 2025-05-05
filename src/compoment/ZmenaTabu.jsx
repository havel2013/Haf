import { useState, useEffect } from 'react';
import './tab.css'

export const ZmenaTabu = () => { 

    const tabs = document.querySelectorAll('.tab');
    const tabcontents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabcontents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');

        });
    });

    useEffect (() => {

    }, []);

    return (
        <div id="tabs">
  
        <div className="tab active" data-tab="Advancement">Advancements</div>
    
        <div className="tab" data-tab="Setup">Setup</div>
      </div>
    );
};
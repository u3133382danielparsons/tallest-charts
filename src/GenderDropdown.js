import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown.js';

export default function GenderDropdown( {genderSelected} ) {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Please Select Gender
                </Dropdown.Toggle>
            
                <Dropdown.Menu>
                    <Dropdown.Item onSelect={() => genderSelected("men")}>Men</Dropdown.Item>
                    <Dropdown.Item onSelect={() => genderSelected("women")}>Women</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
        </div>
    )
}

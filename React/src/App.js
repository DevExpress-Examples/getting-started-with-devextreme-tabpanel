import React, { useState, useCallback } from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import TabPanel, { Item } from "devextreme-react/tab-panel";
import Form, { SimpleItem } from "devextreme-react/form";
import TextArea from "devextreme-react/text-area";
import RadioGroup from "devextreme-react/radio-group";

const employeeData = {
  name: 'John Heart',
  position: 'CEO',
  hireDate: new Date(2012, 4, 13),
  officeNumber: 901,
  notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
  roles: ['Chief Officer', 'Administrator', 'Manager']
};

const tabNames = ['Employee', 'Notes', 'Role'];

function App() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
 
  const onRadioGroupValueChanged = useCallback((e) => {
    setSelectedTabIndex(tabNames.indexOf(e.value));
  }, []);

  const onTabSelectionChanged = useCallback((e) => {
    setSelectedTabIndex(tabNames.indexOf(e.addedItems[0].title));
  }, []);

  return (
    <div>
      <TabPanel 
        id="tabPanel"
        loop={true}
        animationEnabled={true} 
        swipeEnabled={true}
        selectedIndex={selectedTabIndex}
        onSelectionChanged={onTabSelectionChanged}>
          <Item title="Employee" icon="floppy">
            <Form 
              id="form"
              formData={employeeData}>
              <SimpleItem dataField="name" />
              <SimpleItem dataField="position" />
              <SimpleItem dataField="hireDate" />
              <SimpleItem dataField="officeNumber" />
            </Form>
          </Item>
          <Item title="Notes" icon="comment">
            <TextArea 
              id="textArea"
              defaultValue={employeeData.notes}
            />
          </Item>
          <Item title="Role" icon="isnotblank" badge="new">
            <RadioGroup 
              id="radioGroup"
              items={employeeData.roles}
              defaultValue={employeeData.roles[0]}
            />
          </Item>
      </TabPanel>

      <RadioGroup 
        items={tabNames}
        value={tabNames[selectedTabIndex]}
        layout="horizontal"
        onValueChanged={onRadioGroupValueChanged}
      />
    </div>
  )
}

export default App;

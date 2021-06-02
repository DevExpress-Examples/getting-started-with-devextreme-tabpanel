<template>
  <div>
    <DxTabPanel
      id="tabPanel"
      :loop="true"
      :animation-enabled="true" 
      :swipe-enabled="true"
      v-model:selected-index="selectedTabIndex">
      <DxItem title="Employee" icon="floppy">
        <template #default>
          <DxForm 
            id="form"
            :form-data="employeeData">
            <DxSimpleItem data-field="name" />
            <DxSimpleItem data-field="position" />
            <DxSimpleItem data-field="hireDate" />
            <DxSimpleItem data-field="officeNumber" />
          </DxForm>
        </template>
      </DxItem>
      <DxItem title="Notes" icon="comment">
        <template #default>
          <DxTextArea 
            id="textArea"
            v-model:value="employeeData.notes"
          />
        </template>
      </DxItem>
      <DxItem title="Role" icon="isnotblank" badge="new">
        <template #default>
          <DxRadioGroup 
            id="radioGroup"
            :items="employeeData.roles"
            v-model:value="employeeData.roles[0]"
          />
        </template>
      </DxItem>
    </DxTabPanel>

    <DxRadioGroup 
      :items="tabNames"
      :value="tabNames[selectedTabIndex]"
      layout="horizontal"
      @value-changed="onValueChanged"
    />
  </div>
</template>
<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DxTabPanel, { DxItem } from "devextreme-vue/tab-panel";
import DxForm, { DxSimpleItem } from "devextreme-vue/form";
import DxTextArea from "devextreme-vue/text-area";
import DxRadioGroup from "devextreme-vue/radio-group";

export default {
  components: {
    DxTabPanel,
    DxItem,
    DxForm,
    DxSimpleItem,
    DxTextArea,
    DxRadioGroup
  },
  data() {
    const employeeData = {
      name: 'John Heart',
      position: 'CEO',
      hireDate: new Date(2012, 4, 13),
      officeNumber: 901,
      notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
      roles: ['Chief Officer', 'Administrator', 'Manager']
    };

    const tabNames = ['Employee', 'Notes', 'Role'];

    return {
      employeeData,
      selectedTabIndex: 0,
      tabNames
    };
  },
  methods: {
    onValueChanged(e){
      this.selectedTabIndex = this.tabNames.indexOf(e.value);
    }
  }
};
</script>
<style>
#tabPanel {
  height: 250px;
  width: 500px;
  border: 1px solid;
}

#form, #radioGroup {
    padding: 15px; 
}

#textArea {
  padding: 15px; 
  height: 100%;
}
</style>
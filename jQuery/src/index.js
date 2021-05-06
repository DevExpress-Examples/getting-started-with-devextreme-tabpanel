$(function(){   
    $("#tabPanel").dxTabPanel({
        loop: true,
        animationEnabled: true,
        swipeEnabled: true,
        items: [{
            title: "Employee",
            icon: "floppy",
            template: function (itemData, itemIndex, element) {
                let formDiv = $("<div style='padding:15px'>")
                formDiv.appendTo(element);
                formDiv.dxForm({
                    formData: employeeData,
                    items: ["name", "position", "hireDate", "officeNumber"]
                }).dxForm('instance');
            }
        }, {
            title: "Notes",
            icon: "comment",
            template: function (itemData, itemIndex, element) {
                let textAreaDiv = $("<div style='padding:15px; height: 100%'>")
                textAreaDiv.appendTo(element);
                textAreaDiv.dxTextArea({
                    value: employeeData.notes
                }).dxTextArea('instance');
            }
        }, {
            title: "Role",
            icon: "isnotblank",
            badge: "new",
            template: function (itemData, itemIndex, element) {
                let radioGroupDiv = $("<div style='padding:15px'>")
                radioGroupDiv.appendTo(element);
                radioGroupDiv.dxRadioGroup({
                    items: ["Owner", "Administrator", "Manager"],
                    value: "Owner"
                }).dxRadioGroup('instance');
            }
        }]
    });
});

let employeeData = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: 'John has been in the Audio/Video industry since 1990.'
};
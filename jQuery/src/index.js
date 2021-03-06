$(function(){   
    const tabPanel = $("#tabPanel").dxTabPanel({
        loop: true,
        animationEnabled: true,
        swipeEnabled: true,
        selectedIndex: 0,
        onSelectionChanged: function(e) {
            const selectedTab = e.addedItems[0].title;
            tabSwitcherRadioGroup.option("value", selectedTab);
        },
        items: [{
            title: "Employee",
            icon: "floppy",
            template: function (_, _, element) {
                const formDiv = $("<div id='form'>")
                formDiv.dxForm({
                    formData: employeeData,
                    items: ["name", "position", "hireDate", "officeNumber"]
                });
                formDiv.appendTo(element);
            }
        }, {
            title: "Notes",
            icon: "comment",
            template: function (_, _, element) {
                const textAreaDiv = $("<div id='textArea'>")
                textAreaDiv.dxTextArea({
                    value: employeeData.notes
                });
                textAreaDiv.appendTo(element);
            }
        }, {
            title: "Role",
            icon: "isnotblank",
            badge: "new",
            template: function (_, _, element) {
                const radioGroupDiv = $("<div id='radioGroup'>")
                radioGroupDiv.dxRadioGroup({
                    items: employeeData.roles,
                    value: employeeData.roles[0]
                });
                radioGroupDiv.appendTo(element);
            }
        }]
    }).dxTabPanel("instance");

    const tabSwitcherRadioGroup = $("#radioGroupSwitcher").dxRadioGroup({
        items: tabNames,
        value: tabNames[0],
        layout: "horizontal",
        onValueChanged: function(e) {
            const selectedTabIndex = tabNames.indexOf(e.value);
            tabPanel.option("selectedIndex", selectedTabIndex);
        }
    }).dxRadioGroup("instance");
});

const employeeData = {
    name: "John Heart",
    position: "CEO",
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.",
    roles: ["Chief Officer", "Administrator", "Manager"]
};

const tabNames = ["Employee", "Notes", "Role"];

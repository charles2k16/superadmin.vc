(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{643:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"COUNTS"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"company_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"user_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"post_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"post_comment_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"tag_aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"aggregate"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:313}};t.loc.source={body:"query COUNTS {\n  company_aggregate {\n    aggregate {\n      count\n    }\n  }\n  user_aggregate {\n    aggregate {\n      count\n    }\n  }\n  post_aggregate {\n    aggregate {\n      count\n    }\n  }\n  post_comment_aggregate {\n    aggregate {\n      count\n    }\n  }\n\n  tag_aggregate {\n    aggregate {\n      count\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.COUNTS=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=r[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=l(e,n);o&&t.definitions.push(o)})),t}(t,"COUNTS")},660:function(e,n,t){var content=t(692);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(120).default)("75202e71",content,!0,{sourceMap:!1})},688:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Users"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"order_by"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"firstname"},value:{kind:"EnumValue",value:"asc_nulls_last"}},{kind:"ObjectField",name:{kind:"Name",value:"createdAt"},value:{kind:"EnumValue",value:"desc"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"profilePhoto"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isBlocked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isDeleted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"teams"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:264}};t.loc.source={body:"query Users {\n  user(order_by: {firstname: asc_nulls_last, createdAt : desc}) {\n    id\n    firstname\n    email\n    lastname\n    profilePhoto\n    createdAt\n    isBlocked\n    isDeleted\n    teams {\n      id\n      company {\n        id\n        name\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.Users=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=r[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=l(e,n);o&&t.definitions.push(o)})),t}(t,"Users")},689:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"toggleBlock"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isBlocked"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_user_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"isBlocked"},value:{kind:"Variable",name:{kind:"Name",value:"isBlocked"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isBlocked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:159}};t.loc.source={body:"mutation toggleBlock($id: Int!, $isBlocked: Boolean!) {\n  update_user_by_pk(pk_columns: {id: $id}, _set: {isBlocked: $isBlocked}) {\n    isBlocked\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.toggleBlock=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=r[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=l(e,n);o&&t.definitions.push(o)})),t}(t,"toggleBlock")},690:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"toggleBlock"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isDeleted"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_user_by_pk"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pk_columns"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"isDeleted"},value:{kind:"Variable",name:{kind:"Name",value:"isDeleted"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isDeleted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:159}};t.loc.source={body:"mutation toggleBlock($id: Int!, $isDeleted: Boolean!) {\n  update_user_by_pk(pk_columns: {id: $id}, _set: {isDeleted: $isDeleted}) {\n    isDeleted\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var r={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.toggleBlock=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=r[n]||new Set,d=new Set,c=new Set;for(o.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var o=l(e,n);o&&t.definitions.push(o)})),t}(t,"toggleBlock")},691:function(e,n,t){"use strict";t(660)},692:function(e,n,t){var o=t(119)(!1);o.push([e.i,".btnExport{margin-left:20px}.filtersUser{display:flex;align-items:center;margin-bottom:20px;flex-wrap:nowrap;overflow-x:auto}.search{width:300px}.table{width:100%;border:1px solid #e0e0e0;padding:20px}.table tbody tr:hover,.table thead{background-color:#f5f5f5}.table.dataTable{border-collapse:collapse}@media (max-width:768px){.search{width:100%;margin-bottom:10px}.filters{flex-wrap:wrap}.tableWrapper{clear:both;max-width:100%;overflow-x:auto;position:relative}.table{border:1px solid #e0e0e0;padding:20px;position:relative}.table,.table thead{width:100%}.table thead tr th{width:100%;font-size:12px}.table tbody tr td{font-size:12px}}",""]),e.exports=o},702:function(e,n,t){"use strict";t.r(n);t(16),t(30),t(261),t(58),t(80),t(22),t(20),t(23),t(101);var o=t(643),r=t.n(o),l=t(688),d=t.n(l),c=t(689),m=t.n(c),v=t(690),f=t.n(v),k=t(662),h=(t(652),t(653),t(654),t(655),t(646)),S=t.n(h),_=t(657),N=t(656),y=t.n(N),w={name:"App",components:{DatePicker:k.a},layout:"dashboard",data:function(){return{counts:{},users:[],search:"",plan:null,location:"",continents:[{name:"Europe",value:"europe",countries:["Albania","Austria","Belgium","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Norway","Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden","Switzerland","United Kingdom"]},{name:"Asia",value:"asia",countries:["Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"]},{name:"Africa",value:"africa",countries:["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic","Chad","Comoros","Congo","Côte d'Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Sao Tome and Principe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"]},{name:"North America",value:"north-america",countries:["Canada","United States","Mexico"]},{name:"South America",value:"south-america",countries:["Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"]},{name:"Oceania",value:"oceania",countries:["Australia","Fiji","Kiribati","Marshall Islands","Micronesia","Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"]}],countries:[],selectedContinent:null,dateRange:null}},fetch:function(){this.getCounts(),this.getUsers()},computed:{filteredUsers:function(){var e=this;return this.users.filter((function(n){var t,o,r,l,d=e.search?e.search.toLowerCase():"",c=(null===(t=n.firstname)||void 0===t?void 0:t.toLowerCase().includes(d))||(null===(o=n.lastname)||void 0===o?void 0:o.toLowerCase().includes(d))||(null===(r=n.email)||void 0===r?void 0:r.toLowerCase().includes(d))||(null===(l=n.teams)||void 0===l?void 0:l.some((function(e){var n;return null===(n=e.company.name)||void 0===n?void 0:n.toLowerCase().includes(d)}))),m=!e.dateRange||n.createdAt>=e.dateRange[0]&&n.createdAt<=e.dateRange[1];return c&&m}))},filtereBusinessByLocation:function(){var e=this;return this.location?this.users.filter((function(n){var t,o;return null===(t=n.country)||void 0===t?void 0:t.toLowerCase().includes(null===(o=e.location)||void 0===o?void 0:o.toLowerCase())})):this.users},usersToDownload:function(){return this.users.map((function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,createdAt:e.createdAt,isBlocked:e.isBlocked,isDeleted:e.isDeleted}}))}},methods:{getCounts:function(){var e=this;this.$apollo.query({query:r.a}).then((function(n){var data=n.data;console.log(data),e.counts=data}))},getUsers:function(){var e=this;this.$apollo.query({query:d.a}).then((function(n){var data=n.data;console.log(data),e.users=data.user,S()("#datatable").DataTable({responsive:!0,searching:!1})}))},toggleBlock:function(e,n){var t=this,o=!n;this.$apollo.mutate({mutation:m.a,variables:{id:e,isBlocked:o}}).then((function(e){e.data;t.getUsers()}))},toggleDelete:function(e,n){var t=this,o=!n;this.$apollo.mutate({mutation:f.a,variables:{id:e,isDeleted:o}}).then((function(e){e.data;t.getUsers()}))},changeContinent:function(){var e=this;this.selectedContinent&&this.continents.forEach((function(n){n.name===e.selectedContinent&&(e.countries=n.countries)}))},filterHandlerByPlan:function(){var e=this;return this.plan?this.filteredBusinesses.filter((function(n){var t;return(null===(t=n.plan)||void 0===t?void 0:t.name)===e.plan})):this.filteredBusinesses},filterCountryHandler:function(){var e=this;return this.location&&(console.log(this.location,"location"),this.filterHandlerByPlan().filter((function(n){return n.country===e.location}))),this.filtereBusinessByLocation},open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},exportUsers:function(){var data=this.filteredUsers.map((function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,teams:e.teams.map((function(e){return e.name})).join(", "),createdAt:e.createdAt,isBlocked:e.isBlocked,isDeleted:e.isDeleted}}));!function(e,n){var t={Sheets:{data:_.a.json_to_sheet(e)},SheetNames:["data"]},o=_.b(t,{bookType:"csv",type:"array"}),r=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});y.a.saveAs(r,n)}(data,"users")}},watch:{filteredUsers:function(e){S()("#datatable").DataTable().destroy(),this.$nextTick((function(){S()("#datatable").DataTable({searching:!1,lengthChange:!1,responsive:!0})}))}}},C=(t(691),t(100)),component=Object(C.a)(w,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("c-heading",{attrs:{marginBottom:"20px"}},[e._v("Users")]),e._v(" "),t("c-stat-group",[t("c-stat",[t("c-stat-label",[e._v("Total Register Users")]),e._v(" "),t("c-stat-number",[e._v(e._s(e.counts.user_aggregate?e.counts.user_aggregate.aggregate.count:0))]),e._v(" "),t("c-stat-helper-text",[t("c-stat-arrow",{attrs:{type:"increase"}}),e._v("\n        0.0%\n      ")],1)],1)],1),e._v(" "),t("div",{staticClass:"filtersUser"},[t("c-input-group",{attrs:{mr:"5"}},[t("c-input-left-element",[t("i",{staticClass:"fa fa-search"})]),e._v(" "),t("c-input",{staticClass:"search",attrs:{type:"text",placeholder:"Search business by name,company"},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1),e._v(" "),t("date-picker",{staticClass:"search",attrs:{range:"",placeholder:"Select date range"},model:{value:e.dateRange,callback:function(n){e.dateRange=n},expression:"dateRange"}}),e._v(" "),t("download-csv",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"downloadCSV1",attrs:{data:e.usersToDownload,name:"VC-USERS-"+new Date+".csv"}}),e._v(" "),t("c-button",{staticClass:"btnExport",attrs:{"variant-color":"blue",size:"sm"},on:{click:e.exportUsers}},[e._v("\n      Export\n    ")])],1),e._v(" "),t("div",{staticClass:"tableWrapper"},[t("table",{staticClass:"table",attrs:{id:"datatable"}},[e._m(0),e._v(" "),t("tbody",e._l(e.filteredUsers,(function(n,o){return t("tr",{key:o},[t("td",[t("c-avatar",{attrs:{name:n.firstname?n.firstname+" "+n.lastname:null}})],1),e._v(" "),t("td",[e._v("\n            "+e._s(n.firstname?n.firstname+" "+n.lastname:"No name")+"\n            "),n.isBlocked?t("c-badge",{attrs:{mx:"2","variant-color":"yellow"}},[e._v("blocked")]):e._e(),e._v(" "),n.isDeleted?t("c-badge",{attrs:{mx:"2","variant-color":"red"}},[e._v("deleted")]):e._e()],1),e._v(" "),t("td",[e._v(e._s(n.email))]),e._v(" "),t("td",[e._v("\n            "+e._s(n.teams.length?"":"Pending Invites")+"\n            "),t("ul",e._l(n.teams,(function(n,o){return t("li",{key:o},[e._v("\n                "+e._s(n.company.name)+"\n              ")])})),0)]),e._v(" "),t("td",[e._v(e._s(e.$moment(n.createdAt).calendar()))]),e._v(" "),t("td",[t("c-menu",[t("c-menu-button",{staticClass:"actions",attrs:{"aria-controls":o,"right-icon":"chevron-down"}},[e._v("\n                Actions\n              ")]),e._v(" "),t("c-menu-list",{attrs:{id:o}},[t("c-menu-item",{attrs:{as:"nuxt-link",to:"./user/"+n.id}},[e._v("View")]),e._v(" "),n.isDeleted?e._e():t("c-menu-item",{on:{click:function(t){return e.toggleBlock(n.id,n.isBlocked)}}},[e._v(e._s(n.isBlocked?"Unblock":"Block"))]),e._v(" "),n.isBlocked?e._e():t("c-menu-item",{on:{click:function(t){return e.toggleDelete(n.id,n.isDeleted)}}},[e._v(e._s(n.isDeleted?"Undelete":"Delete"))])],1)],1)],1)])})),0)])])],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",[t("tr",[t("th"),e._v(" "),t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Email")]),e._v(" "),t("th",[e._v("Companies")]),e._v(" "),t("th",[e._v("Registeration Date")]),e._v(" "),t("th",[e._v("Actions")])])])}],!1,null,null,null);n.default=component.exports;t(260)(component,{CHeading:t(35).CHeading,CStatLabel:t(35).CStatLabel,CStatNumber:t(35).CStatNumber,CStatArrow:t(35).CStatArrow,CStatHelperText:t(35).CStatHelperText,CStat:t(35).CStat,CStatGroup:t(35).CStatGroup,CInputLeftElement:t(35).CInputLeftElement,CInput:t(35).CInput,CInputGroup:t(35).CInputGroup,CButton:t(35).CButton,CAvatar:t(35).CAvatar,CBadge:t(35).CBadge,CMenuButton:t(35).CMenuButton,CMenuItem:t(35).CMenuItem,CMenuList:t(35).CMenuList,CMenu:t(35).CMenu})}}]);
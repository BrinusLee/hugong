webpackJsonp([14],{"6mFV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Xxa5"),i=a.n(l),n=a("exGp"),r=a.n(n),s={components:{ContentHeadTop:a("4jVa").a},created:function(){this.searchCareworkers()},methods:{statusRow:function(e,t){},modifyRow:function(e,t){},deleteRow:function(e,t){t.splice(e,1)},addCareWorker:function(){this.$router.push("addCareWorker")},cancel:function(){this.goBack()},searchCareworkers:function(){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$http.get("/hugongljb/get_hugongs").then(function(t){console.log(t),e.careworkerList=t.data.data.list,console.log(e.careworkerList)});case 1:case"end":return t.stop()}},t,e)}))()}},data:function(){return{careworkerList:[],tableData4:[{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"},{siteName:"北京友谊医院管理站",hospitalName:"上海静安医院",administrator:"王小虎",region:"普陀区",detailedAddress:"上海市普陀区金沙江路 1518 弄"}]}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"router-content"},[a("content-head-top",{staticClass:"router-content-header"}),e._v(" "),a("el-row",{staticClass:"router-content-body"},[a("el-row",{staticStyle:{padding:"10px",display:"flex"}},[a("el-input",{staticClass:"input-with-select",staticStyle:{width:"300px","font-size":"12px",flex:"0 0 25%"},attrs:{size:"medium",placeholder:"请输入护工姓名/工号/手机号"},model:{value:e.input5,callback:function(t){e.input5=t},expression:"input5"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchCareworkers(t)}},slot:"append"})],1),e._v(" "),a("el-select",{staticStyle:{"margin-left":"20px",width:"150px",flex:"0 0 10%"},attrs:{multiple:"","collapse-tags":"",size:"medium",placeholder:"护工星级"},model:{value:e.value11,callback:function(t){e.value11=t},expression:"value11"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticStyle:{"margin-left":"20px",width:"150px",flex:"0 0 10%"},attrs:{multiple:"","collapse-tags":"",size:"medium",placeholder:"护工状态"},model:{value:e.value11,callback:function(t){e.value11=t},expression:"value11"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticStyle:{"margin-left":"20px",width:"150px",flex:"0 0 10%"},attrs:{multiple:"","collapse-tags":"",size:"medium",placeholder:"护工类型"},model:{value:e.value11,callback:function(t){e.value11=t},expression:"value11"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-breadcrumb-item",{staticStyle:{flex:"0 0 20%"}}),e._v(" "),a("el-button",{staticStyle:{flex:"0 0 8%"}},[e._v("导出")]),e._v(" "),a("el-button",{staticStyle:{flex:"0 0 8%"},attrs:{type:"success"},nativeOn:{click:function(t){return e.addCareWorker(t)}}},[e._v("新增")])],1),e._v(" "),a("div",{staticStyle:{margin:"10px"}},[a("el-table",{attrs:{data:e.careworkerList,border:"","max-height":"400"}},[a("el-table-column",{attrs:{fixed:"",prop:"hid",label:"护工号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"护工姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gender",label:"性别",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"stars",label:"护工星级",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"site_name",label:"所在医院",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"管理员",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.statusRow(t.$index,e.tableData4)}}},[e._v("状态")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.modifyRow(t.$index,e.tableData4)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.deleteRow(t.$index,e.tableData4)}}},[e._v("删除")])]}}])})],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(s,o,!1,function(e){a("UVCg")},null,null);t.default=c.exports},UVCg:function(e,t){}});
//# sourceMappingURL=14.676e023d305860aa592b.js.map
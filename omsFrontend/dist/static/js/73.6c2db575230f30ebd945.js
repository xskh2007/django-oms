webpackJsonp([73],{"4JbM":function(e,t,a){"use strict";function o(e){a("PbNW")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("jtw6"),l={components:{},props:["dnsname"],data:function(){var e=this;return{tableData:[],tabletotal:0,dnsapis:[],domain_searchDef:{colProps:{span:14}},record_searchDef:{colProps:{span:8}},listQuery:{dnsname:this.dnsname},paginationDef:{show:!1},showrecord:!1,recordData:[],domain_actionsDef:{colProps:{span:10},def:[{name:"同步",handler:function(){e.syncDomwin()}}]},record_actionsDef:{colProps:{span:16},def:[{name:"添加",icon:"el-icon-plus",handler:function(){e.addForm=!0}}]},addForm:!1,ruleForm:{action:"create",dnsname:"",domain:"",sub_domain:"",value:"",record_type:"A",ttl:600},record_types:["A","CNAME"],editForm:!1,rowdata:{},actionColDef:{label:"操作",tableColProps:{align:"center"},def:[{handler:function(t){e.editForm=!0,e.rowdata={action:"update",record_id:t.id,sub_domain:t.name,record_type:t.type,value:t.value,ttl:t.ttl}},buttonProps:{type:"success"},name:"编辑"}]},domainloading:!0,recordloading:!0}},created:function(){this.fetchDnsapiData()},methods:{fetchData:function(){var e=this;Object(r.g)(this.listQuery).then(function(t){e.tableData=t.data,e.tabletotal=t.data.length,e.domainloading=!1})},fetchDnsapiData:function(){var e=this,t={type:"dnspod"};Object(r.f)(t).then(function(t){e.dnsapis=t.data,e.fetchData(e.dnsapis[0].name)})},fetchRecordData:function(){var e=this,t={dnsname:this.listQuery.dnsname,domain:this.ruleForm.domain};this.ruleForm.dnsname=this.listQuery.dnsname,Object(r.h)(t).then(function(t){e.recordData=t.data,e.recordloading=!1})},handleRowClick:function(e){this.showrecord=!0,this.recordloading=!0,this.ruleForm.domain=e.name,this.fetchRecordData()},addGroupSubmit:function(){var e=this;Object(r.n)(this.ruleForm).then(function(){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchRecordData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroupSubmit:function(){var e=this;this.rowdata.dnsname=this.ruleForm.dnsname,this.rowdata.domain=this.ruleForm.domain,Object(r.n)(this.rowdata).then(function(){e.$message({message:"恭喜你，修改成功",type:"success"}),e.fetchRecordData(),e.editForm=!1}).catch(function(t){e.$message.error("修改失败"),console.log(t)})},syncDomwin:function(){var e=this;this.$message({message:"正在同步中，请稍后",type:"info"}),Object(r.a)(this.listQuery).then(function(){e.$message({message:"同步成功",type:"success"})})}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("域名列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.domainloading,expression:"domainloading"}],attrs:{data:e.tableData,"actions-def":e.domain_actionsDef,"search-def":e.domain_searchDef,"pagination-def":e.paginationDef},on:{"row-click":e.handleRowClick}},[a("el-table-column",{attrs:{prop:"name",label:"域名",sortable:"custom"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:16}},[e.showrecord?a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"card-title"},[e._v("记录列表")])]),e._v(" "),a("data-tables",{directives:[{name:"loading",rawName:"v-loading",value:e.recordloading,expression:"recordloading"}],attrs:{data:e.recordData,"actions-def":e.record_actionsDef,"action-col-def":e.actionColDef,"search-def":e.record_searchDef,"pagination-def":e.paginationDef}},[a("el-table-column",{attrs:{prop:"name",label:"记录",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value",label:"值",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ttl",label:"ttl",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"custom"}})],1)],1):e._e()],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{model:{value:e.ruleForm.sub_domain,callback:function(t){e.$set(e.ruleForm,"sub_domain",t)},expression:"ruleForm.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.record_type,callback:function(t){e.$set(e.ruleForm,"record_type",t)},expression:"ruleForm.record_type"}},e._l(e.record_types,function(e){return a("el-option",{key:e.id,attrs:{value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"value"}},[a("el-input",{model:{value:e.ruleForm.value,callback:function(t){e.$set(e.ruleForm,"value",t)},expression:"ruleForm.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.ruleForm.ttl,callback:function(t){e.$set(e.ruleForm,"ttl",t)},expression:"ruleForm.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addGroupSubmit("ruleForm")}}},[e._v("立即创建")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t}}},[a("el-form",{ref:"rowdata",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名称",prop:"sub_domain"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.sub_domain,callback:function(t){e.$set(e.rowdata,"sub_domain",t)},expression:"rowdata.sub_domain"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"record_type"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.record_type,callback:function(t){e.$set(e.rowdata,"record_type",t)},expression:"rowdata.record_type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"值",prop:"value"}},[a("el-input",{model:{value:e.rowdata.value,callback:function(t){e.$set(e.rowdata,"value",t)},expression:"rowdata.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ttl",prop:"ttl"}},[a("el-input",{model:{value:e.rowdata.ttl,callback:function(t){e.$set(e.rowdata,"ttl",t)},expression:"rowdata.ttl"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editGroupSubmit("rowdata")}}},[e._v("立即修改")])],1)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s},d=i,c=a("VU/8"),u=o,m=c(l,d,!1,u,null,null);t.default=m.exports},PbNW:function(e,t,a){var o=a("yPkW");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("3fc13395",o,!0)},yPkW:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])}});
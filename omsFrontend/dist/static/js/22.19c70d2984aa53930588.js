webpackJsonp([22],{"4orZ":function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".heng{margin:20px 0;height:1px;border:0;background-color:rgba(174,127,255,.38);color:#29e11c}.addticket{margin:50px;width:80%}",""])},A5Pw:function(e,t,r){var o=r("4orZ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("559b4c3a",o,!0)},GGwe:function(e,t,r){"use strict";function o(e){r("A5Pw")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("Dd8w"),s=r.n(l),a=r("ZTLr"),n=r("EMXe"),i=r("nSkA"),u=r("vMJZ"),c=r("QmSG"),m=r("NYxO"),p={components:{ElButton:n.a},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:sessionStorage.getItem("username"),level:2,action_user:"itsupport",follower:"",create_group:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:null,enclosureForm:{ticket:"",create_user:sessionStorage.getItem("username"),file:"",create_group:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],to_list:"",cc_list:"",uploadurl:c.uploadurl}},computed:s()({},Object(m.b)(["username"])),created:function(){this.getTicketUsers()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),Object(a.k)(t.ruleForm).then(function(e){"ok"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.enclosureFile&&(t.enclosureForm.file=t.enclosureFile,t.enclosureForm.ticket=e.data.id,Object(a.i)(t.enclosureForm));var r={to:t.ruleForm.action_user,cc:t.ruleForm.follower.join(),sub:"【新工单】"+t.ruleForm.title,content:window.location.href};Object(i.c)(r).then(function(e){t.$message({type:"success",message:"通知邮件发送成功"})}).catch(function(e){t.$message.error("通知邮件发送失败"),console.log(e)}),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(u.f)().then(function(t){e.users=t.data})},handleSuccess:function(e,t){var r=this,o=new FormData;o.append("username",this.enclosureForm.create_user),o.append("file",t.raw),o.append("create_time",this.afterFileUpload(t)),o.append("type",t.type),o.append("archive",this.route_path[1]),Object(i.d)(o).then(function(e){r.enclosureFile=e.data.filepath,"ok"===e.statusText&&(r.count+=1,r.$message({type:"success",message:"恭喜你，上传成功"}))}).catch(function(e){r.$message.error("上传失败"),r.$refs.upload.clearFiles(),console.log(e)})},afterFileUpload:function(e){var t=new Date(e.uid);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()},imgAdd:function(e,t){var r=this.$refs.md,o=new FormData;o.append("username",this.enclosureForm.create_user),o.append("file",t),o.append("create_time",this.afterUpload(t)),o.append("type",t.type),o.append("archive",this.route_path[1]),Object(i.d)(o).then(function(t){r.$imglst2Url([[e,t.data.file]])})},afterUpload:function(e){var t=new Date(e.lastModified);return t.getFullYear().toString()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+t.getDate()+t.getHours()+t.getMinutes()+t.getSeconds()}}},d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择指派人"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})})),e._v(" "),r("a",{staticStyle:{color:"rgba(250,17,255,0.49)","font-size":"18px"}},[e._v("如果不指派默认把工单指派给ipsport")])],1),e._v(" "),r("el-form-item",{attrs:{label:"跟踪者",prop:"follower"}},[r("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择跟踪者"},model:{value:e.ruleForm.follower,callback:function(t){e.$set(e.ruleForm,"follower",t)},expression:"ruleForm.follower"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("div",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"file-list":e.fileList,disabled:e.count>0}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>0},slot:"trigger"},[e._v("\n              上传文件\n            ")]),e._v("\n            (可以不用上传)\n            "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过500kb，"),r("a",{staticStyle:{color:"red"}},[e._v("添加工单页面只能上传1个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},f=[],g={render:d,staticRenderFns:f},h=g,F=r("VU/8"),v=o,_=F(p,h,!1,v,null,null);t.default=_.exports}});